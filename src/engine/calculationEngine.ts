import { STAT_KEYS, type StatBlock, type StatKey, type YokaiSpecies } from "./types";
const INV_98_F32 = 0.0102040814235806465;
const f32 = Math.fround;
export const zeroBlock = (): StatBlock => ({ hp: 0, strength: 0, spirit: 0, defense: 0 });
export function validLevel(level: number): boolean {
  return Number.isInteger(level) && level >= 1 && level <= 99;
}
export function ivWeightedTotal(iv: StatBlock): number {
  return iv.hp / 2 + iv.strength + iv.spirit + iv.defense;
}
export function isValidIvValue(stat: StatKey, value: number): boolean {
  return Number.isInteger(value) && value >= 0 &&
    (stat === "hp" ? value <= 80 && value % 2 === 0 : value <= 40);
}
export function isValidIvSpread(iv: StatBlock): boolean {
  return STAT_KEYS.every(stat => isValidIvValue(stat, iv[stat])) && ivWeightedTotal(iv) === 40;
}
export function calculateStat(input: {
  species: YokaiSpecies; stat: StatKey; level: number; iv: number; equipment?: number;
}): number {
  const { species, stat, level, iv, equipment = 0 } = input;
  if (!validLevel(level)) throw new RangeError("Level must be from 1 to 99.");
  if (!isValidIvValue(stat, iv)) throw new RangeError("Invalid IV for " + stat);
  if (!Number.isInteger(equipment)) throw new RangeError("Equipment bonus must be an integer.");
  const a = species.baseA[stat];
  const b = species.baseB[stat];
  // Blasters-specific operation order: DO NOT reuse the YW2 or YW3 order.
  const progress = f32(f32(level - 1) * INV_98_F32);
  const delta = f32(iv + b - a);
  const product = f32(delta * progress);
  const growth = f32(f32(a) + product);
  const raw = Math.max(1, Math.min(999, Math.trunc(growth)));
  return Math.max(1, raw + equipment);
}
export function calculateStats(
  species: YokaiSpecies, level: number, iv: StatBlock, equipment: StatBlock = zeroBlock(),
): StatBlock {
  if (!isValidIvSpread(iv)) {
    throw new RangeError("IVs must satisfy HP/2 + strength + spirit + defense = 40.");
  }
  return Object.fromEntries(STAT_KEYS.map(stat => [
    stat, calculateStat({ species, stat, level, iv: iv[stat], equipment: equipment[stat] }),
  ])) as StatBlock;
}
