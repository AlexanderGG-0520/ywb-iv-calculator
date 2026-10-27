import { GENERATED_YOKAI } from "./yokaiData.generated";
import type { YokaiSpecies } from "./types";
export const YOKAI: readonly YokaiSpecies[] = [...GENERATED_YOKAI].sort((a,b) => a.number - b.number);
const byId = new Map(YOKAI.map(s => [s.id, s]));
export function getYokaiSpecies(id: string): YokaiSpecies {
  const match = byId.get(id);
  if (!match) throw new Error("Unknown Yo-kai species: " + id);
  return match;
}
