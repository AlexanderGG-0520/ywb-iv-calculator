import { describe, expect, it } from "vitest";
import { calculateStat, calculateStats, isValidIvSpread, ivWeightedTotal, zeroBlock } from "./calculationEngine";
import { YOKAI } from "./yokaiData";
const shogun = YOKAI.find(s=>s.name==="ブシニャン");
describe("Blasters stat formula",()=>{
  it("includes Moon Rabbit species data",()=>{expect(YOKAI.length).toBeGreaterThan(400);expect(shogun).toBeDefined()});
  it("verifies the public Shogunyan level-1 and level-50 fixture",()=>{
    if(!shogun) throw new Error("Shogunyan missing");
    const iv={hp:16,strength:24,spirit:0,defense:8};
    expect(isValidIvSpread(iv)).toBe(true);
    expect(calculateStats(shogun,1,iv)).toEqual({hp:63,strength:48,spirit:8,defense:16});
    expect(calculateStats(shogun,50,iv)).toEqual({hp:259,strength:151,spirit:55,defense:81});
    expect(calculateStats(shogun,99,iv)).toEqual({hp:455,strength:254,spirit:102,defense:147});
  });
  it("treats HP as double-weighted and requires 40 points",()=>{
    expect(ivWeightedTotal({hp:20,strength:10,spirit:10,defense:10})).toBe(40);
    expect(isValidIvSpread({hp:21,strength:10,spirit:10,defense:10})).toBe(false);
    expect(isValidIvSpread({hp:20,strength:10,spirit:10,defense:9})).toBe(false);
  });
  it("adds equipment after raw-stat cap",()=>{
    if(!shogun) throw new Error("Shogunyan missing");
    const s=calculateStat({species:shogun,stat:"strength",level:1,iv:10,equipment:20});
    expect(s).toBe(shogun.baseA.strength+20);
    expect(calculateStats(shogun,1,{hp:20,strength:10,spirit:10,defense:10},zeroBlock()).hp).toBe(63);
  });
});
