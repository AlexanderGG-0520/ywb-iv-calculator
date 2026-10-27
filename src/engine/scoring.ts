import type { ScoreProfileId, StatBlock } from "./types";
export const SCORE_PROFILE_LABELS: Record<ScoreProfileId,string> = {
  balanced:"バランス", hp:"HP特化", strength:"ちから特化", spirit:"ようりょく特化",
  defense:"まもり特化", physical:"物理アタッカー", magic:"妖術アタッカー",
  tank:"壁・耐久", "physical-bulk":"耐久物理", "magic-bulk":"耐久妖術",
  mixed:"両刀", healer:"ヒーラー",
};
export const SCORE_PROFILE_DESCRIPTIONS: Record<ScoreProfileId,string> = {
  balanced:"40ポイントを4項目に均等配分した個体に近い順",
  hp:"HP個体値を重視", strength:"ちから個体値を重視",
  spirit:"ようりょく個体値を重視", defense:"まもり個体値を重視",
  physical:"ちからを最優先し、HPとまもりも評価",
  magic:"ようりょくを最優先し、HPとまもりも評価",
  tank:"HPとまもりを優先", "physical-bulk":"ちからとHP・まもりを重視",
  "magic-bulk":"ようりょくとHP・まもりを重視",
  mixed:"ちからとようりょくの両方を重視",
  healer:"ようりょく、HP、まもりを重視",
};
export const SCORE_PROFILE_IDS = Object.keys(SCORE_PROFILE_LABELS) as ScoreProfileId[];
const weights: Record<Exclude<ScoreProfileId,"balanced">,StatBlock> = {
  hp:{hp:1,strength:0,spirit:0,defense:0},
  strength:{hp:0,strength:1,spirit:0,defense:0},
  spirit:{hp:0,strength:0,spirit:1,defense:0},
  defense:{hp:0,strength:0,spirit:0,defense:1},
  physical:{hp:.35,strength:2,spirit:0,defense:.4},
  magic:{hp:.35,strength:0,spirit:2,defense:.4},
  tank:{hp:1.5,strength:0,spirit:0,defense:1.8},
  "physical-bulk":{hp:1.1,strength:1.8,spirit:0,defense:1.1},
  "magic-bulk":{hp:1.1,strength:0,spirit:1.8,defense:1.1},
  mixed:{hp:.1,strength:1.6,spirit:1.6,defense:.1},
  healer:{hp:1.0,strength:0,spirit:1.8,defense:.6},
};
export function scoreIv(iv:StatBlock, profile:ScoreProfileId):number {
  if(profile==="balanced") {
    return 40-[iv.hp/2,iv.strength,iv.spirit,iv.defense].reduce((s,n)=>s+Math.abs(10-n),0)/2;
  }
  const w=weights[profile];
  return iv.hp/2*w.hp + iv.strength*w.strength + iv.spirit*w.spirit + iv.defense*w.defense;
}
