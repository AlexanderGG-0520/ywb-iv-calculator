import { describe, expect, it } from "vitest";
import { reverseSearch } from "./reverseSearch";
import { calculateStats, zeroBlock } from "./calculationEngine";
import { YOKAI } from "./yokaiData";
const shogun=YOKAI.find(s=>s.name==="ブシニャン")!;
describe("IV reverse search",()=>{
 it("finds the known 40-point example at level 99",()=>{
   const iv={hp:16,strength:24,spirit:0,defense:8};
   const observed=calculateStats(shogun,99,iv);
   const result=reverseSearch({speciesId:shogun.id,level:99,observed,equipment:zeroBlock(),scoreProfile:"physical",maxResults:100});
   expect(result.results.some(x=>JSON.stringify(x.iv)===JSON.stringify(iv))).toBe(true);
   expect(result.summary.validCandidateCount).toBeGreaterThan(0);
 });
 it("does not fabricate certainty at level 1",()=>{
   const observed=calculateStats(shogun,1,{hp:20,strength:10,spirit:10,defense:10});
   const result=reverseSearch({speciesId:shogun.id,level:1,observed,equipment:zeroBlock(),scoreProfile:"balanced",maxResults:10});
   expect(result.summary.validCandidateCount).toBe(12341);
   expect(result.summary.ambiguous).toBe(true);
   expect(result.results).toHaveLength(10);
 });
 it("returns no candidate for impossible displayed stats",()=>{
   const result=reverseSearch({speciesId:shogun.id,level:99,observed:{hp:1,strength:1,spirit:1,defense:1},equipment:zeroBlock(),scoreProfile:"balanced",maxResults:10});
   expect(result.summary.validCandidateCount).toBe(0);
 });
});
