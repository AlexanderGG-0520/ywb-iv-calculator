import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import { SCORE_PROFILE_IDS,calculateStatsTool,listEvaluationProfiles,reverseIvTool,searchYokai } from "./calculator";
const species=z.union([z.string().min(1),z.number().int().positive()])
 .describe("Exact species id, Japanese name, or encyclopedia number");
const stats=z.object({hp:z.number().int().min(1),strength:z.number().int().min(1),
 spirit:z.number().int().min(1),defense:z.number().int().min(1)}).strict();
const equipment=z.object({hp:z.number().int().min(-999).max(999).default(0),
 strength:z.number().int().min(-999).max(999).default(0),
 spirit:z.number().int().min(-999).max(999).default(0),
 defense:z.number().int().min(-999).max(999).default(0)}).strict();
const iv=z.object({hp:z.number().int().min(0).max(80).refine(v=>v%2===0,"HP IV must be even"),
 strength:z.number().int().min(0).max(40),spirit:z.number().int().min(0).max(40),
 defense:z.number().int().min(0).max(40)}).strict()
 .refine(v=>v.hp/2+v.strength+v.spirit+v.defense===40,
  "IV total must be HP/2+strength+spirit+defense=40");
const readOnly={readOnlyHint:true,destructiveHint:false,idempotentHint:true,openWorldHint:false};
function ok(data:Record<string,unknown>){return {content:[{type:"text" as const,text:JSON.stringify(data)}],structuredContent:data}}
function fail(err:unknown){return {content:[{type:"text" as const,text:err instanceof Error?err.message:String(err)}],isError:true}}
export function registerCalculatorTools(server:McpServer) {
 server.registerTool("search_yokai",{
  title:"Search Blasters Yo-kai",description:"Search the Moon Rabbit Crew 429-species playable-stat dataset by Japanese name, number, or exact id.",
  inputSchema:z.object({query:z.string().min(1),limit:z.number().int().min(1).max(50).default(20)}),annotations:readOnly,
 },async({query,limit})=>{try{return ok(searchYokai(query,limit))}catch(e){return fail(e)}});
 server.registerTool("list_evaluation_profiles",{
  title:"List IV scoring roles",description:"List all ranking profiles; these determine result ordering, not probability.",
  annotations:readOnly,
 },async()=>ok(listEvaluationProfiles()));
 server.registerTool("calculate_stats",{
  title:"Calculate Blasters stats",description:"Compute exact four playable stats for a 40-point weighted IV spread at level 1-99. Equipment is added after raw-stat clamping. No speed stat or training EV.",
  inputSchema:z.object({species,level:z.number().int().min(1).max(99),iv,equipment:equipment.optional()}),annotations:readOnly,
 },async(input)=>{try{return ok(calculateStatsTool(input))}catch(e){return fail(e)}});
 server.registerTool("reverse_iv",{
  title:"Reverse Blasters IVs",description:"Enumerate all HP/2+strength+spirit+defense=40 IV spreads whose visible stats match the supplied values, accounting for optional equipment bonuses. Returns total count, per-stat ranges, and ranked candidates; ambiguous candidates are not claimed exact.",
  inputSchema:z.object({species,level:z.number().int().min(1).max(99),observed:stats,
   equipment:equipment.optional(),scoreProfile:z.enum(SCORE_PROFILE_IDS).default("balanced"),
   maxResults:z.number().int().min(1).max(500).default(20)}),annotations:readOnly,
 },async(input)=>{try{return ok(await reverseIvTool(input))}catch(e){return fail(e)}});
}
