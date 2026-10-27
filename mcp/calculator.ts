import { Worker } from "node:worker_threads";
import { calculateStats, isValidIvSpread, ivWeightedTotal, zeroBlock, validLevel } from "../src/engine/calculationEngine";
import { reverseSearch } from "../src/engine/reverseSearch";
import { SCORE_PROFILE_IDS, SCORE_PROFILE_DESCRIPTIONS, SCORE_PROFILE_LABELS } from "../src/engine/scoring";
import type { ScoreProfileId, SearchInput, SearchResponse, StatBlock, YokaiSpecies } from "../src/engine/types";
import { STAT_KEYS } from "../src/engine/types";
import { YOKAI } from "../src/engine/yokaiData";
export { SCORE_PROFILE_IDS };
export function speciesSummary(s:YokaiSpecies) {return {id:s.id,number:s.number,name:s.name}}
export function searchYokai(query:string,limit=20) {
 const q=query.trim().toLocaleLowerCase();
 if(!q)throw new Error("query must not be blank");
 if(!Number.isInteger(limit)||limit<1||limit>50)throw new RangeError("limit must be between 1 and 50");
 const matches=YOKAI.filter(s=>s.name.toLocaleLowerCase().includes(q)||s.id.includes(q)||String(s.number).includes(q));
 return {totalMatches:matches.length,matches:matches.slice(0,limit).map(speciesSummary)};
}
export function resolveSpecies(input:string|number):YokaiSpecies {
 const q=String(input).trim().toLocaleLowerCase();
 if(!q)throw new Error("species is required");
 const byId=YOKAI.find(s=>s.id===q);
 if(byId)return byId;
 if(/^\d+$/.test(q)){const s=YOKAI.find(x=>x.number===Number(q));if(s)return s}
 const exact=YOKAI.filter(s=>s.name.toLocaleLowerCase()===q);
 if(exact.length===1)return exact[0];
 if(exact.length>1)throw new Error("Name is ambiguous; supply encyclopedia number or exact ID: "+exact.map(s=>s.id).join(", "));
 const partial=YOKAI.filter(s=>s.name.toLocaleLowerCase().includes(q));
 if(partial.length===1)return partial[0];
 if(partial.length>1)throw new Error("Name is ambiguous; use search_yokai to find the ID");
 throw new Error("No species matched "+String(input));
}
export function listEvaluationProfiles(){
 return {profiles:SCORE_PROFILE_IDS.map(id=>({id,label:SCORE_PROFILE_LABELS[id],description:SCORE_PROFILE_DESCRIPTIONS[id]}))};
}
function normalizeEquipment(e?:Partial<StatBlock>):StatBlock {
 const equipment={...zeroBlock(),...e};
 if(STAT_KEYS.some(s=>!Number.isInteger(equipment[s])))throw new Error("Equipment bonuses must be integers");
 return equipment;
}
function requireLevel(level:number) {if(!validLevel(level))throw new RangeError("Level must be 1-99")}
export function calculateStatsTool(input:{species:string|number,level:number,iv:StatBlock,equipment?:Partial<StatBlock>}) {
 const species=resolveSpecies(input.species); requireLevel(input.level);
 if(!isValidIvSpread(input.iv))throw new RangeError("Invalid IV spread. HP/2+STR+SPR+DEF must be 40.");
 const equipment=normalizeEquipment(input.equipment);
 const stats=calculateStats(species,input.level,input.iv,equipment);
 return {species:speciesSummary(species),level:input.level,iv:input.iv,ivWeightedTotal:ivWeightedTotal(input.iv),equipment,stats};
}
export interface ReverseToolInput{
 species:string|number;level:number;observed:StatBlock;equipment?:Partial<StatBlock>;scoreProfile?:ScoreProfileId;maxResults?:number;
}
export function prepareReverse(input:ReverseToolInput):{species:ReturnType<typeof speciesSummary>,request:SearchInput}{
 const species=resolveSpecies(input.species);requireLevel(input.level);
 const equipment=normalizeEquipment(input.equipment);
 const scoreProfile=input.scoreProfile??"balanced";
 if(!SCORE_PROFILE_IDS.includes(scoreProfile))throw new Error("Unknown scoreProfile");
 const maxResults=input.maxResults??20;
 if(!Number.isInteger(maxResults)||maxResults<1||maxResults>500)throw new RangeError("maxResults must be from 1 to 500");
 if(STAT_KEYS.some(s=>!Number.isInteger(input.observed[s])||input.observed[s]<1))
  throw new RangeError("Observed stats must be positive integers");
 return {species:speciesSummary(species),
  request:{speciesId:species.id,level:input.level,observed:input.observed,equipment,scoreProfile,maxResults}};
}
let active=0;
export function getReverseWorkerPoolStats(){return {active,maxConcurrent:1}}
export function reverseOnCurrentThread(input:ReverseToolInput){
 const {species,request}=prepareReverse(input);
 return {species,level:request.level,equipment:request.equipment,scoreProfile:request.scoreProfile,...reverseSearch(request)};
}
export async function reverseIvTool(input:ReverseToolInput){
 const {species,request}=prepareReverse(input);
 if(active>0)throw new Error("reverse_iv busy: retry after the previous calculation completes");
 active++;
 try{
  const response=await new Promise<SearchResponse>((resolve,reject)=>{
   const worker=new Worker(new URL("./reverse-worker.mjs",import.meta.url),{workerData:request});
   let finished=false;
   const timeout=setTimeout(()=>{if(finished)return;finished=true;void worker.terminate();reject(new Error("Reverse search timed out"))},15000);
   const settle=(fn:()=>void)=>{if(finished)return;finished=true;clearTimeout(timeout);fn()};
   worker.on("message",(m:{ok:boolean,response?:SearchResponse,error?:string})=>settle(()=>m.ok&&m.response?resolve(m.response):reject(new Error(m.error??"Worker error"))));
   worker.on("error",e=>settle(()=>reject(e)));
   worker.on("exit",code=>settle(()=>reject(new Error("Reverse worker exited with code "+code))));
  });
  return {species,level:request.level,equipment:request.equipment,scoreProfile:{id:request.scoreProfile,label:SCORE_PROFILE_LABELS[request.scoreProfile],description:SCORE_PROFILE_DESCRIPTIONS[request.scoreProfile]},...response};
 } finally{active--}
}
