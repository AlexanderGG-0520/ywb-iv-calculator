export const STAT_KEYS = ["hp", "strength", "spirit", "defense"] as const;
export type StatKey = (typeof STAT_KEYS)[number];
export type StatBlock = Record<StatKey, number>;
export interface YokaiSpecies {
  id: string;
  number: number;
  name: string;
  baseA: StatBlock;
  baseB: StatBlock;
  source: "togenyan-ywb-moon";
}
export type ScoreProfileId =
  | "balanced" | "hp" | "strength" | "spirit" | "defense"
  | "physical" | "magic" | "tank" | "physical-bulk" | "magic-bulk" | "mixed" | "healer";
export interface SearchInput {
  speciesId: string;
  level: number;
  observed: StatBlock;
  equipment: StatBlock;
  scoreProfile: ScoreProfileId;
  maxResults: number;
}
export interface ReverseResult {
  id: string;
  iv: StatBlock;
  calculated: StatBlock;
  score: number;
}
export interface SearchResponse {
  results: ReverseResult[];
  summary: {
    perStatCandidateCounts: StatBlock;
    validCandidateCount: number;
    ranges: Record<StatKey, { min: number; max: number } | null>;
    ambiguous: boolean;
    displayedCount: number;
  };
}
