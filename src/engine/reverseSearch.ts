import { calculateStat, validLevel, zeroBlock } from "./calculationEngine";
import { scoreIv, SCORE_PROFILE_IDS } from "./scoring";
import { STAT_KEYS, type StatBlock, type StatKey, type SearchInput, type SearchResponse, type ReverseResult } from "./types";
import { getYokaiSpecies } from "./yokaiData";
function possibleIv(stat: StatKey): number[] {
  return Array.from({length:41},(_,n)=>stat==="hp" ? n*2 : n);
}
export function reverseSearch(input: SearchInput): SearchResponse {
  if (!validLevel(input.level)) throw new RangeError("Level must be from 1 to 99.");
  if (!SCORE_PROFILE_IDS.includes(input.scoreProfile)) throw new Error("Unknown score profile");
  if (!Number.isInteger(input.maxResults) || input.maxResults<1 || input.maxResults>500)
    throw new RangeError("maxResults must be from 1 to 500");
  for(const key of STAT_KEYS) {
    if(!Number.isInteger(input.observed[key]) || input.observed[key]<1)
      throw new RangeError("Observed values must be positive integers");
    if(!Number.isInteger(input.equipment[key]))
      throw new RangeError("Equipment modifiers must be integers");
  }
  const species = getYokaiSpecies(input.speciesId);
  const candidates = Object.fromEntries(STAT_KEYS.map(stat=>[
    stat, possibleIv(stat).filter(iv => calculateStat({
      species, stat, level:input.level, iv, equipment:input.equipment[stat],
    })===input.observed[stat]),
  ])) as Record<StatKey,number[]>;
  const perStatCandidateCounts=Object.fromEntries(STAT_KEYS.map(s=>[s,candidates[s].length])) as StatBlock;
  const defenseSet=new Set(candidates.defense);
  const ranges=Object.fromEntries(STAT_KEYS.map(s=>[s,null])) as SearchResponse["summary"]["ranges"];
  const results: ReverseResult[]=[];
  let validCandidateCount=0;
  // 40-point identity determines defense once the other three are chosen.
  // This avoids a 41^4 Cartesian search and makes level-1 ambiguity tractable.
  for(const hp of candidates.hp)for(const strength of candidates.strength)for(const spirit of candidates.spirit) {
    const defense=40-hp/2-strength-spirit;
    if(!defenseSet.has(defense)) continue;
    const iv={hp,strength,spirit,defense};
    for(const stat of STAT_KEYS) {
      const range=ranges[stat];
      ranges[stat]=range ? {min:Math.min(range.min,iv[stat]),max:Math.max(range.max,iv[stat])}:
        {min:iv[stat],max:iv[stat]};
    }
    validCandidateCount++;
    results.push({id:String(validCandidateCount),iv,calculated:{...input.observed},score:scoreIv(iv,input.scoreProfile)});
  }
  results.sort((a,b)=>b.score-a.score || b.iv.strength-a.iv.strength || b.iv.spirit-a.iv.spirit || b.iv.hp-a.iv.hp);
  return {results:results.slice(0,input.maxResults),
    summary:{perStatCandidateCounts,validCandidateCount,ranges,
      ambiguous:validCandidateCount!==1,displayedCount:Math.min(input.maxResults,validCandidateCount)}};
}
export const emptyEquipment = zeroBlock;
