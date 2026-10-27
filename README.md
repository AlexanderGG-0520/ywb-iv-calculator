# 妖怪ウォッチバスターズ（赤猫団・白犬隊・月兎組）個体値逆算器

非公式の逆算・順算ツールです。YW1 / YW2 / YW3 と独立したゲーム専用計算エンジンを使います。

## 対応内容
- 月兎組の種族値表に基づく429件の通常ステータスデータ
- 妖怪名または図鑑番号から検索
- レベル1〜99、HP・ちから・ようりょく・まもりの4項目
- 装備補正（正負）と、装備なし状態
- 一致するすべての加重40点IV候補を探索し、全候補の範囲・候補数・上位候補を表示
- 個体値からステータスへの順算
- 検算用のVitest、ブラウザ用Worker、MCP HTTP API

## 個体値と計算式
```text
HP_IV / 2 + STR_IV + SPR_IV + DEF_IV = 40
progress = f32(f32(level - 1) * 0.0102040814235806465)
delta = f32(IV + BaseB - BaseA)
product = f32(delta * progress)
growth = f32(f32(BaseA) + product)
raw = clamp(trunc(growth), 1, 999)
displayed = max(1, raw + equipment)
```

通常の妖怪はHP IVが0〜80の偶数、他のIVは0〜40の整数です。
すばやさIV、YW2の性格EV、YW3のアゲランク・スポーツクラブは存在しません。
装備はゲーム内表示ステータスの補正値を入力します。
ボス戦用のステータスと育成可能な妖怪の能力値は別方式であり、本ツールではボス用の数万HPの行を扱いません。

レベル1ではIVの差がステータスに反映されないため一意に特定できません。
評価プロフィールはIVの重みづけによる**表示順**であり、各候補の発生確率や火力を保証しません。
一部の入手経路には固定IV（20/10/10/10）が存在しますが、逆算ではランダム40回抽選と固定付与の両方で成立する組み合わせを表示します。

## 実行
```sh
npm ci
npm run dev
npm test
npm run build
npm run build:mcp
```

MCPサーバー: `node dist-mcp/server.mjs` （`/mcp`、`/healthz`、PORT既定3001）
Docker Web: `docker build -t ywb-iv-calculator .`
Docker MCP: `docker build -f Dockerfile.mcp -t ywb-iv-calculator-mcp .`

## 種族値データの更新
```sh
npm run sync:yokai
```

サイトのレイアウト変更時には必ず件数と検算テストを確認してください。通常ビルドはネットワークに依存しないよう429件を同梱しています。

## 出典
- [とげにゃんWeb 月兎組種族値一覧](https://togenyanweb.appspot.com/Yokai/ywb/yokaiList_getto.html)
- [とげにゃんWeb 個体値仕様](https://togenyanweb.appspot.com/Yokai/)
- [Blasters stat guide — float32計算順序](https://yokaiwatch.github.io/characters/stat-guide-blasters.html)

本リポジトリは上記資料に基づく実装であり、**独自のゲーム実行コード解析を行ったとは主張しません**。
本プロジェクトはゲーム公式アセット・ROM・実行コードを含みません。

## ライセンス
独自コード MIT。外部種族値の出典と注意は `THIRD_PARTY_NOTICES.md` を参照。
