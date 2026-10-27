import { readFile,writeFile } from "node:fs/promises";
const SOURCE_URL="https://togenyanweb.appspot.com/Yokai/ywb/yokaiList_getto.html";
const OUTPUT=new URL("../src/engine/yokaiData.generated.ts",import.meta.url);
const fallback=process.argv.includes("--allow-fallback");
const decode=s=>s.replace(/<[^>]*>/g,"").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").trim();
const cells=s=>[...s.matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/gi)].map(m=>decode(m[1]));
async function main(){
 try{
  const response=await fetch(SOURCE_URL);
  if(!response.ok)throw Error("HTTP "+response.status);
  const html=await response.text(),rows=[];
  for(const m of html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)){
   const c=cells(m[1]),number=Number(c[0]);
   if(!Number.isInteger(number)||number<1||c.length<10)continue;
   const v=c.slice(2,10).map(Number);
   if(v.some(x=>!Number.isInteger(x))||v[0]>999||v[4]>999)continue;
   const [ah,as,am,ad,bh,bs,bm,bd]=v;
   rows.push({id:"ywb-"+String(number).padStart(3,"0"),number,name:c[1],
     baseA:{hp:ah,strength:as,spirit:am,defense:ad},
     baseB:{hp:bh,strength:bs,spirit:bm,defense:bd},source:"togenyan-ywb-moon"});
  }
  if(rows.length<400||rows.length>460)throw Error("Unexpected dataset length: "+rows.length);
  await writeFile(OUTPUT,'import type { YokaiSpecies } from "./types";\n\n'+
   "// Generated from "+SOURCE_URL+"\n"+
   "// Boss encounters with HP Base A/B > 999 are excluded.\n"+
   "export const GENERATED_YOKAI = "+JSON.stringify(rows,null,2)+" as const satisfies readonly YokaiSpecies[];\n","utf8");
  console.log("Updated "+rows.length+" Blasters species.");
 }catch(error){if(!fallback)throw error;await readFile(OUTPUT,"utf8");console.warn("Using bundled species data:",error)}
}
await main();
