import type { YokaiSpecies } from "./types";

// Generated from https://togenyanweb.appspot.com/Yokai/ywb/yokaiList_getto.html
// Boss encounters with HP Base A/B > 999 are excluded (not playable IV candidates).
export const GENERATED_YOKAI = [
  {
    "id": "ywb-001",
    "number": 1,
    "name": "ぶようじん坊",
    "baseA": {
      "hp": 49,
      "strength": 16,
      "spirit": 3,
      "defense": 5
    },
    "baseB": {
      "hp": 344,
      "strength": 200,
      "spirit": 45,
      "defense": 82
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-002",
    "number": 2,
    "name": "がらあきん坊",
    "baseA": {
      "hp": 61,
      "strength": 19,
      "spirit": 5,
      "defense": 8
    },
    "baseB": {
      "hp": 382,
      "strength": 229,
      "spirit": 50,
      "defense": 99
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-003",
    "number": 3,
    "name": "さきがけの助",
    "baseA": {
      "hp": 64,
      "strength": 21,
      "spirit": 10,
      "defense": 6
    },
    "baseB": {
      "hp": 420,
      "strength": 233,
      "spirit": 81,
      "defense": 76
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-004",
    "number": 4,
    "name": "ダラケ刀",
    "baseA": {
      "hp": 58,
      "strength": 15,
      "spirit": 5,
      "defense": 10
    },
    "baseB": {
      "hp": 317,
      "strength": 180,
      "spirit": 79,
      "defense": 141
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-005",
    "number": 5,
    "name": "ザンバラ刀",
    "baseA": {
      "hp": 61,
      "strength": 19,
      "spirit": 9,
      "defense": 15
    },
    "baseB": {
      "hp": 364,
      "strength": 202,
      "spirit": 96,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-006",
    "number": 6,
    "name": "ダララだんびら",
    "baseA": {
      "hp": 68,
      "strength": 22,
      "spirit": 12,
      "defense": 17
    },
    "baseB": {
      "hp": 387,
      "strength": 225,
      "spirit": 102,
      "defense": 138
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-007",
    "number": 7,
    "name": "かたづ家来",
    "baseA": {
      "hp": 50,
      "strength": 11,
      "spirit": 15,
      "defense": 8
    },
    "baseB": {
      "hp": 337,
      "strength": 127,
      "spirit": 189,
      "defense": 77
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-008",
    "number": 8,
    "name": "アライ魔将",
    "baseA": {
      "hp": 69,
      "strength": 12,
      "spirit": 20,
      "defense": 15
    },
    "baseB": {
      "hp": 351,
      "strength": 140,
      "spirit": 205,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-009",
    "number": 9,
    "name": "獅子まる",
    "baseA": {
      "hp": 54,
      "strength": 14,
      "spirit": 5,
      "defense": 10
    },
    "baseB": {
      "hp": 337,
      "strength": 184,
      "spirit": 93,
      "defense": 108
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-010",
    "number": 10,
    "name": "万尾獅子",
    "baseA": {
      "hp": 77,
      "strength": 25,
      "spirit": 10,
      "defense": 16
    },
    "baseB": {
      "hp": 395,
      "strength": 223,
      "spirit": 131,
      "defense": 141
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-011",
    "number": 11,
    "name": "おこ武者",
    "baseA": {
      "hp": 49,
      "strength": 19,
      "spirit": 5,
      "defense": 8
    },
    "baseB": {
      "hp": 337,
      "strength": 158,
      "spirit": 95,
      "defense": 123
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-012",
    "number": 12,
    "name": "くしゃ武者",
    "baseA": {
      "hp": 65,
      "strength": 27,
      "spirit": 14,
      "defense": 21
    },
    "baseB": {
      "hp": 424,
      "strength": 228,
      "spirit": 106,
      "defense": 129
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-013",
    "number": 13,
    "name": "なまはげ",
    "baseA": {
      "hp": 71,
      "strength": 30,
      "spirit": 12,
      "defense": 24
    },
    "baseB": {
      "hp": 438,
      "strength": 244,
      "spirit": 98,
      "defense": 140
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-014",
    "number": 14,
    "name": "ちからモチ",
    "baseA": {
      "hp": 76,
      "strength": 13,
      "spirit": 4,
      "defense": 12
    },
    "baseB": {
      "hp": 379,
      "strength": 181,
      "spirit": 55,
      "defense": 195
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-015",
    "number": 15,
    "name": "やきモチ",
    "baseA": {
      "hp": 78,
      "strength": 9,
      "spirit": 4,
      "defense": 14
    },
    "baseB": {
      "hp": 395,
      "strength": 167,
      "spirit": 37,
      "defense": 211
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-016",
    "number": 16,
    "name": "あかなめ",
    "baseA": {
      "hp": 54,
      "strength": 15,
      "spirit": 10,
      "defense": 12
    },
    "baseB": {
      "hp": 308,
      "strength": 193,
      "spirit": 96,
      "defense": 164
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-017",
    "number": 17,
    "name": "寝ブタ",
    "baseA": {
      "hp": 67,
      "strength": 13,
      "spirit": 7,
      "defense": 18
    },
    "baseB": {
      "hp": 345,
      "strength": 158,
      "spirit": 95,
      "defense": 202
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-018",
    "number": 18,
    "name": "ねぶた",
    "baseA": {
      "hp": 78,
      "strength": 15,
      "spirit": 8,
      "defense": 24
    },
    "baseB": {
      "hp": 384,
      "strength": 170,
      "spirit": 101,
      "defense": 225
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-019",
    "number": 19,
    "name": "ひつま武士",
    "baseA": {
      "hp": 65,
      "strength": 14,
      "spirit": 4,
      "defense": 12
    },
    "baseB": {
      "hp": 329,
      "strength": 185,
      "spirit": 69,
      "defense": 177
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-020",
    "number": 20,
    "name": "ひまつ武士",
    "baseA": {
      "hp": 75,
      "strength": 20,
      "spirit": 8,
      "defense": 22
    },
    "baseB": {
      "hp": 380,
      "strength": 191,
      "spirit": 85,
      "defense": 224
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-021",
    "number": 21,
    "name": "おにぎり侍",
    "baseA": {
      "hp": 64,
      "strength": 15,
      "spirit": 5,
      "defense": 10
    },
    "baseB": {
      "hp": 376,
      "strength": 181,
      "spirit": 93,
      "defense": 102
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-022",
    "number": 22,
    "name": "焼きおに斬り",
    "baseA": {
      "hp": 73,
      "strength": 23,
      "spirit": 14,
      "defense": 12
    },
    "baseB": {
      "hp": 391,
      "strength": 215,
      "spirit": 168,
      "defense": 110
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-023",
    "number": 23,
    "name": "カブトさん",
    "baseA": {
      "hp": 64,
      "strength": 12,
      "spirit": 7,
      "defense": 21
    },
    "baseB": {
      "hp": 368,
      "strength": 156,
      "spirit": 68,
      "defense": 203
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-024",
    "number": 24,
    "name": "ゲンマ将軍",
    "baseA": {
      "hp": 77,
      "strength": 22,
      "spirit": 11,
      "defense": 24
    },
    "baseB": {
      "hp": 425,
      "strength": 198,
      "spirit": 84,
      "defense": 223
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-025",
    "number": 25,
    "name": "黄泉ゲンスイ",
    "baseA": {
      "hp": 80,
      "strength": 28,
      "spirit": 13,
      "defense": 27
    },
    "baseB": {
      "hp": 391,
      "strength": 237,
      "spirit": 108,
      "defense": 225
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-026",
    "number": 26,
    "name": "泥田坊",
    "baseA": {
      "hp": 73,
      "strength": 14,
      "spirit": 7,
      "defense": 18
    },
    "baseB": {
      "hp": 357,
      "strength": 186,
      "spirit": 85,
      "defense": 212
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-027",
    "number": 27,
    "name": "ブリー隊長",
    "baseA": {
      "hp": 78,
      "strength": 31,
      "spirit": 4,
      "defense": 15
    },
    "baseB": {
      "hp": 426,
      "strength": 245,
      "spirit": 71,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-028",
    "number": 28,
    "name": "メラメライオン",
    "baseA": {
      "hp": 68,
      "strength": 14,
      "spirit": 12,
      "defense": 8
    },
    "baseB": {
      "hp": 369,
      "strength": 189,
      "spirit": 169,
      "defense": 78
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-029",
    "number": 29,
    "name": "グラグライオン",
    "baseA": {
      "hp": 70,
      "strength": 19,
      "spirit": 16,
      "defense": 7
    },
    "baseB": {
      "hp": 381,
      "strength": 205,
      "spirit": 186,
      "defense": 63
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-030",
    "number": 30,
    "name": "とどろき獅子",
    "baseA": {
      "hp": 74,
      "strength": 17,
      "spirit": 22,
      "defense": 9
    },
    "baseB": {
      "hp": 400,
      "strength": 198,
      "spirit": 208,
      "defense": 84
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-031",
    "number": 31,
    "name": "しょうブシ",
    "baseA": {
      "hp": 62,
      "strength": 19,
      "spirit": 10,
      "defense": 11
    },
    "baseB": {
      "hp": 373,
      "strength": 198,
      "spirit": 107,
      "defense": 122
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-032",
    "number": 32,
    "name": "まさむね",
    "baseA": {
      "hp": 68,
      "strength": 26,
      "spirit": 12,
      "defense": 16
    },
    "baseB": {
      "hp": 399,
      "strength": 221,
      "spirit": 116,
      "defense": 149
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-033",
    "number": 33,
    "name": "むらまさ",
    "baseA": {
      "hp": 66,
      "strength": 24,
      "spirit": 20,
      "defense": 12
    },
    "baseB": {
      "hp": 385,
      "strength": 207,
      "spirit": 185,
      "defense": 108
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-034",
    "number": 34,
    "name": "くさなぎ",
    "baseA": {
      "hp": 71,
      "strength": 33,
      "spirit": 12,
      "defense": 16
    },
    "baseB": {
      "hp": 418,
      "strength": 236,
      "spirit": 134,
      "defense": 142
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-035",
    "number": 35,
    "name": "ベンケイ",
    "baseA": {
      "hp": 66,
      "strength": 18,
      "spirit": 8,
      "defense": 14
    },
    "baseB": {
      "hp": 381,
      "strength": 191,
      "spirit": 67,
      "defense": 171
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-036",
    "number": 36,
    "name": "からくりベンケイ",
    "baseA": {
      "hp": 71,
      "strength": 20,
      "spirit": 6,
      "defense": 16
    },
    "baseB": {
      "hp": 407,
      "strength": 208,
      "spirit": 52,
      "defense": 183
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-037",
    "number": 37,
    "name": "妖怪ガッツＫ",
    "baseA": {
      "hp": 65,
      "strength": 21,
      "spirit": 4,
      "defense": 15
    },
    "baseB": {
      "hp": 376,
      "strength": 225,
      "spirit": 79,
      "defense": 125
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-038",
    "number": 38,
    "name": "妖怪ガッツＦ",
    "baseA": {
      "hp": 61,
      "strength": 13,
      "spirit": 21,
      "defense": 10
    },
    "baseB": {
      "hp": 354,
      "strength": 134,
      "spirit": 223,
      "defense": 94
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-039",
    "number": 39,
    "name": "フユニャン",
    "baseA": {
      "hp": 68,
      "strength": 24,
      "spirit": 6,
      "defense": 8
    },
    "baseB": {
      "hp": 377,
      "strength": 231,
      "spirit": 71,
      "defense": 131
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-040",
    "number": 40,
    "name": "マスクドニャーン",
    "baseA": {
      "hp": 72,
      "strength": 28,
      "spirit": 3,
      "defense": 15
    },
    "baseB": {
      "hp": 411,
      "strength": 221,
      "spirit": 71,
      "defense": 147
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-041",
    "number": 41,
    "name": "やまと",
    "baseA": {
      "hp": 68,
      "strength": 20,
      "spirit": 10,
      "defense": 15
    },
    "baseB": {
      "hp": 374,
      "strength": 201,
      "spirit": 125,
      "defense": 145
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-042",
    "number": 42,
    "name": "カブキ猿",
    "baseA": {
      "hp": 74,
      "strength": 26,
      "spirit": 8,
      "defense": 18
    },
    "baseB": {
      "hp": 388,
      "strength": 220,
      "spirit": 123,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-043",
    "number": 43,
    "name": "クワノ武士",
    "baseA": {
      "hp": 66,
      "strength": 22,
      "spirit": 7,
      "defense": 18
    },
    "baseB": {
      "hp": 394,
      "strength": 201,
      "spirit": 63,
      "defense": 182
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-044",
    "number": 44,
    "name": "クワガ大将",
    "baseA": {
      "hp": 76,
      "strength": 29,
      "spirit": 10,
      "defense": 23
    },
    "baseB": {
      "hp": 426,
      "strength": 230,
      "spirit": 69,
      "defense": 205
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-045",
    "number": 45,
    "name": "オオクワノ神",
    "baseA": {
      "hp": 82,
      "strength": 32,
      "spirit": 11,
      "defense": 21
    },
    "baseB": {
      "hp": 432,
      "strength": 236,
      "spirit": 85,
      "defense": 217
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-046",
    "number": 46,
    "name": "鬼食い",
    "baseA": {
      "hp": 74,
      "strength": 29,
      "spirit": 16,
      "defense": 27
    },
    "baseB": {
      "hp": 433,
      "strength": 245,
      "spirit": 118,
      "defense": 164
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-047",
    "number": 47,
    "name": "いのちとり",
    "baseA": {
      "hp": 72,
      "strength": 28,
      "spirit": 26,
      "defense": 20
    },
    "baseB": {
      "hp": 402,
      "strength": 240,
      "spirit": 190,
      "defense": 138
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-048",
    "number": 48,
    "name": "ヒカリオロチ",
    "baseA": {
      "hp": 64,
      "strength": 37,
      "spirit": 8,
      "defense": 26
    },
    "baseB": {
      "hp": 410,
      "strength": 220,
      "spirit": 120,
      "defense": 180
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-049",
    "number": 49,
    "name": "さかさっ傘",
    "baseA": {
      "hp": 46,
      "strength": 4,
      "spirit": 16,
      "defense": 10
    },
    "baseB": {
      "hp": 309,
      "strength": 50,
      "spirit": 196,
      "defense": 135
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-050",
    "number": 50,
    "name": "化け草履",
    "baseA": {
      "hp": 52,
      "strength": 2,
      "spirit": 15,
      "defense": 9
    },
    "baseB": {
      "hp": 315,
      "strength": 70,
      "spirit": 189,
      "defense": 116
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-051",
    "number": 51,
    "name": "ズルズルづる",
    "baseA": {
      "hp": 52,
      "strength": 5,
      "spirit": 20,
      "defense": 6
    },
    "baseB": {
      "hp": 335,
      "strength": 84,
      "spirit": 204,
      "defense": 97
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-052",
    "number": 52,
    "name": "かぜカモ",
    "baseA": {
      "hp": 56,
      "strength": 7,
      "spirit": 19,
      "defense": 12
    },
    "baseB": {
      "hp": 319,
      "strength": 107,
      "spirit": 200,
      "defense": 139
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-053",
    "number": 53,
    "name": "つづかな僧",
    "baseA": {
      "hp": 51,
      "strength": 6,
      "spirit": 17,
      "defense": 10
    },
    "baseB": {
      "hp": 321,
      "strength": 94,
      "spirit": 192,
      "defense": 113
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-054",
    "number": 54,
    "name": "やめたい師",
    "baseA": {
      "hp": 61,
      "strength": 8,
      "spirit": 23,
      "defense": 12
    },
    "baseB": {
      "hp": 359,
      "strength": 101,
      "spirit": 213,
      "defense": 127
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-055",
    "number": 55,
    "name": "もうせん和尚",
    "baseA": {
      "hp": 67,
      "strength": 9,
      "spirit": 25,
      "defense": 8
    },
    "baseB": {
      "hp": 356,
      "strength": 152,
      "spirit": 226,
      "defense": 76
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-056",
    "number": 56,
    "name": "わすれん帽",
    "baseA": {
      "hp": 43,
      "strength": 3,
      "spirit": 19,
      "defense": 10
    },
    "baseB": {
      "hp": 362,
      "strength": 50,
      "spirit": 194,
      "defense": 84
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-057",
    "number": 57,
    "name": "メゾン・ドワスレ",
    "baseA": {
      "hp": 58,
      "strength": 10,
      "spirit": 28,
      "defense": 18
    },
    "baseB": {
      "hp": 404,
      "strength": 89,
      "spirit": 217,
      "defense": 135
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-058",
    "number": 58,
    "name": "ばか頭巾",
    "baseA": {
      "hp": 48,
      "strength": 1,
      "spirit": 18,
      "defense": 12
    },
    "baseB": {
      "hp": 336,
      "strength": 41,
      "spirit": 185,
      "defense": 128
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-059",
    "number": 59,
    "name": "のっぺら坊",
    "baseA": {
      "hp": 57,
      "strength": 10,
      "spirit": 18,
      "defense": 14
    },
    "baseB": {
      "hp": 330,
      "strength": 112,
      "spirit": 190,
      "defense": 138
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-060",
    "number": 60,
    "name": "ハナホ人",
    "baseA": {
      "hp": 63,
      "strength": 1,
      "spirit": 23,
      "defense": 2
    },
    "baseB": {
      "hp": 415,
      "strength": 46,
      "spirit": 206,
      "defense": 58
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-061",
    "number": 61,
    "name": "わらえ姉",
    "baseA": {
      "hp": 57,
      "strength": 6,
      "spirit": 17,
      "defense": 13
    },
    "baseB": {
      "hp": 362,
      "strength": 98,
      "spirit": 192,
      "defense": 113
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-062",
    "number": 62,
    "name": "青くちびる",
    "baseA": {
      "hp": 54,
      "strength": 10,
      "spirit": 21,
      "defense": 18
    },
    "baseB": {
      "hp": 355,
      "strength": 110,
      "spirit": 204,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-063",
    "number": 63,
    "name": "バクロ婆",
    "baseA": {
      "hp": 57,
      "strength": 7,
      "spirit": 19,
      "defense": 15
    },
    "baseB": {
      "hp": 346,
      "strength": 99,
      "spirit": 200,
      "defense": 125
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-064",
    "number": 64,
    "name": "ババァーン",
    "baseA": {
      "hp": 68,
      "strength": 8,
      "spirit": 24,
      "defense": 18
    },
    "baseB": {
      "hp": 377,
      "strength": 117,
      "spirit": 212,
      "defense": 144
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-065",
    "number": 65,
    "name": "ドクロ婆",
    "baseA": {
      "hp": 64,
      "strength": 10,
      "spirit": 27,
      "defense": 5
    },
    "baseB": {
      "hp": 373,
      "strength": 143,
      "spirit": 195,
      "defense": 99
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-066",
    "number": 66,
    "name": "モテモ天",
    "baseA": {
      "hp": 53,
      "strength": 14,
      "spirit": 18,
      "defense": 9
    },
    "baseB": {
      "hp": 354,
      "strength": 127,
      "spirit": 183,
      "defense": 101
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-067",
    "number": 67,
    "name": "モテマクール",
    "baseA": {
      "hp": 64,
      "strength": 18,
      "spirit": 26,
      "defense": 16
    },
    "baseB": {
      "hp": 393,
      "strength": 148,
      "spirit": 213,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-068",
    "number": 68,
    "name": "モテヌス",
    "baseA": {
      "hp": 62,
      "strength": 14,
      "spirit": 29,
      "defense": 19
    },
    "baseB": {
      "hp": 370,
      "strength": 118,
      "spirit": 223,
      "defense": 179
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-069",
    "number": 69,
    "name": "一旦ゴメン",
    "baseA": {
      "hp": 57,
      "strength": 10,
      "spirit": 16,
      "defense": 2
    },
    "baseB": {
      "hp": 319,
      "strength": 144,
      "spirit": 212,
      "defense": 35
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-070",
    "number": 70,
    "name": "あやまり倒し",
    "baseA": {
      "hp": 71,
      "strength": 20,
      "spirit": 25,
      "defense": 19
    },
    "baseB": {
      "hp": 368,
      "strength": 177,
      "spirit": 218,
      "defense": 167
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-071",
    "number": 71,
    "name": "こえんら",
    "baseA": {
      "hp": 54,
      "strength": 9,
      "spirit": 17,
      "defense": 13
    },
    "baseB": {
      "hp": 350,
      "strength": 107,
      "spirit": 194,
      "defense": 109
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-072",
    "number": 72,
    "name": "えんらえんら",
    "baseA": {
      "hp": 66,
      "strength": 16,
      "spirit": 26,
      "defense": 18
    },
    "baseB": {
      "hp": 389,
      "strength": 133,
      "spirit": 219,
      "defense": 144
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-073",
    "number": 73,
    "name": "でんぱく小僧",
    "baseA": {
      "hp": 51,
      "strength": 13,
      "spirit": 14,
      "defense": 7
    },
    "baseB": {
      "hp": 325,
      "strength": 139,
      "spirit": 173,
      "defense": 88
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-074",
    "number": 74,
    "name": "でんじん",
    "baseA": {
      "hp": 69,
      "strength": 22,
      "spirit": 26,
      "defense": 18
    },
    "baseB": {
      "hp": 380,
      "strength": 171,
      "spirit": 221,
      "defense": 158
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-075",
    "number": 75,
    "name": "はつでんしん",
    "baseA": {
      "hp": 77,
      "strength": 14,
      "spirit": 31,
      "defense": 24
    },
    "baseB": {
      "hp": 392,
      "strength": 153,
      "spirit": 245,
      "defense": 170
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-076",
    "number": 76,
    "name": "おでんじん",
    "baseA": {
      "hp": 73,
      "strength": 15,
      "spirit": 29,
      "defense": 22
    },
    "baseB": {
      "hp": 419,
      "strength": 106,
      "spirit": 228,
      "defense": 177
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-077",
    "number": 77,
    "name": "Ｕ．Ｓ．Ｏ．",
    "baseA": {
      "hp": 63,
      "strength": 6,
      "spirit": 20,
      "defense": 17
    },
    "baseB": {
      "hp": 348,
      "strength": 52,
      "spirit": 211,
      "defense": 199
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-078",
    "number": 78,
    "name": "アペリカン",
    "baseA": {
      "hp": 64,
      "strength": 14,
      "spirit": 21,
      "defense": 10
    },
    "baseB": {
      "hp": 361,
      "strength": 138,
      "spirit": 192,
      "defense": 119
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-079",
    "number": 79,
    "name": "うんがい鏡",
    "baseA": {
      "hp": 64,
      "strength": 8,
      "spirit": 20,
      "defense": 14
    },
    "baseB": {
      "hp": 351,
      "strength": 81,
      "spirit": 188,
      "defense": 180
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-080",
    "number": 80,
    "name": "うんがい三面鏡",
    "baseA": {
      "hp": 74,
      "strength": 12,
      "spirit": 28,
      "defense": 22
    },
    "baseB": {
      "hp": 398,
      "strength": 97,
      "spirit": 209,
      "defense": 226
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-081",
    "number": 81,
    "name": "ヤミ鏡",
    "baseA": {
      "hp": 67,
      "strength": 14,
      "spirit": 20,
      "defense": 21
    },
    "baseB": {
      "hp": 363,
      "strength": 120,
      "spirit": 194,
      "defense": 203
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-082",
    "number": 82,
    "name": "まぼ老師",
    "baseA": {
      "hp": 60,
      "strength": 6,
      "spirit": 27,
      "defense": 10
    },
    "baseB": {
      "hp": 352,
      "strength": 116,
      "spirit": 218,
      "defense": 119
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-083",
    "number": 83,
    "name": "かげ老師",
    "baseA": {
      "hp": 55,
      "strength": 12,
      "spirit": 29,
      "defense": 7
    },
    "baseB": {
      "hp": 331,
      "strength": 145,
      "spirit": 228,
      "defense": 101
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-084",
    "number": 84,
    "name": "ほう老師",
    "baseA": {
      "hp": 65,
      "strength": 11,
      "spirit": 28,
      "defense": 9
    },
    "baseB": {
      "hp": 386,
      "strength": 122,
      "spirit": 225,
      "defense": 112
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-085",
    "number": 85,
    "name": "さとりちゃん",
    "baseA": {
      "hp": 69,
      "strength": 4,
      "spirit": 22,
      "defense": 13
    },
    "baseB": {
      "hp": 337,
      "strength": 124,
      "spirit": 197,
      "defense": 152
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-086",
    "number": 86,
    "name": "よつめ",
    "baseA": {
      "hp": 73,
      "strength": 8,
      "spirit": 26,
      "defense": 11
    },
    "baseB": {
      "hp": 395,
      "strength": 118,
      "spirit": 217,
      "defense": 120
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-087",
    "number": 87,
    "name": "セバスチャン",
    "baseA": {
      "hp": 65,
      "strength": 14,
      "spirit": 24,
      "defense": 10
    },
    "baseB": {
      "hp": 396,
      "strength": 136,
      "spirit": 200,
      "defense": 118
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-088",
    "number": 88,
    "name": "天狗",
    "baseA": {
      "hp": 66,
      "strength": 10,
      "spirit": 27,
      "defense": 18
    },
    "baseB": {
      "hp": 404,
      "strength": 88,
      "spirit": 123,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-089",
    "number": 89,
    "name": "ほむら天狗",
    "baseA": {
      "hp": 62,
      "strength": 12,
      "spirit": 33,
      "defense": 14
    },
    "baseB": {
      "hp": 393,
      "strength": 107,
      "spirit": 139,
      "defense": 126
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-090",
    "number": 90,
    "name": "キュウビ",
    "baseA": {
      "hp": 68,
      "strength": 10,
      "spirit": 39,
      "defense": 21
    },
    "baseB": {
      "hp": 405,
      "strength": 133,
      "spirit": 231,
      "defense": 166
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-091",
    "number": 91,
    "name": "犬神",
    "baseA": {
      "hp": 74,
      "strength": 10,
      "spirit": 33,
      "defense": 19
    },
    "baseB": {
      "hp": 420,
      "strength": 122,
      "spirit": 238,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-092",
    "number": 92,
    "name": "ぬえ",
    "baseA": {
      "hp": 69,
      "strength": 21,
      "spirit": 25,
      "defense": 18
    },
    "baseB": {
      "hp": 386,
      "strength": 174,
      "spirit": 217,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-093",
    "number": 93,
    "name": "風魔猿",
    "baseA": {
      "hp": 72,
      "strength": 19,
      "spirit": 29,
      "defense": 16
    },
    "baseB": {
      "hp": 407,
      "strength": 158,
      "spirit": 231,
      "defense": 134
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-094",
    "number": 94,
    "name": "ドキ土器",
    "baseA": {
      "hp": 52,
      "strength": 11,
      "spirit": 2,
      "defense": 14
    },
    "baseB": {
      "hp": 316,
      "strength": 152,
      "spirit": 44,
      "defense": 178
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-095",
    "number": 95,
    "name": "だるだるま",
    "baseA": {
      "hp": 58,
      "strength": 12,
      "spirit": 2,
      "defense": 16
    },
    "baseB": {
      "hp": 329,
      "strength": 145,
      "spirit": 71,
      "defense": 175
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-096",
    "number": 96,
    "name": "だるまっちょ",
    "baseA": {
      "hp": 71,
      "strength": 21,
      "spirit": 12,
      "defense": 24
    },
    "baseB": {
      "hp": 393,
      "strength": 194,
      "spirit": 78,
      "defense": 225
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-097",
    "number": 97,
    "name": "ゴリだるま",
    "baseA": {
      "hp": 77,
      "strength": 22,
      "spirit": 7,
      "defense": 23
    },
    "baseB": {
      "hp": 406,
      "strength": 205,
      "spirit": 59,
      "defense": 220
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-098",
    "number": 98,
    "name": "うらや飯",
    "baseA": {
      "hp": 56,
      "strength": 5,
      "spirit": 14,
      "defense": 12
    },
    "baseB": {
      "hp": 305,
      "strength": 69,
      "spirit": 178,
      "defense": 168
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-099",
    "number": 99,
    "name": "プライ丼",
    "baseA": {
      "hp": 77,
      "strength": 9,
      "spirit": 20,
      "defense": 21
    },
    "baseB": {
      "hp": 410,
      "strength": 108,
      "spirit": 152,
      "defense": 220
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-100",
    "number": 100,
    "name": "迷い車",
    "baseA": {
      "hp": 59,
      "strength": 9,
      "spirit": 2,
      "defense": 17
    },
    "baseB": {
      "hp": 321,
      "strength": 151,
      "spirit": 66,
      "defense": 182
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-101",
    "number": 101,
    "name": "だっせんしゃ",
    "baseA": {
      "hp": 76,
      "strength": 22,
      "spirit": 6,
      "defense": 23
    },
    "baseB": {
      "hp": 380,
      "strength": 205,
      "spirit": 81,
      "defense": 224
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-102",
    "number": 102,
    "name": "ムリカベ",
    "baseA": {
      "hp": 66,
      "strength": 8,
      "spirit": 4,
      "defense": 20
    },
    "baseB": {
      "hp": 371,
      "strength": 122,
      "spirit": 58,
      "defense": 209
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-103",
    "number": 103,
    "name": "むりだ城",
    "baseA": {
      "hp": 77,
      "strength": 16,
      "spirit": 7,
      "defense": 28
    },
    "baseB": {
      "hp": 422,
      "strength": 153,
      "spirit": 77,
      "defense": 238
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-104",
    "number": 104,
    "name": "シロカベ",
    "baseA": {
      "hp": 82,
      "strength": 15,
      "spirit": 9,
      "defense": 32
    },
    "baseB": {
      "hp": 429,
      "strength": 166,
      "spirit": 99,
      "defense": 236
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-105",
    "number": 105,
    "name": "グレるりん",
    "baseA": {
      "hp": 57,
      "strength": 19,
      "spirit": 2,
      "defense": 10
    },
    "baseB": {
      "hp": 323,
      "strength": 186,
      "spirit": 62,
      "defense": 159
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-106",
    "number": 106,
    "name": "ゴクドー",
    "baseA": {
      "hp": 73,
      "strength": 28,
      "spirit": 7,
      "defense": 20
    },
    "baseB": {
      "hp": 389,
      "strength": 228,
      "spirit": 83,
      "defense": 190
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-107",
    "number": 107,
    "name": "アニ鬼",
    "baseA": {
      "hp": 77,
      "strength": 33,
      "spirit": 6,
      "defense": 22
    },
    "baseB": {
      "hp": 411,
      "strength": 239,
      "spirit": 75,
      "defense": 205
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-108",
    "number": 108,
    "name": "ヨロイさん",
    "baseA": {
      "hp": 64,
      "strength": 14,
      "spirit": 10,
      "defense": 21
    },
    "baseB": {
      "hp": 386,
      "strength": 130,
      "spirit": 86,
      "defense": 208
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-109",
    "number": 109,
    "name": "モノマネキン",
    "baseA": {
      "hp": 60,
      "strength": 17,
      "spirit": 4,
      "defense": 16
    },
    "baseB": {
      "hp": 328,
      "strength": 186,
      "spirit": 75,
      "defense": 181
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-110",
    "number": 110,
    "name": "トオセンボン",
    "baseA": {
      "hp": 69,
      "strength": 11,
      "spirit": 4,
      "defense": 23
    },
    "baseB": {
      "hp": 382,
      "strength": 122,
      "spirit": 81,
      "defense": 225
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-111",
    "number": 111,
    "name": "くろがねセンボン",
    "baseA": {
      "hp": 75,
      "strength": 16,
      "spirit": 5,
      "defense": 21
    },
    "baseB": {
      "hp": 405,
      "strength": 158,
      "spirit": 71,
      "defense": 216
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-112",
    "number": 112,
    "name": "すもうどん",
    "baseA": {
      "hp": 68,
      "strength": 13,
      "spirit": 4,
      "defense": 20
    },
    "baseB": {
      "hp": 347,
      "strength": 178,
      "spirit": 64,
      "defense": 211
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-113",
    "number": 113,
    "name": "横綱うどん",
    "baseA": {
      "hp": 74,
      "strength": 19,
      "spirit": 6,
      "defense": 26
    },
    "baseB": {
      "hp": 376,
      "strength": 194,
      "spirit": 78,
      "defense": 232
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-114",
    "number": 114,
    "name": "あっそう山",
    "baseA": {
      "hp": 69,
      "strength": 4,
      "spirit": 13,
      "defense": 19
    },
    "baseB": {
      "hp": 346,
      "strength": 57,
      "spirit": 188,
      "defense": 209
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-115",
    "number": 115,
    "name": "あそっ火山",
    "baseA": {
      "hp": 76,
      "strength": 6,
      "spirit": 19,
      "defense": 24
    },
    "baseB": {
      "hp": 370,
      "strength": 64,
      "spirit": 216,
      "defense": 230
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-116",
    "number": 116,
    "name": "モレゾウ",
    "baseA": {
      "hp": 63,
      "strength": 11,
      "spirit": 5,
      "defense": 18
    },
    "baseB": {
      "hp": 358,
      "strength": 136,
      "spirit": 91,
      "defense": 185
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-117",
    "number": 117,
    "name": "プルファント",
    "baseA": {
      "hp": 62,
      "strength": 6,
      "spirit": 18,
      "defense": 21
    },
    "baseB": {
      "hp": 342,
      "strength": 91,
      "spirit": 179,
      "defense": 198
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-118",
    "number": 118,
    "name": "ガマンモス",
    "baseA": {
      "hp": 74,
      "strength": 23,
      "spirit": 10,
      "defense": 30
    },
    "baseB": {
      "hp": 426,
      "strength": 179,
      "spirit": 92,
      "defense": 233
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-119",
    "number": 119,
    "name": "雷蔵",
    "baseA": {
      "hp": 56,
      "strength": 7,
      "spirit": 16,
      "defense": 8
    },
    "baseB": {
      "hp": 312,
      "strength": 100,
      "spirit": 186,
      "defense": 132
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-120",
    "number": 120,
    "name": "ヒライ神",
    "baseA": {
      "hp": 68,
      "strength": 14,
      "spirit": 26,
      "defense": 19
    },
    "baseB": {
      "hp": 360,
      "strength": 136,
      "spirit": 204,
      "defense": 185
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-121",
    "number": 121,
    "name": "あせっか鬼",
    "baseA": {
      "hp": 73,
      "strength": 8,
      "spirit": 16,
      "defense": 21
    },
    "baseB": {
      "hp": 362,
      "strength": 103,
      "spirit": 183,
      "defense": 202
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-122",
    "number": 122,
    "name": "ふじのやま",
    "baseA": {
      "hp": 74,
      "strength": 14,
      "spirit": 9,
      "defense": 20
    },
    "baseB": {
      "hp": 403,
      "strength": 156,
      "spirit": 68,
      "defense": 223
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-123",
    "number": 123,
    "name": "さくらのじま",
    "baseA": {
      "hp": 79,
      "strength": 14,
      "spirit": 10,
      "defense": 24
    },
    "baseB": {
      "hp": 427,
      "strength": 134,
      "spirit": 94,
      "defense": 235
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-124",
    "number": 124,
    "name": "ドウカク",
    "baseA": {
      "hp": 74,
      "strength": 11,
      "spirit": 6,
      "defense": 22
    },
    "baseB": {
      "hp": 385,
      "strength": 143,
      "spirit": 107,
      "defense": 195
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-125",
    "number": 125,
    "name": "ギンカク",
    "baseA": {
      "hp": 77,
      "strength": 14,
      "spirit": 7,
      "defense": 25
    },
    "baseB": {
      "hp": 402,
      "strength": 149,
      "spirit": 109,
      "defense": 210
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-126",
    "number": 126,
    "name": "キンカク",
    "baseA": {
      "hp": 80,
      "strength": 16,
      "spirit": 8,
      "defense": 29
    },
    "baseB": {
      "hp": 417,
      "strength": 157,
      "spirit": 113,
      "defense": 223
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-127",
    "number": 127,
    "name": "プラチナカク",
    "baseA": {
      "hp": 85,
      "strength": 17,
      "spirit": 9,
      "defense": 37
    },
    "baseB": {
      "hp": 435,
      "strength": 186,
      "spirit": 119,
      "defense": 230
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-128",
    "number": 128,
    "name": "武者かぶと",
    "baseA": {
      "hp": 68,
      "strength": 17,
      "spirit": 8,
      "defense": 20
    },
    "baseB": {
      "hp": 387,
      "strength": 160,
      "spirit": 90,
      "defense": 203
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-129",
    "number": 129,
    "name": "かぶと無双",
    "baseA": {
      "hp": 78,
      "strength": 21,
      "spirit": 11,
      "defense": 28
    },
    "baseB": {
      "hp": 430,
      "strength": 170,
      "spirit": 97,
      "defense": 233
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-130",
    "number": 130,
    "name": "オオツノノ神",
    "baseA": {
      "hp": 81,
      "strength": 22,
      "spirit": 12,
      "defense": 31
    },
    "baseB": {
      "hp": 435,
      "strength": 209,
      "spirit": 93,
      "defense": 233
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-131",
    "number": 131,
    "name": "ロボニャン",
    "baseA": {
      "hp": 75,
      "strength": 18,
      "spirit": 6,
      "defense": 26
    },
    "baseB": {
      "hp": 404,
      "strength": 181,
      "spirit": 102,
      "defense": 203
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-132",
    "number": 132,
    "name": "ゴルニャン",
    "baseA": {
      "hp": 80,
      "strength": 20,
      "spirit": 5,
      "defense": 31
    },
    "baseB": {
      "hp": 431,
      "strength": 186,
      "spirit": 91,
      "defense": 222
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-133",
    "number": 133,
    "name": "ロボニャンＦ型",
    "baseA": {
      "hp": 72,
      "strength": 25,
      "spirit": 4,
      "defense": 24
    },
    "baseB": {
      "hp": 388,
      "strength": 215,
      "spirit": 84,
      "defense": 203
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-134",
    "number": 134,
    "name": "だいだらぼっち",
    "baseA": {
      "hp": 81,
      "strength": 14,
      "spirit": 9,
      "defense": 30
    },
    "baseB": {
      "hp": 421,
      "strength": 178,
      "spirit": 98,
      "defense": 228
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-135",
    "number": 135,
    "name": "うみぼうず",
    "baseA": {
      "hp": 84,
      "strength": 7,
      "spirit": 21,
      "defense": 35
    },
    "baseB": {
      "hp": 433,
      "strength": 85,
      "spirit": 207,
      "defense": 240
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-136",
    "number": 136,
    "name": "大ガマ",
    "baseA": {
      "hp": 73,
      "strength": 29,
      "spirit": 9,
      "defense": 28
    },
    "baseB": {
      "hp": 394,
      "strength": 217,
      "spirit": 115,
      "defense": 209
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-137",
    "number": 137,
    "name": "大やもり",
    "baseA": {
      "hp": 70,
      "strength": 15,
      "spirit": 25,
      "defense": 26
    },
    "baseB": {
      "hp": 384,
      "strength": 144,
      "spirit": 196,
      "defense": 206
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-138",
    "number": 138,
    "name": "赤鬼",
    "baseA": {
      "hp": 79,
      "strength": 42,
      "spirit": 6,
      "defense": 19
    },
    "baseB": {
      "hp": 428,
      "strength": 238,
      "spirit": 110,
      "defense": 194
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-139",
    "number": 139,
    "name": "青鬼",
    "baseA": {
      "hp": 74,
      "strength": 18,
      "spirit": 38,
      "defense": 16
    },
    "baseB": {
      "hp": 421,
      "strength": 162,
      "spirit": 238,
      "defense": 149
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-140",
    "number": 140,
    "name": "黒鬼",
    "baseA": {
      "hp": 84,
      "strength": 21,
      "spirit": 4,
      "defense": 37
    },
    "baseB": {
      "hp": 437,
      "strength": 205,
      "spirit": 88,
      "defense": 240
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-141",
    "number": 141,
    "name": "びきゃく",
    "baseA": {
      "hp": 57,
      "strength": 1,
      "spirit": 17,
      "defense": 4
    },
    "baseB": {
      "hp": 339,
      "strength": 68,
      "spirit": 194,
      "defense": 89
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-142",
    "number": 142,
    "name": "しゃれこ婦人",
    "baseA": {
      "hp": 54,
      "strength": 6,
      "spirit": 17,
      "defense": 11
    },
    "baseB": {
      "hp": 311,
      "strength": 89,
      "spirit": 176,
      "defense": 144
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-143",
    "number": 143,
    "name": "カラカラさん",
    "baseA": {
      "hp": 63,
      "strength": 7,
      "spirit": 23,
      "defense": 15
    },
    "baseB": {
      "hp": 359,
      "strength": 94,
      "spirit": 207,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-144",
    "number": 144,
    "name": "ほね美人",
    "baseA": {
      "hp": 66,
      "strength": 6,
      "spirit": 27,
      "defense": 19
    },
    "baseB": {
      "hp": 375,
      "strength": 74,
      "spirit": 210,
      "defense": 191
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-145",
    "number": 145,
    "name": "セミまる",
    "baseA": {
      "hp": 50,
      "strength": 16,
      "spirit": 5,
      "defense": 4
    },
    "baseB": {
      "hp": 324,
      "strength": 191,
      "spirit": 88,
      "defense": 82
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-146",
    "number": 146,
    "name": "カゲまる",
    "baseA": {
      "hp": 59,
      "strength": 22,
      "spirit": 8,
      "defense": 6
    },
    "baseB": {
      "hp": 351,
      "strength": 204,
      "spirit": 99,
      "defense": 111
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-147",
    "number": 147,
    "name": "ヒグラシまる",
    "baseA": {
      "hp": 62,
      "strength": 25,
      "spirit": 6,
      "defense": 12
    },
    "baseB": {
      "hp": 370,
      "strength": 215,
      "spirit": 84,
      "defense": 141
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-148",
    "number": 148,
    "name": "さむガリ",
    "baseA": {
      "hp": 52,
      "strength": 4,
      "spirit": 14,
      "defense": 8
    },
    "baseB": {
      "hp": 326,
      "strength": 71,
      "spirit": 195,
      "defense": 88
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-149",
    "number": 149,
    "name": "ガリ王子",
    "baseA": {
      "hp": 63,
      "strength": 10,
      "spirit": 27,
      "defense": 18
    },
    "baseB": {
      "hp": 376,
      "strength": 92,
      "spirit": 224,
      "defense": 153
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-150",
    "number": 150,
    "name": "あつガルル",
    "baseA": {
      "hp": 66,
      "strength": 11,
      "spirit": 29,
      "defense": 22
    },
    "baseB": {
      "hp": 380,
      "strength": 103,
      "spirit": 211,
      "defense": 186
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-151",
    "number": 151,
    "name": "つらがわり",
    "baseA": {
      "hp": 58,
      "strength": 5,
      "spirit": 14,
      "defense": 10
    },
    "baseB": {
      "hp": 341,
      "strength": 77,
      "spirit": 172,
      "defense": 140
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-152",
    "number": 152,
    "name": "一つ目小僧",
    "baseA": {
      "hp": 60,
      "strength": 17,
      "spirit": 2,
      "defense": 9
    },
    "baseB": {
      "hp": 337,
      "strength": 188,
      "spirit": 68,
      "defense": 137
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-153",
    "number": 153,
    "name": "ジバニャン",
    "baseA": {
      "hp": 61,
      "strength": 19,
      "spirit": 1,
      "defense": 8
    },
    "baseB": {
      "hp": 352,
      "strength": 213,
      "spirit": 51,
      "defense": 114
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-154",
    "number": 154,
    "name": "ジバニャンＳ",
    "baseA": {
      "hp": 70,
      "strength": 30,
      "spirit": 12,
      "defense": 15
    },
    "baseB": {
      "hp": 414,
      "strength": 225,
      "spirit": 122,
      "defense": 129
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-155",
    "number": 155,
    "name": "ミカンニャン",
    "baseA": {
      "hp": 61,
      "strength": 12,
      "spirit": 26,
      "defense": 8
    },
    "baseB": {
      "hp": 372,
      "strength": 128,
      "spirit": 199,
      "defense": 111
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-156",
    "number": 156,
    "name": "キウイニャン",
    "baseA": {
      "hp": 65,
      "strength": 12,
      "spirit": 3,
      "defense": 27
    },
    "baseB": {
      "hp": 354,
      "strength": 184,
      "spirit": 68,
      "defense": 204
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-157",
    "number": 157,
    "name": "ブドウニャン",
    "baseA": {
      "hp": 60,
      "strength": 8,
      "spirit": 23,
      "defense": 16
    },
    "baseB": {
      "hp": 360,
      "strength": 72,
      "spirit": 208,
      "defense": 170
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-158",
    "number": 158,
    "name": "イチゴニャン",
    "baseA": {
      "hp": 62,
      "strength": 12,
      "spirit": 25,
      "defense": 8
    },
    "baseB": {
      "hp": 348,
      "strength": 150,
      "spirit": 200,
      "defense": 112
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-159",
    "number": 159,
    "name": "スイカニャン",
    "baseA": {
      "hp": 68,
      "strength": 18,
      "spirit": 4,
      "defense": 27
    },
    "baseB": {
      "hp": 385,
      "strength": 171,
      "spirit": 78,
      "defense": 216
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-160",
    "number": 160,
    "name": "メロンニャン",
    "baseA": {
      "hp": 64,
      "strength": 13,
      "spirit": 26,
      "defense": 14
    },
    "baseB": {
      "hp": 354,
      "strength": 122,
      "spirit": 203,
      "defense": 171
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-161",
    "number": 161,
    "name": "サファイニャン",
    "baseA": {
      "hp": 66,
      "strength": 7,
      "spirit": 28,
      "defense": 16
    },
    "baseB": {
      "hp": 387,
      "strength": 89,
      "spirit": 212,
      "defense": 162
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-162",
    "number": 162,
    "name": "エメラルニャン",
    "baseA": {
      "hp": 62,
      "strength": 10,
      "spirit": 27,
      "defense": 18
    },
    "baseB": {
      "hp": 353,
      "strength": 117,
      "spirit": 209,
      "defense": 171
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-163",
    "number": 163,
    "name": "ルビーニャン",
    "baseA": {
      "hp": 67,
      "strength": 29,
      "spirit": 7,
      "defense": 14
    },
    "baseB": {
      "hp": 397,
      "strength": 211,
      "spirit": 101,
      "defense": 141
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-164",
    "number": 164,
    "name": "トパニャン",
    "baseA": {
      "hp": 68,
      "strength": 14,
      "spirit": 5,
      "defense": 30
    },
    "baseB": {
      "hp": 403,
      "strength": 148,
      "spirit": 70,
      "defense": 209
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-165",
    "number": 165,
    "name": "ダイヤニャン",
    "baseA": {
      "hp": 63,
      "strength": 20,
      "spirit": 18,
      "defense": 16
    },
    "baseB": {
      "hp": 379,
      "strength": 210,
      "spirit": 100,
      "defense": 161
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-166",
    "number": 166,
    "name": "トゲニャン",
    "baseA": {
      "hp": 61,
      "strength": 25,
      "spirit": 8,
      "defense": 13
    },
    "baseB": {
      "hp": 389,
      "strength": 200,
      "spirit": 93,
      "defense": 128
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-167",
    "number": 167,
    "name": "ワルニャン",
    "baseA": {
      "hp": 60,
      "strength": 28,
      "spirit": 3,
      "defense": 16
    },
    "baseB": {
      "hp": 380,
      "strength": 216,
      "spirit": 62,
      "defense": 152
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-168",
    "number": 168,
    "name": "ブチニャン",
    "baseA": {
      "hp": 61,
      "strength": 28,
      "spirit": 15,
      "defense": 13
    },
    "baseB": {
      "hp": 378,
      "strength": 224,
      "spirit": 129,
      "defense": 119
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-169",
    "number": 169,
    "name": "セーラーニャン",
    "baseA": {
      "hp": 63,
      "strength": 11,
      "spirit": 27,
      "defense": 16
    },
    "baseB": {
      "hp": 377,
      "strength": 101,
      "spirit": 213,
      "defense": 159
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-170",
    "number": 170,
    "name": "ワンダーニャン",
    "baseA": {
      "hp": 61,
      "strength": 27,
      "spirit": 8,
      "defense": 11
    },
    "baseB": {
      "hp": 367,
      "strength": 194,
      "spirit": 124,
      "defense": 125
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-171",
    "number": 171,
    "name": "ジェットニャン",
    "baseA": {
      "hp": 64,
      "strength": 4,
      "spirit": 26,
      "defense": 13
    },
    "baseB": {
      "hp": 356,
      "strength": 88,
      "spirit": 200,
      "defense": 166
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-172",
    "number": 172,
    "name": "アカマル",
    "baseA": {
      "hp": 62,
      "strength": 28,
      "spirit": 2,
      "defense": 7
    },
    "baseB": {
      "hp": 380,
      "strength": 230,
      "spirit": 62,
      "defense": 98
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-173",
    "number": 173,
    "name": "江戸っ子パンダ",
    "baseA": {
      "hp": 56,
      "strength": 18,
      "spirit": 2,
      "defense": 9
    },
    "baseB": {
      "hp": 342,
      "strength": 184,
      "spirit": 78,
      "defense": 116
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-174",
    "number": 174,
    "name": "大江戸忍者パンダ",
    "baseA": {
      "hp": 64,
      "strength": 24,
      "spirit": 4,
      "defense": 13
    },
    "baseB": {
      "hp": 381,
      "strength": 202,
      "spirit": 83,
      "defense": 134
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-175",
    "number": 175,
    "name": "ノガッパ",
    "baseA": {
      "hp": 56,
      "strength": 6,
      "spirit": 23,
      "defense": 11
    },
    "baseB": {
      "hp": 345,
      "strength": 100,
      "spirit": 192,
      "defense": 123
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-176",
    "number": 176,
    "name": "たびガッパ",
    "baseA": {
      "hp": 70,
      "strength": 16,
      "spirit": 28,
      "defense": 12
    },
    "baseB": {
      "hp": 371,
      "strength": 176,
      "spirit": 207,
      "defense": 131
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-177",
    "number": 177,
    "name": "なみガッパ",
    "baseA": {
      "hp": 73,
      "strength": 10,
      "spirit": 32,
      "defense": 14
    },
    "baseB": {
      "hp": 401,
      "strength": 138,
      "spirit": 222,
      "defense": 129
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-178",
    "number": 178,
    "name": "ロボガッパ",
    "baseA": {
      "hp": 69,
      "strength": 8,
      "spirit": 26,
      "defense": 22
    },
    "baseB": {
      "hp": 339,
      "strength": 158,
      "spirit": 202,
      "defense": 191
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-179",
    "number": 179,
    "name": "コマさん",
    "baseA": {
      "hp": 62,
      "strength": 7,
      "spirit": 20,
      "defense": 10
    },
    "baseB": {
      "hp": 348,
      "strength": 100,
      "spirit": 205,
      "defense": 117
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-180",
    "number": 180,
    "name": "ししコマ",
    "baseA": {
      "hp": 70,
      "strength": 10,
      "spirit": 33,
      "defense": 16
    },
    "baseB": {
      "hp": 394,
      "strength": 129,
      "spirit": 221,
      "defense": 146
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-181",
    "number": 181,
    "name": "コマさんＳ",
    "baseA": {
      "hp": 69,
      "strength": 13,
      "spirit": 33,
      "defense": 22
    },
    "baseB": {
      "hp": 417,
      "strength": 118,
      "spirit": 228,
      "defense": 167
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-182",
    "number": 182,
    "name": "コマじろう",
    "baseA": {
      "hp": 60,
      "strength": 5,
      "spirit": 19,
      "defense": 15
    },
    "baseB": {
      "hp": 336,
      "strength": 82,
      "spirit": 199,
      "defense": 153
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-183",
    "number": 183,
    "name": "とらじろう",
    "baseA": {
      "hp": 71,
      "strength": 9,
      "spirit": 30,
      "defense": 19
    },
    "baseB": {
      "hp": 399,
      "strength": 101,
      "spirit": 211,
      "defense": 179
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-184",
    "number": 184,
    "name": "コマじろうＳ",
    "baseA": {
      "hp": 72,
      "strength": 8,
      "spirit": 31,
      "defense": 26
    },
    "baseB": {
      "hp": 421,
      "strength": 96,
      "spirit": 207,
      "defense": 206
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-185",
    "number": 185,
    "name": "ロボコマ",
    "baseA": {
      "hp": 67,
      "strength": 7,
      "spirit": 31,
      "defense": 20
    },
    "baseB": {
      "hp": 354,
      "strength": 145,
      "spirit": 221,
      "defense": 170
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-186",
    "number": 186,
    "name": "ジバコマ",
    "baseA": {
      "hp": 65,
      "strength": 27,
      "spirit": 25,
      "defense": 10
    },
    "baseB": {
      "hp": 381,
      "strength": 218,
      "spirit": 198,
      "defense": 93
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-187",
    "number": 187,
    "name": "バク",
    "baseA": {
      "hp": 58,
      "strength": 4,
      "spirit": 20,
      "defense": 13
    },
    "baseB": {
      "hp": 332,
      "strength": 95,
      "spirit": 199,
      "defense": 134
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-188",
    "number": 188,
    "name": "おバク様",
    "baseA": {
      "hp": 65,
      "strength": 6,
      "spirit": 27,
      "defense": 17
    },
    "baseB": {
      "hp": 358,
      "strength": 121,
      "spirit": 216,
      "defense": 155
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-189",
    "number": 189,
    "name": "ハク",
    "baseA": {
      "hp": 62,
      "strength": 7,
      "spirit": 24,
      "defense": 12
    },
    "baseB": {
      "hp": 342,
      "strength": 130,
      "spirit": 204,
      "defense": 129
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-190",
    "number": 190,
    "name": "雨女",
    "baseA": {
      "hp": 61,
      "strength": 4,
      "spirit": 27,
      "defense": 15
    },
    "baseB": {
      "hp": 357,
      "strength": 77,
      "spirit": 202,
      "defense": 164
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-191",
    "number": 191,
    "name": "ばくそく",
    "baseA": {
      "hp": 66,
      "strength": 21,
      "spirit": 4,
      "defense": 6
    },
    "baseB": {
      "hp": 388,
      "strength": 196,
      "spirit": 78,
      "defense": 108
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-192",
    "number": 192,
    "name": "キュン太郎",
    "baseA": {
      "hp": 60,
      "strength": 5,
      "spirit": 20,
      "defense": 10
    },
    "baseB": {
      "hp": 362,
      "strength": 66,
      "spirit": 196,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-193",
    "number": 193,
    "name": "ズキュキュン太",
    "baseA": {
      "hp": 68,
      "strength": 8,
      "spirit": 26,
      "defense": 13
    },
    "baseB": {
      "hp": 384,
      "strength": 110,
      "spirit": 215,
      "defense": 141
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-194",
    "number": 194,
    "name": "裏キュン太",
    "baseA": {
      "hp": 70,
      "strength": 16,
      "spirit": 29,
      "defense": 10
    },
    "baseB": {
      "hp": 381,
      "strength": 178,
      "spirit": 208,
      "defense": 123
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-195",
    "number": 195,
    "name": "ケマモン",
    "baseA": {
      "hp": 67,
      "strength": 10,
      "spirit": 25,
      "defense": 15
    },
    "baseB": {
      "hp": 372,
      "strength": 104,
      "spirit": 206,
      "defense": 168
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-196",
    "number": 196,
    "name": "ゆきおんな",
    "baseA": {
      "hp": 63,
      "strength": 11,
      "spirit": 27,
      "defense": 14
    },
    "baseB": {
      "hp": 367,
      "strength": 115,
      "spirit": 216,
      "defense": 142
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-197",
    "number": 197,
    "name": "ふぶき姫",
    "baseA": {
      "hp": 70,
      "strength": 13,
      "spirit": 34,
      "defense": 18
    },
    "baseB": {
      "hp": 401,
      "strength": 132,
      "spirit": 230,
      "defense": 157
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-197",
    "number": 197,
    "name": "ふぶきちゃん",
    "baseA": {
      "hp": 67,
      "strength": 16,
      "spirit": 38,
      "defense": 15
    },
    "baseB": {
      "hp": 395,
      "strength": 157,
      "spirit": 243,
      "defense": 135
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-198",
    "number": 198,
    "name": "百鬼姫",
    "baseA": {
      "hp": 72,
      "strength": 9,
      "spirit": 32,
      "defense": 23
    },
    "baseB": {
      "hp": 408,
      "strength": 114,
      "spirit": 220,
      "defense": 188
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-199",
    "number": 199,
    "name": "河童",
    "baseA": {
      "hp": 68,
      "strength": 18,
      "spirit": 28,
      "defense": 10
    },
    "baseB": {
      "hp": 363,
      "strength": 168,
      "spirit": 213,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-200",
    "number": 200,
    "name": "水虎",
    "baseA": {
      "hp": 70,
      "strength": 20,
      "spirit": 33,
      "defense": 13
    },
    "baseB": {
      "hp": 401,
      "strength": 189,
      "spirit": 219,
      "defense": 121
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-201",
    "number": 201,
    "name": "マスターニャーダ",
    "baseA": {
      "hp": 69,
      "strength": 8,
      "spirit": 33,
      "defense": 18
    },
    "baseB": {
      "hp": 408,
      "strength": 78,
      "spirit": 241,
      "defense": 163
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-202",
    "number": 202,
    "name": "うらやましろう",
    "baseA": {
      "hp": 55,
      "strength": 17,
      "spirit": 8,
      "defense": 7
    },
    "baseB": {
      "hp": 340,
      "strength": 176,
      "spirit": 116,
      "defense": 98
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-203",
    "number": 203,
    "name": "つまみぐいのすけ",
    "baseA": {
      "hp": 58,
      "strength": 9,
      "spirit": 19,
      "defense": 11
    },
    "baseB": {
      "hp": 358,
      "strength": 116,
      "spirit": 177,
      "defense": 119
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-204",
    "number": 204,
    "name": "ワカメくん",
    "baseA": {
      "hp": 54,
      "strength": 9,
      "spirit": 17,
      "defense": 7
    },
    "baseB": {
      "hp": 337,
      "strength": 111,
      "spirit": 185,
      "defense": 97
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-205",
    "number": 205,
    "name": "ワカメ☆スター",
    "baseA": {
      "hp": 60,
      "strength": 12,
      "spirit": 25,
      "defense": 10
    },
    "baseB": {
      "hp": 378,
      "strength": 119,
      "spirit": 207,
      "defense": 106
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-206",
    "number": 206,
    "name": "コンブさん",
    "baseA": {
      "hp": 53,
      "strength": 7,
      "spirit": 16,
      "defense": 11
    },
    "baseB": {
      "hp": 326,
      "strength": 93,
      "spirit": 183,
      "defense": 128
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-207",
    "number": 207,
    "name": "メカブちゃん",
    "baseA": {
      "hp": 58,
      "strength": 8,
      "spirit": 22,
      "defense": 9
    },
    "baseB": {
      "hp": 346,
      "strength": 100,
      "spirit": 203,
      "defense": 121
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-208",
    "number": 208,
    "name": "ひも爺",
    "baseA": {
      "hp": 52,
      "strength": 4,
      "spirit": 19,
      "defense": 11
    },
    "baseB": {
      "hp": 356,
      "strength": 74,
      "spirit": 183,
      "defense": 107
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-209",
    "number": 209,
    "name": "くいい爺",
    "baseA": {
      "hp": 64,
      "strength": 8,
      "spirit": 32,
      "defense": 22
    },
    "baseB": {
      "hp": 426,
      "strength": 80,
      "spirit": 234,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-210",
    "number": 210,
    "name": "こめ爺",
    "baseA": {
      "hp": 58,
      "strength": 13,
      "spirit": 29,
      "defense": 18
    },
    "baseB": {
      "hp": 366,
      "strength": 155,
      "spirit": 213,
      "defense": 116
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-211",
    "number": 211,
    "name": "ロボＧ",
    "baseA": {
      "hp": 60,
      "strength": 7,
      "spirit": 28,
      "defense": 20
    },
    "baseB": {
      "hp": 340,
      "strength": 120,
      "spirit": 201,
      "defense": 189
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-212",
    "number": 212,
    "name": "キズナメコ",
    "baseA": {
      "hp": 51,
      "strength": 1,
      "spirit": 18,
      "defense": 7
    },
    "baseB": {
      "hp": 321,
      "strength": 56,
      "spirit": 203,
      "defense": 100
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-213",
    "number": 213,
    "name": "キズナース",
    "baseA": {
      "hp": 65,
      "strength": 7,
      "spirit": 30,
      "defense": 15
    },
    "baseB": {
      "hp": 400,
      "strength": 100,
      "spirit": 220,
      "defense": 130
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-214",
    "number": 214,
    "name": "砂夫",
    "baseA": {
      "hp": 57,
      "strength": 5,
      "spirit": 19,
      "defense": 8
    },
    "baseB": {
      "hp": 338,
      "strength": 95,
      "spirit": 194,
      "defense": 103
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-215",
    "number": 215,
    "name": "大山砂夫",
    "baseA": {
      "hp": 66,
      "strength": 8,
      "spirit": 28,
      "defense": 17
    },
    "baseB": {
      "hp": 363,
      "strength": 138,
      "spirit": 210,
      "defense": 139
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-216",
    "number": 216,
    "name": "から傘お化け",
    "baseA": {
      "hp": 55,
      "strength": 2,
      "spirit": 5,
      "defense": 16
    },
    "baseB": {
      "hp": 340,
      "strength": 55,
      "spirit": 111,
      "defense": 184
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-217",
    "number": 217,
    "name": "から傘魔人",
    "baseA": {
      "hp": 76,
      "strength": 21,
      "spirit": 8,
      "defense": 33
    },
    "baseB": {
      "hp": 404,
      "strength": 186,
      "spirit": 109,
      "defense": 231
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-218",
    "number": 218,
    "name": "ウキウキビ",
    "baseA": {
      "hp": 53,
      "strength": 2,
      "spirit": 18,
      "defense": 12
    },
    "baseB": {
      "hp": 336,
      "strength": 55,
      "spirit": 181,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-219",
    "number": 219,
    "name": "トキメキビ",
    "baseA": {
      "hp": 62,
      "strength": 6,
      "spirit": 29,
      "defense": 18
    },
    "baseB": {
      "hp": 373,
      "strength": 91,
      "spirit": 204,
      "defense": 172
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-220",
    "number": 220,
    "name": "びんボーイ",
    "baseA": {
      "hp": 57,
      "strength": 17,
      "spirit": 10,
      "defense": 13
    },
    "baseB": {
      "hp": 356,
      "strength": 172,
      "spirit": 116,
      "defense": 121
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-221",
    "number": 221,
    "name": "お金ナイダー",
    "baseA": {
      "hp": 68,
      "strength": 29,
      "spirit": 12,
      "defense": 18
    },
    "baseB": {
      "hp": 385,
      "strength": 214,
      "spirit": 132,
      "defense": 159
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-222",
    "number": 222,
    "name": "らくてん童",
    "baseA": {
      "hp": 60,
      "strength": 8,
      "spirit": 24,
      "defense": 15
    },
    "baseB": {
      "hp": 372,
      "strength": 106,
      "spirit": 194,
      "defense": 138
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-223",
    "number": 223,
    "name": "ざしきわらし",
    "baseA": {
      "hp": 51,
      "strength": 7,
      "spirit": 18,
      "defense": 11
    },
    "baseB": {
      "hp": 341,
      "strength": 59,
      "spirit": 177,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-224",
    "number": 224,
    "name": "ざしきわら神",
    "baseA": {
      "hp": 65,
      "strength": 9,
      "spirit": 28,
      "defense": 15
    },
    "baseB": {
      "hp": 372,
      "strength": 88,
      "spirit": 213,
      "defense": 172
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-225",
    "number": 225,
    "name": "ぜっこう蝶",
    "baseA": {
      "hp": 59,
      "strength": 5,
      "spirit": 20,
      "defense": 10
    },
    "baseB": {
      "hp": 335,
      "strength": 108,
      "spirit": 188,
      "defense": 129
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-226",
    "number": 226,
    "name": "ゼッコウ蝶",
    "baseA": {
      "hp": 62,
      "strength": 16,
      "spirit": 4,
      "defense": 12
    },
    "baseB": {
      "hp": 352,
      "strength": 185,
      "spirit": 78,
      "defense": 145
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-227",
    "number": 227,
    "name": "サイコウ蝶",
    "baseA": {
      "hp": 67,
      "strength": 12,
      "spirit": 29,
      "defense": 16
    },
    "baseB": {
      "hp": 405,
      "strength": 122,
      "spirit": 215,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-228",
    "number": 228,
    "name": "アゲアゲハ",
    "baseA": {
      "hp": 65,
      "strength": 13,
      "spirit": 34,
      "defense": 22
    },
    "baseB": {
      "hp": 393,
      "strength": 127,
      "spirit": 227,
      "defense": 173
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-229",
    "number": 229,
    "name": "くだん",
    "baseA": {
      "hp": 56,
      "strength": 13,
      "spirit": 18,
      "defense": 9
    },
    "baseB": {
      "hp": 345,
      "strength": 141,
      "spirit": 176,
      "defense": 98
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-230",
    "number": 230,
    "name": "大くだん",
    "baseA": {
      "hp": 63,
      "strength": 22,
      "spirit": 31,
      "defense": 20
    },
    "baseB": {
      "hp": 391,
      "strength": 182,
      "spirit": 209,
      "defense": 148
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-231",
    "number": 231,
    "name": "晴れ男",
    "baseA": {
      "hp": 62,
      "strength": 25,
      "spirit": 8,
      "defense": 12
    },
    "baseB": {
      "hp": 383,
      "strength": 204,
      "spirit": 93,
      "defense": 130
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-232",
    "number": 232,
    "name": "ホノボーノ",
    "baseA": {
      "hp": 59,
      "strength": 11,
      "spirit": 22,
      "defense": 14
    },
    "baseB": {
      "hp": 356,
      "strength": 119,
      "spirit": 199,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-233",
    "number": 233,
    "name": "ヒョウヘンヌ",
    "baseA": {
      "hp": 70,
      "strength": 15,
      "spirit": 31,
      "defense": 20
    },
    "baseB": {
      "hp": 400,
      "strength": 135,
      "spirit": 234,
      "defense": 161
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-234",
    "number": 234,
    "name": "ヒョウヘンナ",
    "baseA": {
      "hp": 75,
      "strength": 33,
      "spirit": 12,
      "defense": 19
    },
    "baseB": {
      "hp": 428,
      "strength": 236,
      "spirit": 106,
      "defense": 160
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-235",
    "number": 235,
    "name": "サンタク老師",
    "baseA": {
      "hp": 65,
      "strength": 10,
      "spirit": 24,
      "defense": 16
    },
    "baseB": {
      "hp": 384,
      "strength": 93,
      "spirit": 219,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-236",
    "number": 236,
    "name": "ふくろじじい",
    "baseA": {
      "hp": 62,
      "strength": 11,
      "spirit": 23,
      "defense": 19
    },
    "baseB": {
      "hp": 356,
      "strength": 107,
      "spirit": 208,
      "defense": 179
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-237",
    "number": 237,
    "name": "さいの目入道",
    "baseA": {
      "hp": 68,
      "strength": 11,
      "spirit": 27,
      "defense": 20
    },
    "baseB": {
      "hp": 379,
      "strength": 103,
      "spirit": 206,
      "defense": 202
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-238",
    "number": 238,
    "name": "ゾロ目大明神",
    "baseA": {
      "hp": 71,
      "strength": 8,
      "spirit": 28,
      "defense": 29
    },
    "baseB": {
      "hp": 406,
      "strength": 91,
      "spirit": 213,
      "defense": 220
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-239",
    "number": 239,
    "name": "雷オトン",
    "baseA": {
      "hp": 67,
      "strength": 10,
      "spirit": 22,
      "defense": 27
    },
    "baseB": {
      "hp": 387,
      "strength": 113,
      "spirit": 174,
      "defense": 211
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-240",
    "number": 240,
    "name": "絶オジイ",
    "baseA": {
      "hp": 73,
      "strength": 21,
      "spirit": 10,
      "defense": 32
    },
    "baseB": {
      "hp": 399,
      "strength": 176,
      "spirit": 124,
      "defense": 221
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-241",
    "number": 241,
    "name": "聖オカン",
    "baseA": {
      "hp": 66,
      "strength": 11,
      "spirit": 28,
      "defense": 21
    },
    "baseB": {
      "hp": 383,
      "strength": 122,
      "spirit": 208,
      "defense": 172
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-242",
    "number": 242,
    "name": "心オバア",
    "baseA": {
      "hp": 68,
      "strength": 12,
      "spirit": 33,
      "defense": 23
    },
    "baseB": {
      "hp": 393,
      "strength": 126,
      "spirit": 223,
      "defense": 188
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-243",
    "number": 243,
    "name": "麒麟",
    "baseA": {
      "hp": 63,
      "strength": 20,
      "spirit": 28,
      "defense": 22
    },
    "baseB": {
      "hp": 371,
      "strength": 153,
      "spirit": 213,
      "defense": 178
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-244",
    "number": 244,
    "name": "イッカク",
    "baseA": {
      "hp": 66,
      "strength": 24,
      "spirit": 27,
      "defense": 19
    },
    "baseB": {
      "hp": 382,
      "strength": 186,
      "spirit": 212,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-245",
    "number": 245,
    "name": "みちび鬼",
    "baseA": {
      "hp": 51,
      "strength": 15,
      "spirit": 2,
      "defense": 11
    },
    "baseB": {
      "hp": 321,
      "strength": 188,
      "spirit": 55,
      "defense": 126
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-246",
    "number": 246,
    "name": "えこひい鬼",
    "baseA": {
      "hp": 54,
      "strength": 3,
      "spirit": 18,
      "defense": 14
    },
    "baseB": {
      "hp": 341,
      "strength": 50,
      "spirit": 193,
      "defense": 146
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-247",
    "number": 247,
    "name": "かたのり小僧",
    "baseA": {
      "hp": 50,
      "strength": 19,
      "spirit": 6,
      "defense": 11
    },
    "baseB": {
      "hp": 326,
      "strength": 194,
      "spirit": 85,
      "defense": 125
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-248",
    "number": 248,
    "name": "かたのり親方",
    "baseA": {
      "hp": 60,
      "strength": 31,
      "spirit": 9,
      "defense": 16
    },
    "baseB": {
      "hp": 375,
      "strength": 235,
      "spirit": 90,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-249",
    "number": 249,
    "name": "ぎっくり男",
    "baseA": {
      "hp": 66,
      "strength": 29,
      "spirit": 10,
      "defense": 21
    },
    "baseB": {
      "hp": 383,
      "strength": 227,
      "spirit": 91,
      "defense": 189
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-250",
    "number": 250,
    "name": "ＴＥＴＳＵＹＡ",
    "baseA": {
      "hp": 52,
      "strength": 4,
      "spirit": 20,
      "defense": 10
    },
    "baseB": {
      "hp": 329,
      "strength": 63,
      "spirit": 192,
      "defense": 146
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-251",
    "number": 251,
    "name": "ＫＡＮＴＥＴＳＵ",
    "baseA": {
      "hp": 74,
      "strength": 6,
      "spirit": 24,
      "defense": 12
    },
    "baseB": {
      "hp": 410,
      "strength": 68,
      "spirit": 215,
      "defense": 152
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-252",
    "number": 252,
    "name": "草くいおとこ",
    "baseA": {
      "hp": 56,
      "strength": 11,
      "spirit": 10,
      "defense": 9
    },
    "baseB": {
      "hp": 318,
      "strength": 151,
      "spirit": 150,
      "defense": 106
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-253",
    "number": 253,
    "name": "肉くいおとこ",
    "baseA": {
      "hp": 64,
      "strength": 19,
      "spirit": 17,
      "defense": 16
    },
    "baseB": {
      "hp": 350,
      "strength": 198,
      "spirit": 155,
      "defense": 147
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-254",
    "number": 254,
    "name": "ネガティブーン",
    "baseA": {
      "hp": 55,
      "strength": 5,
      "spirit": 17,
      "defense": 10
    },
    "baseB": {
      "hp": 328,
      "strength": 106,
      "spirit": 173,
      "defense": 118
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-255",
    "number": 255,
    "name": "ジャネガブーン",
    "baseA": {
      "hp": 62,
      "strength": 6,
      "spirit": 26,
      "defense": 13
    },
    "baseB": {
      "hp": 364,
      "strength": 111,
      "spirit": 208,
      "defense": 127
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-256",
    "number": 256,
    "name": "かゆかゆ",
    "baseA": {
      "hp": 68,
      "strength": 8,
      "spirit": 31,
      "defense": 20
    },
    "baseB": {
      "hp": 396,
      "strength": 107,
      "spirit": 222,
      "defense": 162
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-257",
    "number": 257,
    "name": "ジミー",
    "baseA": {
      "hp": 50,
      "strength": 17,
      "spirit": 6,
      "defense": 5
    },
    "baseB": {
      "hp": 345,
      "strength": 199,
      "spirit": 73,
      "defense": 63
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-258",
    "number": 258,
    "name": "カゲロー",
    "baseA": {
      "hp": 61,
      "strength": 27,
      "spirit": 11,
      "defense": 9
    },
    "baseB": {
      "hp": 386,
      "strength": 212,
      "spirit": 116,
      "defense": 96
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-259",
    "number": 259,
    "name": "カイム",
    "baseA": {
      "hp": 65,
      "strength": 26,
      "spirit": 14,
      "defense": 13
    },
    "baseB": {
      "hp": 391,
      "strength": 207,
      "spirit": 131,
      "defense": 121
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-260",
    "number": 260,
    "name": "ぎしんあん鬼",
    "baseA": {
      "hp": 57,
      "strength": 8,
      "spirit": 21,
      "defense": 11
    },
    "baseB": {
      "hp": 335,
      "strength": 112,
      "spirit": 199,
      "defense": 124
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-261",
    "number": 261,
    "name": "ガ鬼",
    "baseA": {
      "hp": 56,
      "strength": 20,
      "spirit": 6,
      "defense": 15
    },
    "baseB": {
      "hp": 331,
      "strength": 191,
      "spirit": 84,
      "defense": 164
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-262",
    "number": 262,
    "name": "あまのじゃく",
    "baseA": {
      "hp": 64,
      "strength": 16,
      "spirit": 9,
      "defense": 28
    },
    "baseB": {
      "hp": 372,
      "strength": 179,
      "spirit": 81,
      "defense": 208
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-263",
    "number": 263,
    "name": "ジンギスギスカン",
    "baseA": {
      "hp": 53,
      "strength": 18,
      "spirit": 3,
      "defense": 11
    },
    "baseB": {
      "hp": 341,
      "strength": 186,
      "spirit": 72,
      "defense": 121
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-264",
    "number": 264,
    "name": "チンギスギスハン",
    "baseA": {
      "hp": 59,
      "strength": 27,
      "spirit": 4,
      "defense": 15
    },
    "baseB": {
      "hp": 377,
      "strength": 210,
      "spirit": 78,
      "defense": 135
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-265",
    "number": 265,
    "name": "ヒキコウモリ",
    "baseA": {
      "hp": 54,
      "strength": 13,
      "spirit": 15,
      "defense": 17
    },
    "baseB": {
      "hp": 339,
      "strength": 140,
      "spirit": 145,
      "defense": 146
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-266",
    "number": 266,
    "name": "トジコウモリ",
    "baseA": {
      "hp": 67,
      "strength": 18,
      "spirit": 20,
      "defense": 24
    },
    "baseB": {
      "hp": 381,
      "strength": 156,
      "spirit": 169,
      "defense": 184
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-267",
    "number": 267,
    "name": "ヤドコウモリ",
    "baseA": {
      "hp": 70,
      "strength": 19,
      "spirit": 10,
      "defense": 30
    },
    "baseB": {
      "hp": 404,
      "strength": 178,
      "spirit": 92,
      "defense": 216
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-268",
    "number": 268,
    "name": "かりパックン",
    "baseA": {
      "hp": 49,
      "strength": 17,
      "spirit": 6,
      "defense": 15
    },
    "baseB": {
      "hp": 327,
      "strength": 176,
      "spirit": 66,
      "defense": 161
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-269",
    "number": 269,
    "name": "泥ボックン",
    "baseA": {
      "hp": 61,
      "strength": 26,
      "spirit": 8,
      "defense": 22
    },
    "baseB": {
      "hp": 372,
      "strength": 215,
      "spirit": 76,
      "defense": 182
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-270",
    "number": 270,
    "name": "まてんし",
    "baseA": {
      "hp": 62,
      "strength": 26,
      "spirit": 17,
      "defense": 12
    },
    "baseB": {
      "hp": 326,
      "strength": 244,
      "spirit": 175,
      "defense": 156
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-271",
    "number": 271,
    "name": "ひとまか仙人",
    "baseA": {
      "hp": 60,
      "strength": 11,
      "spirit": 17,
      "defense": 15
    },
    "baseB": {
      "hp": 341,
      "strength": 111,
      "spirit": 185,
      "defense": 163
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-272",
    "number": 272,
    "name": "りもこんかくし",
    "baseA": {
      "hp": 57,
      "strength": 22,
      "spirit": 3,
      "defense": 15
    },
    "baseB": {
      "hp": 339,
      "strength": 197,
      "spirit": 63,
      "defense": 171
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-273",
    "number": 273,
    "name": "ジコチュウ",
    "baseA": {
      "hp": 56,
      "strength": 20,
      "spirit": 8,
      "defense": 13
    },
    "baseB": {
      "hp": 341,
      "strength": 188,
      "spirit": 82,
      "defense": 159
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-274",
    "number": 274,
    "name": "ネクラマテング",
    "baseA": {
      "hp": 60,
      "strength": 12,
      "spirit": 19,
      "defense": 15
    },
    "baseB": {
      "hp": 353,
      "strength": 105,
      "spirit": 207,
      "defense": 140
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-275",
    "number": 275,
    "name": "ヨミテング",
    "baseA": {
      "hp": 70,
      "strength": 11,
      "spirit": 20,
      "defense": 15
    },
    "baseB": {
      "hp": 413,
      "strength": 96,
      "spirit": 200,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-276",
    "number": 276,
    "name": "リー夫人",
    "baseA": {
      "hp": 64,
      "strength": 7,
      "spirit": 25,
      "defense": 21
    },
    "baseB": {
      "hp": 364,
      "strength": 90,
      "spirit": 213,
      "defense": 183
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-277",
    "number": 277,
    "name": "ミツマタノヅチ",
    "baseA": {
      "hp": 69,
      "strength": 30,
      "spirit": 16,
      "defense": 22
    },
    "baseB": {
      "hp": 427,
      "strength": 213,
      "spirit": 122,
      "defense": 168
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-278",
    "number": 278,
    "name": "ガブニャン",
    "baseA": {
      "hp": 58,
      "strength": 27,
      "spirit": 11,
      "defense": 12
    },
    "baseB": {
      "hp": 366,
      "strength": 210,
      "spirit": 110,
      "defense": 124
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-279",
    "number": 279,
    "name": "ＵＳＡピョン",
    "baseA": {
      "hp": 63,
      "strength": 23,
      "spirit": 9,
      "defense": 13
    },
    "baseB": {
      "hp": 388,
      "strength": 219,
      "spirit": 71,
      "defense": 122
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-280",
    "number": 280,
    "name": "ＵＳＡピョン",
    "baseA": {
      "hp": 72,
      "strength": 20,
      "spirit": 5,
      "defense": 11
    },
    "baseB": {
      "hp": 415,
      "strength": 212,
      "spirit": 61,
      "defense": 112
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-281",
    "number": 281,
    "name": "ＵＳＡピョン",
    "baseA": {
      "hp": 61,
      "strength": 24,
      "spirit": 4,
      "defense": 19
    },
    "baseB": {
      "hp": 379,
      "strength": 213,
      "spirit": 59,
      "defense": 149
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-282",
    "number": 282,
    "name": "ＵＳＡピョン",
    "baseA": {
      "hp": 58,
      "strength": 19,
      "spirit": 17,
      "defense": 14
    },
    "baseB": {
      "hp": 380,
      "strength": 207,
      "spirit": 110,
      "defense": 103
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-283",
    "number": 283,
    "name": "ＵＳＡピョン",
    "baseA": {
      "hp": 64,
      "strength": 25,
      "spirit": 4,
      "defense": 15
    },
    "baseB": {
      "hp": 395,
      "strength": 233,
      "spirit": 61,
      "defense": 111
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-284",
    "number": 284,
    "name": "魔ガサス",
    "baseA": {
      "hp": 67,
      "strength": 10,
      "spirit": 30,
      "defense": 18
    },
    "baseB": {
      "hp": 397,
      "strength": 110,
      "spirit": 216,
      "defense": 167
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-285",
    "number": 285,
    "name": "ウ魔",
    "baseA": {
      "hp": 70,
      "strength": 22,
      "spirit": 6,
      "defense": 27
    },
    "baseB": {
      "hp": 410,
      "strength": 179,
      "spirit": 86,
      "defense": 215
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-286",
    "number": 286,
    "name": "デビビル",
    "baseA": {
      "hp": 58,
      "strength": 32,
      "spirit": 12,
      "defense": 14
    },
    "baseB": {
      "hp": 372,
      "strength": 210,
      "spirit": 110,
      "defense": 138
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-287",
    "number": 287,
    "name": "デビビラン",
    "baseA": {
      "hp": 65,
      "strength": 38,
      "spirit": 15,
      "defense": 18
    },
    "baseB": {
      "hp": 399,
      "strength": 221,
      "spirit": 150,
      "defense": 155
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-288",
    "number": 288,
    "name": "虫歯伯爵",
    "baseA": {
      "hp": 68,
      "strength": 17,
      "spirit": 36,
      "defense": 15
    },
    "baseB": {
      "hp": 415,
      "strength": 157,
      "spirit": 223,
      "defense": 135
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-289",
    "number": 289,
    "name": "百々目鬼",
    "baseA": {
      "hp": 75,
      "strength": 18,
      "spirit": 12,
      "defense": 32
    },
    "baseB": {
      "hp": 422,
      "strength": 177,
      "spirit": 101,
      "defense": 230
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-290",
    "number": 290,
    "name": "きらめ鬼",
    "baseA": {
      "hp": 78,
      "strength": 12,
      "spirit": 21,
      "defense": 35
    },
    "baseB": {
      "hp": 440,
      "strength": 100,
      "spirit": 187,
      "defense": 243
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-291",
    "number": 291,
    "name": "ドケチング",
    "baseA": {
      "hp": 63,
      "strength": 11,
      "spirit": 33,
      "defense": 18
    },
    "baseB": {
      "hp": 390,
      "strength": 124,
      "spirit": 204,
      "defense": 167
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-292",
    "number": 292,
    "name": "ヤミまろ",
    "baseA": {
      "hp": 69,
      "strength": 13,
      "spirit": 38,
      "defense": 16
    },
    "baseB": {
      "hp": 421,
      "strength": 138,
      "spirit": 219,
      "defense": 152
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-293",
    "number": 293,
    "name": "どんどろ",
    "baseA": {
      "hp": 72,
      "strength": 19,
      "spirit": 19,
      "defense": 36
    },
    "baseB": {
      "hp": 410,
      "strength": 158,
      "spirit": 158,
      "defense": 244
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-294",
    "number": 294,
    "name": "ヤミキュウビ",
    "baseA": {
      "hp": 65,
      "strength": 22,
      "spirit": 38,
      "defense": 10
    },
    "baseB": {
      "hp": 407,
      "strength": 155,
      "spirit": 240,
      "defense": 128
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-295",
    "number": 295,
    "name": "イガイガグリ",
    "baseA": {
      "hp": 54,
      "strength": 16,
      "spirit": 5,
      "defense": 13
    },
    "baseB": {
      "hp": 343,
      "strength": 185,
      "spirit": 78,
      "defense": 124
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-296",
    "number": 296,
    "name": "チクチクウニ",
    "baseA": {
      "hp": 56,
      "strength": 7,
      "spirit": 19,
      "defense": 16
    },
    "baseB": {
      "hp": 348,
      "strength": 75,
      "spirit": 182,
      "defense": 165
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-297",
    "number": 297,
    "name": "じめりんぼう",
    "baseA": {
      "hp": 50,
      "strength": 8,
      "spirit": 23,
      "defense": 5
    },
    "baseB": {
      "hp": 310,
      "strength": 108,
      "spirit": 207,
      "defense": 95
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-298",
    "number": 298,
    "name": "雨ふらし",
    "baseA": {
      "hp": 64,
      "strength": 11,
      "spirit": 34,
      "defense": 17
    },
    "baseB": {
      "hp": 376,
      "strength": 118,
      "spirit": 244,
      "defense": 152
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-299",
    "number": 299,
    "name": "こおりんぼう",
    "baseA": {
      "hp": 54,
      "strength": 3,
      "spirit": 8,
      "defense": 21
    },
    "baseB": {
      "hp": 325,
      "strength": 69,
      "spirit": 140,
      "defense": 186
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-300",
    "number": 300,
    "name": "化けあられ",
    "baseA": {
      "hp": 70,
      "strength": 6,
      "spirit": 16,
      "defense": 34
    },
    "baseB": {
      "hp": 405,
      "strength": 76,
      "spirit": 181,
      "defense": 228
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-301",
    "number": 301,
    "name": "たらりん",
    "baseA": {
      "hp": 51,
      "strength": 4,
      "spirit": 35,
      "defense": 6
    },
    "baseB": {
      "hp": 380,
      "strength": 53,
      "spirit": 233,
      "defense": 104
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-302",
    "number": 302,
    "name": "ヨコドリ",
    "baseA": {
      "hp": 56,
      "strength": 16,
      "spirit": 5,
      "defense": 10
    },
    "baseB": {
      "hp": 324,
      "strength": 184,
      "spirit": 86,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-303",
    "number": 303,
    "name": "ぶんぶん鳥",
    "baseA": {
      "hp": 62,
      "strength": 26,
      "spirit": 10,
      "defense": 19
    },
    "baseB": {
      "hp": 369,
      "strength": 209,
      "spirit": 96,
      "defense": 176
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-304",
    "number": 304,
    "name": "はらおドリ",
    "baseA": {
      "hp": 58,
      "strength": 7,
      "spirit": 19,
      "defense": 13
    },
    "baseB": {
      "hp": 340,
      "strength": 89,
      "spirit": 194,
      "defense": 147
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-305",
    "number": 305,
    "name": "おともらし",
    "baseA": {
      "hp": 53,
      "strength": 18,
      "spirit": 7,
      "defense": 10
    },
    "baseB": {
      "hp": 338,
      "strength": 193,
      "spirit": 96,
      "defense": 103
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-306",
    "number": 306,
    "name": "爆音ならし",
    "baseA": {
      "hp": 57,
      "strength": 31,
      "spirit": 7,
      "defense": 13
    },
    "baseB": {
      "hp": 358,
      "strength": 219,
      "spirit": 100,
      "defense": 133
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-307",
    "number": 307,
    "name": "トホホギス",
    "baseA": {
      "hp": 53,
      "strength": 5,
      "spirit": 22,
      "defense": 8
    },
    "baseB": {
      "hp": 337,
      "strength": 87,
      "spirit": 192,
      "defense": 114
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-308",
    "number": 308,
    "name": "ブカッコウ",
    "baseA": {
      "hp": 60,
      "strength": 6,
      "spirit": 30,
      "defense": 12
    },
    "baseB": {
      "hp": 362,
      "strength": 108,
      "spirit": 207,
      "defense": 128
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-309",
    "number": 309,
    "name": "死神鳥",
    "baseA": {
      "hp": 64,
      "strength": 32,
      "spirit": 12,
      "defense": 20
    },
    "baseB": {
      "hp": 395,
      "strength": 214,
      "spirit": 132,
      "defense": 149
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-310",
    "number": 310,
    "name": "じんめん犬",
    "baseA": {
      "hp": 55,
      "strength": 15,
      "spirit": 6,
      "defense": 10
    },
    "baseB": {
      "hp": 343,
      "strength": 182,
      "spirit": 97,
      "defense": 108
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-311",
    "number": 311,
    "name": "かおベロス",
    "baseA": {
      "hp": 65,
      "strength": 25,
      "spirit": 9,
      "defense": 17
    },
    "baseB": {
      "hp": 373,
      "strength": 212,
      "spirit": 116,
      "defense": 149
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-312",
    "number": 312,
    "name": "三途の犬",
    "baseA": {
      "hp": 69,
      "strength": 32,
      "spirit": 10,
      "defense": 15
    },
    "baseB": {
      "hp": 387,
      "strength": 228,
      "spirit": 141,
      "defense": 134
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-313",
    "number": 313,
    "name": "ロボメン犬",
    "baseA": {
      "hp": 64,
      "strength": 20,
      "spirit": 8,
      "defense": 23
    },
    "baseB": {
      "hp": 376,
      "strength": 187,
      "spirit": 96,
      "defense": 191
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-314",
    "number": 314,
    "name": "けうけげん",
    "baseA": {
      "hp": 50,
      "strength": 3,
      "spirit": 7,
      "defense": 18
    },
    "baseB": {
      "hp": 359,
      "strength": 40,
      "spirit": 103,
      "defense": 188
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-315",
    "number": 315,
    "name": "ふさふさん",
    "baseA": {
      "hp": 68,
      "strength": 9,
      "spirit": 19,
      "defense": 32
    },
    "baseB": {
      "hp": 389,
      "strength": 99,
      "spirit": 195,
      "defense": 207
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-316",
    "number": 316,
    "name": "認ＭＥＮ",
    "baseA": {
      "hp": 51,
      "strength": 11,
      "spirit": 16,
      "defense": 9
    },
    "baseB": {
      "hp": 368,
      "strength": 100,
      "spirit": 163,
      "defense": 99
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-317",
    "number": 317,
    "name": "ドンヨリーヌ",
    "baseA": {
      "hp": 60,
      "strength": 11,
      "spirit": 14,
      "defense": 22
    },
    "baseB": {
      "hp": 368,
      "strength": 71,
      "spirit": 161,
      "defense": 210
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-318",
    "number": 318,
    "name": "口だけおんな",
    "baseA": {
      "hp": 58,
      "strength": 6,
      "spirit": 22,
      "defense": 12
    },
    "baseB": {
      "hp": 357,
      "strength": 91,
      "spirit": 193,
      "defense": 129
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-319",
    "number": 319,
    "name": "おつぼね様",
    "baseA": {
      "hp": 57,
      "strength": 10,
      "spirit": 26,
      "defense": 15
    },
    "baseB": {
      "hp": 343,
      "strength": 127,
      "spirit": 200,
      "defense": 140
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-320",
    "number": 320,
    "name": "砂ン丘入道",
    "baseA": {
      "hp": 62,
      "strength": 6,
      "spirit": 20,
      "defense": 17
    },
    "baseB": {
      "hp": 360,
      "strength": 74,
      "spirit": 206,
      "defense": 160
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-321",
    "number": 321,
    "name": "ノー砂ン丘入道",
    "baseA": {
      "hp": 67,
      "strength": 7,
      "spirit": 30,
      "defense": 21
    },
    "baseB": {
      "hp": 384,
      "strength": 79,
      "spirit": 226,
      "defense": 191
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-322",
    "number": 322,
    "name": "じがじぃさん",
    "baseA": {
      "hp": 63,
      "strength": 10,
      "spirit": 20,
      "defense": 13
    },
    "baseB": {
      "hp": 364,
      "strength": 113,
      "spirit": 197,
      "defense": 131
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-323",
    "number": 323,
    "name": "のらりくらり",
    "baseA": {
      "hp": 60,
      "strength": 18,
      "spirit": 14,
      "defense": 16
    },
    "baseB": {
      "hp": 354,
      "strength": 175,
      "spirit": 116,
      "defense": 165
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-324",
    "number": 324,
    "name": "おならず者",
    "baseA": {
      "hp": 57,
      "strength": 22,
      "spirit": 13,
      "defense": 16
    },
    "baseB": {
      "hp": 373,
      "strength": 197,
      "spirit": 113,
      "defense": 127
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-325",
    "number": 325,
    "name": "へこ鬼神",
    "baseA": {
      "hp": 63,
      "strength": 29,
      "spirit": 15,
      "defense": 21
    },
    "baseB": {
      "hp": 390,
      "strength": 214,
      "spirit": 125,
      "defense": 161
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-326",
    "number": 326,
    "name": "花子さん",
    "baseA": {
      "hp": 61,
      "strength": 7,
      "spirit": 25,
      "defense": 14
    },
    "baseB": {
      "hp": 356,
      "strength": 107,
      "spirit": 202,
      "defense": 145
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-327",
    "number": 327,
    "name": "呪野花子",
    "baseA": {
      "hp": 68,
      "strength": 9,
      "spirit": 33,
      "defense": 17
    },
    "baseB": {
      "hp": 385,
      "strength": 116,
      "spirit": 226,
      "defense": 163
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-328",
    "number": 328,
    "name": "のぼせトンマン",
    "baseA": {
      "hp": 63,
      "strength": 13,
      "spirit": 19,
      "defense": 32
    },
    "baseB": {
      "hp": 400,
      "strength": 106,
      "spirit": 172,
      "defense": 212
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-329",
    "number": 329,
    "name": "おすべり様",
    "baseA": {
      "hp": 57,
      "strength": 5,
      "spirit": 26,
      "defense": 19
    },
    "baseB": {
      "hp": 342,
      "strength": 95,
      "spirit": 205,
      "defense": 168
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-330",
    "number": 330,
    "name": "おしっしょう",
    "baseA": {
      "hp": 61,
      "strength": 28,
      "spirit": 10,
      "defense": 18
    },
    "baseB": {
      "hp": 377,
      "strength": 206,
      "spirit": 114,
      "defense": 153
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-331",
    "number": 331,
    "name": "しわくちゃん",
    "baseA": {
      "hp": 58,
      "strength": 10,
      "spirit": 30,
      "defense": 16
    },
    "baseB": {
      "hp": 364,
      "strength": 111,
      "spirit": 204,
      "defense": 161
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-332",
    "number": 332,
    "name": "老いらん",
    "baseA": {
      "hp": 65,
      "strength": 15,
      "spirit": 35,
      "defense": 19
    },
    "baseB": {
      "hp": 389,
      "strength": 142,
      "spirit": 216,
      "defense": 173
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-333",
    "number": 333,
    "name": "ふじみ御前",
    "baseA": {
      "hp": 71,
      "strength": 17,
      "spirit": 33,
      "defense": 15
    },
    "baseB": {
      "hp": 407,
      "strength": 180,
      "spirit": 213,
      "defense": 130
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-334",
    "number": 334,
    "name": "ダークニャン",
    "baseA": {
      "hp": 59,
      "strength": 30,
      "spirit": 12,
      "defense": 16
    },
    "baseB": {
      "hp": 375,
      "strength": 214,
      "spirit": 103,
      "defense": 158
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-335",
    "number": 335,
    "name": "フゥミン",
    "baseA": {
      "hp": 63,
      "strength": 16,
      "spirit": 26,
      "defense": 20
    },
    "baseB": {
      "hp": 389,
      "strength": 142,
      "spirit": 197,
      "defense": 157
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-336",
    "number": 336,
    "name": "おねむの精",
    "baseA": {
      "hp": 70,
      "strength": 15,
      "spirit": 32,
      "defense": 18
    },
    "baseB": {
      "hp": 417,
      "strength": 141,
      "spirit": 221,
      "defense": 151
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-337",
    "number": 337,
    "name": "土蜘蛛",
    "baseA": {
      "hp": 63,
      "strength": 14,
      "spirit": 42,
      "defense": 20
    },
    "baseB": {
      "hp": 396,
      "strength": 134,
      "spirit": 235,
      "defense": 170
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-338",
    "number": 338,
    "name": "女郎蜘蛛",
    "baseA": {
      "hp": 67,
      "strength": 36,
      "spirit": 14,
      "defense": 19
    },
    "baseB": {
      "hp": 408,
      "strength": 217,
      "spirit": 145,
      "defense": 160
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-339",
    "number": 339,
    "name": "ねちがえる",
    "baseA": {
      "hp": 50,
      "strength": 4,
      "spirit": 28,
      "defense": 7
    },
    "baseB": {
      "hp": 342,
      "strength": 82,
      "spirit": 199,
      "defense": 107
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-340",
    "number": 340,
    "name": "ツチノコ",
    "baseA": {
      "hp": 55,
      "strength": 1,
      "spirit": 18,
      "defense": 5
    },
    "baseB": {
      "hp": 340,
      "strength": 47,
      "spirit": 216,
      "defense": 87
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-341",
    "number": 341,
    "name": "フクリュウ",
    "baseA": {
      "hp": 63,
      "strength": 9,
      "spirit": 35,
      "defense": 12
    },
    "baseB": {
      "hp": 392,
      "strength": 75,
      "spirit": 230,
      "defense": 153
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-342",
    "number": 342,
    "name": "ツチノコパンダ",
    "baseA": {
      "hp": 61,
      "strength": 11,
      "spirit": 28,
      "defense": 19
    },
    "baseB": {
      "hp": 389,
      "strength": 83,
      "spirit": 206,
      "defense": 177
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-343",
    "number": 343,
    "name": "ロボノコ",
    "baseA": {
      "hp": 54,
      "strength": 8,
      "spirit": 16,
      "defense": 27
    },
    "baseB": {
      "hp": 386,
      "strength": 55,
      "spirit": 153,
      "defense": 216
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-344",
    "number": 344,
    "name": "からみぞん",
    "baseA": {
      "hp": 52,
      "strength": 20,
      "spirit": 3,
      "defense": 11
    },
    "baseB": {
      "hp": 337,
      "strength": 196,
      "spirit": 63,
      "defense": 134
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-345",
    "number": 345,
    "name": "こんがらギャル",
    "baseA": {
      "hp": 64,
      "strength": 34,
      "spirit": 6,
      "defense": 22
    },
    "baseB": {
      "hp": 392,
      "strength": 222,
      "spirit": 81,
      "defense": 185
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-346",
    "number": 346,
    "name": "ウィスパー",
    "baseA": {
      "hp": 63,
      "strength": 3,
      "spirit": 22,
      "defense": 11
    },
    "baseB": {
      "hp": 371,
      "strength": 73,
      "spirit": 205,
      "defense": 121
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-347",
    "number": 347,
    "name": "ウィスベェ",
    "baseA": {
      "hp": 66,
      "strength": 6,
      "spirit": 17,
      "defense": 10
    },
    "baseB": {
      "hp": 388,
      "strength": 92,
      "spirit": 184,
      "defense": 106
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-348",
    "number": 348,
    "name": "笑ウツボ",
    "baseA": {
      "hp": 56,
      "strength": 9,
      "spirit": 17,
      "defense": 16
    },
    "baseB": {
      "hp": 334,
      "strength": 92,
      "spirit": 192,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-349",
    "number": 349,
    "name": "歌ウナギ",
    "baseA": {
      "hp": 61,
      "strength": 10,
      "spirit": 22,
      "defense": 15
    },
    "baseB": {
      "hp": 353,
      "strength": 118,
      "spirit": 202,
      "defense": 137
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-350",
    "number": 350,
    "name": "大蛇のツボ",
    "baseA": {
      "hp": 60,
      "strength": 19,
      "spirit": 16,
      "defense": 13
    },
    "baseB": {
      "hp": 346,
      "strength": 161,
      "spirit": 190,
      "defense": 113
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-351",
    "number": 351,
    "name": "キライギョ",
    "baseA": {
      "hp": 60,
      "strength": 13,
      "spirit": 8,
      "defense": 15
    },
    "baseB": {
      "hp": 337,
      "strength": 167,
      "spirit": 97,
      "defense": 169
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-352",
    "number": 352,
    "name": "ゾウオ",
    "baseA": {
      "hp": 63,
      "strength": 27,
      "spirit": 10,
      "defense": 16
    },
    "baseB": {
      "hp": 368,
      "strength": 200,
      "spirit": 100,
      "defense": 182
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-353",
    "number": 353,
    "name": "ギャクジョウオ",
    "baseA": {
      "hp": 67,
      "strength": 30,
      "spirit": 8,
      "defense": 21
    },
    "baseB": {
      "hp": 391,
      "strength": 207,
      "spirit": 91,
      "defense": 201
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-354",
    "number": 354,
    "name": "たこやっ鬼",
    "baseA": {
      "hp": 53,
      "strength": 23,
      "spirit": 5,
      "defense": 14
    },
    "baseB": {
      "hp": 350,
      "strength": 194,
      "spirit": 65,
      "defense": 151
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-355",
    "number": 355,
    "name": "たこや鬼神",
    "baseA": {
      "hp": 64,
      "strength": 33,
      "spirit": 9,
      "defense": 19
    },
    "baseB": {
      "hp": 409,
      "strength": 235,
      "spirit": 72,
      "defense": 164
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-356",
    "number": 356,
    "name": "おもいだスッポン",
    "baseA": {
      "hp": 58,
      "strength": 6,
      "spirit": 20,
      "defense": 13
    },
    "baseB": {
      "hp": 344,
      "strength": 70,
      "spirit": 198,
      "defense": 153
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-357",
    "number": 357,
    "name": "おもいだ神",
    "baseA": {
      "hp": 66,
      "strength": 9,
      "spirit": 30,
      "defense": 22
    },
    "baseB": {
      "hp": 400,
      "strength": 87,
      "spirit": 219,
      "defense": 179
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-358",
    "number": 358,
    "name": "ムカムカデ",
    "baseA": {
      "hp": 55,
      "strength": 22,
      "spirit": 5,
      "defense": 16
    },
    "baseB": {
      "hp": 354,
      "strength": 197,
      "spirit": 68,
      "defense": 151
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-359",
    "number": 359,
    "name": "激ドラゴン",
    "baseA": {
      "hp": 64,
      "strength": 33,
      "spirit": 7,
      "defense": 24
    },
    "baseB": {
      "hp": 404,
      "strength": 219,
      "spirit": 94,
      "defense": 173
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-360",
    "number": 360,
    "name": "りゅーくん",
    "baseA": {
      "hp": 57,
      "strength": 5,
      "spirit": 23,
      "defense": 10
    },
    "baseB": {
      "hp": 345,
      "strength": 103,
      "spirit": 190,
      "defense": 127
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-361",
    "number": 361,
    "name": "龍神",
    "baseA": {
      "hp": 68,
      "strength": 16,
      "spirit": 33,
      "defense": 18
    },
    "baseB": {
      "hp": 392,
      "strength": 155,
      "spirit": 203,
      "defense": 165
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-362",
    "number": 362,
    "name": "青龍",
    "baseA": {
      "hp": 69,
      "strength": 18,
      "spirit": 35,
      "defense": 14
    },
    "baseB": {
      "hp": 398,
      "strength": 168,
      "spirit": 218,
      "defense": 146
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-363",
    "number": 363,
    "name": "ロボりゅーくん",
    "baseA": {
      "hp": 51,
      "strength": 11,
      "spirit": 19,
      "defense": 24
    },
    "baseB": {
      "hp": 366,
      "strength": 61,
      "spirit": 179,
      "defense": 204
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-364",
    "number": 364,
    "name": "にんぎょ",
    "baseA": {
      "hp": 54,
      "strength": 10,
      "spirit": 21,
      "defense": 13
    },
    "baseB": {
      "hp": 337,
      "strength": 93,
      "spirit": 198,
      "defense": 137
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-365",
    "number": 365,
    "name": "八百比丘尼",
    "baseA": {
      "hp": 67,
      "strength": 13,
      "spirit": 34,
      "defense": 21
    },
    "baseB": {
      "hp": 397,
      "strength": 135,
      "spirit": 217,
      "defense": 176
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-366",
    "number": 366,
    "name": "イザナミ",
    "baseA": {
      "hp": 69,
      "strength": 14,
      "spirit": 36,
      "defense": 17
    },
    "baseB": {
      "hp": 400,
      "strength": 147,
      "spirit": 229,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-367",
    "number": 367,
    "name": "ろくろ首",
    "baseA": {
      "hp": 59,
      "strength": 19,
      "spirit": 11,
      "defense": 16
    },
    "baseB": {
      "hp": 362,
      "strength": 173,
      "spirit": 106,
      "defense": 159
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-368",
    "number": 368,
    "name": "ボー坊",
    "baseA": {
      "hp": 57,
      "strength": 1,
      "spirit": 27,
      "defense": 14
    },
    "baseB": {
      "hp": 400,
      "strength": 43,
      "spirit": 227,
      "defense": 105
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-369",
    "number": 369,
    "name": "しどろもどろ",
    "baseA": {
      "hp": 53,
      "strength": 12,
      "spirit": 26,
      "defense": 18
    },
    "baseB": {
      "hp": 361,
      "strength": 81,
      "spirit": 214,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-370",
    "number": 370,
    "name": "ミチクサメ",
    "baseA": {
      "hp": 54,
      "strength": 18,
      "spirit": 10,
      "defense": 25
    },
    "baseB": {
      "hp": 373,
      "strength": 147,
      "spirit": 80,
      "defense": 207
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-371",
    "number": 371,
    "name": "トーシロザメ",
    "baseA": {
      "hp": 60,
      "strength": 21,
      "spirit": 7,
      "defense": 29
    },
    "baseB": {
      "hp": 403,
      "strength": 174,
      "spirit": 67,
      "defense": 203
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-372",
    "number": 372,
    "name": "ムダヅカイ",
    "baseA": {
      "hp": 60,
      "strength": 15,
      "spirit": 6,
      "defense": 25
    },
    "baseB": {
      "hp": 364,
      "strength": 146,
      "spirit": 82,
      "defense": 218
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-373",
    "number": 373,
    "name": "はらわシェル",
    "baseA": {
      "hp": 63,
      "strength": 12,
      "spirit": 11,
      "defense": 30
    },
    "baseB": {
      "hp": 392,
      "strength": 117,
      "spirit": 115,
      "defense": 226
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-374",
    "number": 374,
    "name": "ナガバナ",
    "baseA": {
      "hp": 59,
      "strength": 22,
      "spirit": 9,
      "defense": 19
    },
    "baseB": {
      "hp": 352,
      "strength": 192,
      "spirit": 91,
      "defense": 175
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-375",
    "number": 375,
    "name": "ナガバナナ",
    "baseA": {
      "hp": 62,
      "strength": 27,
      "spirit": 10,
      "defense": 20
    },
    "baseB": {
      "hp": 370,
      "strength": 200,
      "spirit": 97,
      "defense": 183
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-376",
    "number": 376,
    "name": "ホリュウ",
    "baseA": {
      "hp": 61,
      "strength": 8,
      "spirit": 30,
      "defense": 20
    },
    "baseB": {
      "hp": 366,
      "strength": 120,
      "spirit": 212,
      "defense": 152
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-377",
    "number": 377,
    "name": "つられたろう丸",
    "baseA": {
      "hp": 62,
      "strength": 10,
      "spirit": 31,
      "defense": 24
    },
    "baseB": {
      "hp": 393,
      "strength": 104,
      "spirit": 221,
      "defense": 172
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-378",
    "number": 378,
    "name": "しきるん蛇",
    "baseA": {
      "hp": 62,
      "strength": 25,
      "spirit": 14,
      "defense": 16
    },
    "baseB": {
      "hp": 378,
      "strength": 198,
      "spirit": 106,
      "defense": 163
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-379",
    "number": 379,
    "name": "すねスネーク",
    "baseA": {
      "hp": 60,
      "strength": 10,
      "spirit": 25,
      "defense": 22
    },
    "baseB": {
      "hp": 367,
      "strength": 131,
      "spirit": 175,
      "defense": 172
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-380",
    "number": 380,
    "name": "まむし行司",
    "baseA": {
      "hp": 63,
      "strength": 27,
      "spirit": 15,
      "defense": 22
    },
    "baseB": {
      "hp": 384,
      "strength": 203,
      "spirit": 109,
      "defense": 194
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-381",
    "number": 381,
    "name": "オロチ",
    "baseA": {
      "hp": 67,
      "strength": 39,
      "spirit": 10,
      "defense": 22
    },
    "baseB": {
      "hp": 412,
      "strength": 230,
      "spirit": 136,
      "defense": 157
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-382",
    "number": 382,
    "name": "影オロチ",
    "baseA": {
      "hp": 62,
      "strength": 21,
      "spirit": 36,
      "defense": 17
    },
    "baseB": {
      "hp": 389,
      "strength": 181,
      "spirit": 218,
      "defense": 142
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-383",
    "number": 383,
    "name": "ブシニャン",
    "baseA": {
      "hp": 63,
      "strength": 48,
      "spirit": 8,
      "defense": 16
    },
    "baseB": {
      "hp": 439,
      "strength": 230,
      "spirit": 102,
      "defense": 139
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-384",
    "number": 384,
    "name": "しゅらコマ",
    "baseA": {
      "hp": 67,
      "strength": 14,
      "spirit": 54,
      "defense": 10
    },
    "baseB": {
      "hp": 416,
      "strength": 144,
      "spirit": 250,
      "defense": 140
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-385",
    "number": 385,
    "name": "山吹鬼",
    "baseA": {
      "hp": 90,
      "strength": 41,
      "spirit": 4,
      "defense": 30
    },
    "baseB": {
      "hp": 440,
      "strength": 244,
      "spirit": 90,
      "defense": 226
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-386",
    "number": 386,
    "name": "ネタバレリーナ",
    "baseA": {
      "hp": 63,
      "strength": 13,
      "spirit": 48,
      "defense": 11
    },
    "baseB": {
      "hp": 411,
      "strength": 152,
      "spirit": 233,
      "defense": 114
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-387",
    "number": 387,
    "name": "花さか爺",
    "baseA": {
      "hp": 63,
      "strength": 10,
      "spirit": 48,
      "defense": 14
    },
    "baseB": {
      "hp": 410,
      "strength": 107,
      "spirit": 246,
      "defense": 147
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-388",
    "number": 388,
    "name": "うんちく魔",
    "baseA": {
      "hp": 62,
      "strength": 37,
      "spirit": 30,
      "defense": 6
    },
    "baseB": {
      "hp": 398,
      "strength": 201,
      "spirit": 199,
      "defense": 112
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-389",
    "number": 389,
    "name": "イケメン犬",
    "baseA": {
      "hp": 59,
      "strength": 19,
      "spirit": 49,
      "defense": 8
    },
    "baseB": {
      "hp": 413,
      "strength": 135,
      "spirit": 226,
      "defense": 136
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-390",
    "number": 390,
    "name": "やまタン",
    "baseA": {
      "hp": 73,
      "strength": 16,
      "spirit": 14,
      "defense": 52
    },
    "baseB": {
      "hp": 440,
      "strength": 147,
      "spirit": 140,
      "defense": 233
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-391",
    "number": 391,
    "name": "あかなめ・怪",
    "baseA": {
      "hp": 75,
      "strength": 20,
      "spirit": 3,
      "defense": 5
    },
    "baseB": {
      "hp": 384,
      "strength": 226,
      "spirit": 91,
      "defense": 104
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-392",
    "number": 392,
    "name": "泥田坊・怪",
    "baseA": {
      "hp": 82,
      "strength": 16,
      "spirit": 4,
      "defense": 22
    },
    "baseB": {
      "hp": 418,
      "strength": 192,
      "spirit": 55,
      "defense": 225
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-393",
    "number": 393,
    "name": "えんらえんら・怪",
    "baseA": {
      "hp": 70,
      "strength": 21,
      "spirit": 30,
      "defense": 8
    },
    "baseB": {
      "hp": 414,
      "strength": 149,
      "spirit": 235,
      "defense": 92
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-394",
    "number": 394,
    "name": "河童・怪",
    "baseA": {
      "hp": 72,
      "strength": 19,
      "spirit": 33,
      "defense": 5
    },
    "baseB": {
      "hp": 394,
      "strength": 184,
      "spirit": 228,
      "defense": 84
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-395",
    "number": 395,
    "name": "から傘お化け・怪",
    "baseA": {
      "hp": 58,
      "strength": 3,
      "spirit": 23,
      "defense": 4
    },
    "baseB": {
      "hp": 382,
      "strength": 81,
      "spirit": 208,
      "defense": 59
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-396",
    "number": 396,
    "name": "ざしきわらし・怪",
    "baseA": {
      "hp": 56,
      "strength": 14,
      "spirit": 23,
      "defense": 4
    },
    "baseB": {
      "hp": 381,
      "strength": 126,
      "spirit": 208,
      "defense": 55
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-397",
    "number": 397,
    "name": "くだん・怪",
    "baseA": {
      "hp": 60,
      "strength": 16,
      "spirit": 25,
      "defense": 5
    },
    "baseB": {
      "hp": 384,
      "strength": 169,
      "spirit": 194,
      "defense": 63
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-398",
    "number": 398,
    "name": "けうけげん・怪",
    "baseA": {
      "hp": 53,
      "strength": 8,
      "spirit": 24,
      "defense": 3
    },
    "baseB": {
      "hp": 370,
      "strength": 88,
      "spirit": 210,
      "defense": 62
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-399",
    "number": 399,
    "name": "にんぎょ・怪",
    "baseA": {
      "hp": 60,
      "strength": 14,
      "spirit": 28,
      "defense": 6
    },
    "baseB": {
      "hp": 384,
      "strength": 151,
      "spirit": 209,
      "defense": 66
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-400",
    "number": 400,
    "name": "ろくろ首・怪",
    "baseA": {
      "hp": 65,
      "strength": 20,
      "spirit": 24,
      "defense": 6
    },
    "baseB": {
      "hp": 377,
      "strength": 176,
      "spirit": 203,
      "defense": 94
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-401",
    "number": 401,
    "name": "厄怪",
    "baseA": {
      "hp": 66,
      "strength": 3,
      "spirit": 25,
      "defense": 31
    },
    "baseB": {
      "hp": 401,
      "strength": 58,
      "spirit": 200,
      "defense": 231
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-402",
    "number": 402,
    "name": "不怪",
    "baseA": {
      "hp": 66,
      "strength": 8,
      "spirit": 35,
      "defense": 26
    },
    "baseB": {
      "hp": 419,
      "strength": 114,
      "spirit": 223,
      "defense": 174
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-403",
    "number": 403,
    "name": "豪怪",
    "baseA": {
      "hp": 79,
      "strength": 21,
      "spirit": 9,
      "defense": 36
    },
    "baseB": {
      "hp": 438,
      "strength": 212,
      "spirit": 82,
      "defense": 238
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-404",
    "number": 404,
    "name": "難怪",
    "baseA": {
      "hp": 65,
      "strength": 10,
      "spirit": 38,
      "defense": 22
    },
    "baseB": {
      "hp": 412,
      "strength": 104,
      "spirit": 244,
      "defense": 170
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-405",
    "number": 405,
    "name": "破怪",
    "baseA": {
      "hp": 71,
      "strength": 39,
      "spirit": 8,
      "defense": 17
    },
    "baseB": {
      "hp": 421,
      "strength": 235,
      "spirit": 121,
      "defense": 153
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-406",
    "number": 406,
    "name": "Ｂジバニャン",
    "baseA": {
      "hp": 60,
      "strength": 30,
      "spirit": 4,
      "defense": 13
    },
    "baseB": {
      "hp": 355,
      "strength": 220,
      "spirit": 81,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-407",
    "number": 407,
    "name": "Ｂコマさん",
    "baseA": {
      "hp": 63,
      "strength": 30,
      "spirit": 5,
      "defense": 19
    },
    "baseB": {
      "hp": 360,
      "strength": 218,
      "spirit": 104,
      "defense": 168
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-408",
    "number": 408,
    "name": "ニャン騎士",
    "baseA": {
      "hp": 64,
      "strength": 19,
      "spirit": 4,
      "defense": 30
    },
    "baseB": {
      "hp": 389,
      "strength": 192,
      "spirit": 45,
      "defense": 224
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-409",
    "number": 409,
    "name": "ニャン魔女",
    "baseA": {
      "hp": 61,
      "strength": 9,
      "spirit": 30,
      "defense": 17
    },
    "baseB": {
      "hp": 387,
      "strength": 76,
      "spirit": 237,
      "defense": 150
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-410",
    "number": 410,
    "name": "モモタロニャン",
    "baseA": {
      "hp": 66,
      "strength": 16,
      "spirit": 7,
      "defense": 26
    },
    "baseB": {
      "hp": 389,
      "strength": 174,
      "spirit": 73,
      "defense": 214
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-411",
    "number": 411,
    "name": "イヌニャン",
    "baseA": {
      "hp": 61,
      "strength": 23,
      "spirit": 3,
      "defense": 18
    },
    "baseB": {
      "hp": 359,
      "strength": 210,
      "spirit": 59,
      "defense": 182
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-412",
    "number": 412,
    "name": "サルニャン",
    "baseA": {
      "hp": 59,
      "strength": 16,
      "spirit": 14,
      "defense": 18
    },
    "baseB": {
      "hp": 356,
      "strength": 154,
      "spirit": 136,
      "defense": 164
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-413",
    "number": 413,
    "name": "キジニャン",
    "baseA": {
      "hp": 59,
      "strength": 3,
      "spirit": 27,
      "defense": 16
    },
    "baseB": {
      "hp": 354,
      "strength": 78,
      "spirit": 207,
      "defense": 171
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-444",
    "number": 444,
    "name": "ブリー元帥",
    "baseA": {
      "hp": 79,
      "strength": 29,
      "spirit": 14,
      "defense": 7
    },
    "baseB": {
      "hp": 434,
      "strength": 261,
      "spirit": 142,
      "defense": 108
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-445",
    "number": 445,
    "name": "鬼蜘蛛",
    "baseA": {
      "hp": 58,
      "strength": 50,
      "spirit": 26,
      "defense": 8
    },
    "baseB": {
      "hp": 362,
      "strength": 275,
      "spirit": 194,
      "defense": 114
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-446",
    "number": 446,
    "name": "鬼ガマ",
    "baseA": {
      "hp": 58,
      "strength": 26,
      "spirit": 50,
      "defense": 8
    },
    "baseB": {
      "hp": 362,
      "strength": 194,
      "spirit": 275,
      "defense": 114
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-447",
    "number": 447,
    "name": "フウ２",
    "baseA": {
      "hp": 70,
      "strength": 28,
      "spirit": 28,
      "defense": 32
    },
    "baseB": {
      "hp": 376,
      "strength": 150,
      "spirit": 154,
      "defense": 155
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-448",
    "number": 448,
    "name": "キンタロニャン",
    "baseA": {
      "hp": 70,
      "strength": 25,
      "spirit": 8,
      "defense": 18
    },
    "baseB": {
      "hp": 403,
      "strength": 206,
      "spirit": 86,
      "defense": 154
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-449",
    "number": 449,
    "name": "カブキロイド",
    "baseA": {
      "hp": 70,
      "strength": 25,
      "spirit": 10,
      "defense": 34
    },
    "baseB": {
      "hp": 418,
      "strength": 235,
      "spirit": 86,
      "defense": 231
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-450",
    "number": 450,
    "name": "レッドＪ",
    "baseA": {
      "hp": 59,
      "strength": 45,
      "spirit": 11,
      "defense": 17
    },
    "baseB": {
      "hp": 402,
      "strength": 212,
      "spirit": 132,
      "defense": 142
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-451",
    "number": 451,
    "name": "マイティードッグ",
    "baseA": {
      "hp": 67,
      "strength": 22,
      "spirit": 10,
      "defense": 27
    },
    "baseB": {
      "hp": 387,
      "strength": 174,
      "spirit": 113,
      "defense": 211
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-452",
    "number": 452,
    "name": "モズク先生",
    "baseA": {
      "hp": 65,
      "strength": 5,
      "spirit": 10,
      "defense": 21
    },
    "baseB": {
      "hp": 401,
      "strength": 97,
      "spirit": 130,
      "defense": 182
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-453",
    "number": 453,
    "name": "ウラシマニャン",
    "baseA": {
      "hp": 63,
      "strength": 11,
      "spirit": 29,
      "defense": 18
    },
    "baseB": {
      "hp": 385,
      "strength": 83,
      "spirit": 216,
      "defense": 174
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-454",
    "number": 454,
    "name": "ガシャどくろ",
    "baseA": {
      "hp": 78,
      "strength": 8,
      "spirit": 5,
      "defense": 24
    },
    "baseB": {
      "hp": 392,
      "strength": 131,
      "spirit": 102,
      "defense": 205
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-455",
    "number": 455,
    "name": "Ｂ‐ＵＳＡピョン",
    "baseA": {
      "hp": 60,
      "strength": 31,
      "spirit": 4,
      "defense": 6
    },
    "baseB": {
      "hp": 380,
      "strength": 242,
      "spirit": 80,
      "defense": 96
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-456",
    "number": 456,
    "name": "シメッポイーナ",
    "baseA": {
      "hp": 63,
      "strength": 4,
      "spirit": 15,
      "defense": 18
    },
    "baseB": {
      "hp": 393,
      "strength": 93,
      "spirit": 155,
      "defense": 162
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-457",
    "number": 457,
    "name": "ツチノコ星人",
    "baseA": {
      "hp": 1,
      "strength": 45,
      "spirit": 45,
      "defense": 45
    },
    "baseB": {
      "hp": 1,
      "strength": 255,
      "spirit": 255,
      "defense": 255
    },
    "source": "togenyan-ywb-moon"
  },
  {
    "id": "ywb-458",
    "number": 458,
    "name": "エンマ大王",
    "baseA": {
      "hp": 80,
      "strength": 40,
      "spirit": 40,
      "defense": 32
    },
    "baseB": {
      "hp": 410,
      "strength": 220,
      "spirit": 220,
      "defense": 200
    },
    "source": "togenyan-ywb-moon"
  }
] as const satisfies readonly YokaiSpecies[];
