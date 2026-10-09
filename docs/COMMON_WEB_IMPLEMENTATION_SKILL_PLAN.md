# Common Web Implementation Skill 作成準備

## 1. 目的

確定したサイト設計を、構造、表示、操作、レスポンシブ、アクセシビリティ、公開品質が揃ったWebサイトへ実装する共通Skillを作成する。

新Skillは実装フェーズに集中し、企画から公開までの全体基準は既存の`common-web-design`が担う。

---

## 2. 推奨するSkill定義

| 項目 | 推奨値 |
| --- | --- |
| Skill名 | `common-web-implementation` |
| 初期対象 | HTML5 / CSS3 / Vanilla JavaScriptの静的または小規模Multi-page Site |
| 標準作成先 | `~/.codex/skills/common-web-implementation/` |
| 主な役割 | Design Handoffから実装、検証、公開前QAまでの技術的手順を安定化する |
| 併用Skill | 企画、情報設計、デザイン判断は`common-web-design`を併用する |

### Skill名の理由

- `common-web-design`との関係が分かりやすい。
- 特定Framework名を含まず、実装手段の変更に対応できる。
- 実装、改修、レスポンシブ対応、アクセシビリティ修正、QAの発火条件を説明できる。

---

## 3. 責務の境界

### `common-web-design`の責務

- Target、User Problem、Business Goal、CV、Brand Conceptを定義する。
- Sitemap、Information Architecture、Copy、Wireframe、Visual Designを決める。
- Pencil / Figma正本、画像素材、Screen Map、Page / State Inventoryを整える。
- ブランドと制作全体の品質基準を管理する。

### `common-web-implementation`の責務

- 正本デザイン、案件文書、現在の実装を照合し、着手可能性を判定する。
- Page / State / Route / Asset / Component / Interactionを実装単位へ変換する。
- Semantic HTML、CSS Architecture、JavaScriptの責務、レスポンシブ方針を決める。
- 共通UIから実装し、ページ固有UIへ展開する。
- Mouse / Keyboard / Touch、Focus、Error / Empty / Confirm / Completeなどの状態を実装する。
- 代表幅とBreakpoint前後を実機相当で検証し、実装と正本の差を修正する。
- Broken Link、Missing Asset、Console Error、Metadata、Production URLを確認する。

### 新Skillに入れない内容

- 特定案件のブランド名、カラー、コピー、ページ名、座標、ファイルパス。
- ATELだけのJob / Personデータ、Pencil生成スクリプト、手動調整値。
- Framework固有の細かい作法。必要になった時点で別Referenceまたは別Skillとして追加する。
- デザインの根本的な作り直し。実装中に発見した場合は、勝手に変えず差分と影響を報告する。

---

## 4. 想定する使用例

1. 「確定したPencil / FigmaのHOMEをHTML / CSS / JavaScriptで実装して」
2. 「下層ページを共通Header、Footer、Buttonを使って実装して」
3. 「SPメニュー、Dialog、Filter、FormをKeyboardとTouchに対応させて」
4. 「375pxから1440pxで表示確認し、デザイン差分を修正して」
5. 「既存サイトのコンポーネントを再利用し、指定セクションだけ改修して」
6. 「公開前にLink、Asset、Console、Metadata、操作性をQAして」

### 発火させない例

- 参考サイトのデザイン分析のみ。
- Logo、写真、Illustrationの制作のみ。
- SitemapやWireframeの作成のみ。
- 実装を変更しないコードレビューのみ。

---

## 5. Skillが実行する標準フロー

### Phase 1: Implementation Intake

1. ユーザーの最新指示、`AGENTS.md`、案件文書、正本デザイン、既存実装の順で確認する。
2. 使用技術、ページ、Route、State、Breakpoint、Asset、Font、Form送信先、Hostingを整理する。
3. 未確定項目を「実装を止める」と「後で置き換えられる」に分ける。
4. デザイン正本による手動調整と、実装中に変えてはいけない項目を記録する。

### Phase 2: Architecture

1. 共通Layout、Component、Page CSS / JavaScript、Data、Assetの責務を分ける。
2. 内容をHTMLに置き、JavaScriptは開閉、絞り込み、同期、Validation、補助演出だけを担当する。
3. CSS Token、Base、Layout、Component、Page Section、Utility、Responsiveの責務を明確にする。
4. URL Parameter、Filter、Dialog、Formなど、再訪問や直接参照が必要な状態のURL同期を決める。

### Phase 3: Foundation

1. Token、Reset、Base Typography、Container、Skip Link、Focus Styleを作る。
2. Header、Navigation、Mobile Menu、Footer、Button、Text Linkなど共通UIを作る。
3. 共通UIは1ページ目でDesktop / Mobileと全状態を確定してから横展開する。
4. 画像に`width` / `height`または`aspect-ratio`を与え、大きな画像に`srcset` / `sizes`を設定する。

### Phase 4: Page and State Implementation

1. 対象ページを上から順に実装し、各SectionでDesktop / Mobileの差を確認する。
2. Empty、Selected、Open、Error、Confirm、Complete、Disabledなど設計済み状態を実装する。
3. Native HTMLで実現できる意味と操作を優先し、ARIAは不足分の補足に限定する。
4. 同じ処理が3か所以上で必要になってからUtilityへ抽出する。

### Phase 5: Continuous Verification

1. 大きな変更ごとに構文、Missing Asset、Console Errorを確認する。
2. 代表幅だけでなくBreakpoint前後のText Wrap、Crop、Overflowを確認する。
3. Mouse、Keyboard、Touch相当でNavigation、Menu、Dialog、Filter、Formを操作する。
4. デザイン差分はスクリーンショットまたはRenderを比較し、共通原因かSection固有原因から修正する。

### Phase 6: Release Gate

1. 全Route、直接アクセス、無効Parameter、404、相対パスを確認する。
2. `title`、`description`、favicon、canonical、OGPを公開環境に合わせる。
3. Lighthouse等の自動検査だけで完了とせず、実際の操作と視覚を確認する。
4. 未確認のBrowser、端末、Form送信、外部Serviceがあれば報告する。

---

## 6. 予定するSkill構成

```text
common-web-implementation/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── implementation-intake.md
│   ├── html-css-architecture.md
│   ├── interaction-accessibility.md
│   └── responsive-release-qa.md
└── scripts/
    └── audit-static-site.mjs
```

### `SKILL.md`

- Frontmatterは`name`と`description`だけにする。
- 本文は責務の境界、記載順序、実装フロー、Referenceの読み分け、完了条件に絞る。
- 500行未満を維持し、詳細チェックは`references/`へ分離する。
- 命令形または不定詞形で書く。

### References

- `implementation-intake.md`：正本、Page / State、Route、Asset、Font、Hosting、未確定項目の確認。
- `html-css-architecture.md`：Semantic HTML、CSS責務、Token、Component、Responsive、Asset Path。
- `interaction-accessibility.md`：Menu、Dialog、Filter、Form、Focus、Keyboard、ARIA、Reduced Motion。
- `responsive-release-qa.md`：代表幅、Breakpoint前後、Visual QA、Link / Asset / Console / Metadata / Production QA。

### Script

`audit-static-site.mjs`は静的HTMLを対象に、次を機械的に検査する。

- `lang`、`title`、`description`、`h1`の存在。
- `img` / `source` / `script` / `link`のLocal Path。
- `img` の`alt`、原則として`width` / `height`または明示的な代替方針。
- ページ内ID重複、Fragment Link、明らかな空Link。
- ファイルごとのError / Warningと終了Code。

Browser上のLayout、Interaction、Console、Accessibilityはスクリプトだけで完了とせず、別途実操作で確認する。

### Assets

v1では汎用Starter Templateを同梱しない。ブランド、構成、使用技術を上書きしやすく、未使用ファイルを増やすためである。複数案件で同じBoilerplateが有効と確認できた場合のみ、`assets/`へ追加する。

---

## 7. Frontmatter / UI Metadataの原案

### `SKILL.md`

```yaml
---
name: common-web-implementation
description: 確定済みのWebデザインや既存サイトを、HTML / CSS / JavaScriptを中心に実装、改修、レスポンシブ対応、アクセシビリティ対応、検証、公開前QAする。Pencil / Figma / 画像 / 仕様書からの実装、共通Component、Mobile Menu、Dialog、Filter、Form、URL状態、複数ページ、既存UIの改修、Visual QA、Broken Link / Missing Asset / Console / Metadata / Production確認を扱う場合に使用する。企画、情報設計、ブランド、ワイヤーフレーム、Visual Designの決定はcommon-web-designを優先する。
---
```

### `agents/openai.yaml`

```yaml
interface:
  display_name: "Common Web Implementation"
  short_description: "確定デザインを実装し、レスポンシブと操作を検証"
  default_prompt: "Use $common-web-implementation to implement the approved website design and verify its responsive and interactive behavior."
```

Icon、Brand Color、MCP Dependencyは現時点で必要がないため設定しない。

---

## 8. 作成時の手順

1. 作成先を`~/.codex/skills`でよいか確認する。
2. `skill-creator/scripts/init_skill.py`を使い、`scripts,references`付きで初期化する。
3. Referenceを先に作り、その内容を参照する短い`SKILL.md`を作る。
4. `audit-static-site.mjs`を作り、正常例と異常例で動作確認する。
5. `quick_validate.py`でSkill構造を検証する。現在のPython環境にはPyYAMLがないため、実作成時に一時環境へPyYAMLを用意して実行する。Skill本体へ依存ファイルは同梱しない。
6. ATELのHOME実装を最初の実利用テストとし、不足や過剰な指示を調整する。
7. 実装が進んだ後、別の小規模サイトでも再利用し、ATEL固有知識に依存していないか確認する。

---

## 9. 作成完了条件

- `common-web-design`との責務が重複しすぎず、併用順序が明確である。
- ATEL名、ATELの色、固有ページ、固有パスがSkill本体へ入っていない。
- `SKILL.md`が500行未満で、詳細がReferenceへ適切に分離されている。
- `agents/openai.yaml`がSkillの最新内容と一致している。
- `audit-static-site.mjs`がテスト済みで、検出内容と検出できない内容が分かる。
- `quick_validate.py`が成功する。
- 実案件で一度使用し、結果をもとに修正している。

---

## 10. 現時点の推奨決定

- v1はHTML / CSS / Vanilla JavaScriptを標準とする。
- 既存案件がReact / Vue / Next.js等を使っている場合は、その構成を尊重して汎用原則だけを適用する。Framework固有Referenceはまだ作らない。
- テンプレートで見た目を固定せず、実装順序、責務分離、状態、検証の再現性をSkillの主価値とする。
- 作成先の指定がなければ`~/.codex/skills`を提案する。

---

## 11. 作成結果

- 2026-10-09に`/Users/natsumikato/.codex/skills/common-web-implementation/`へ作成済み。
- `SKILL.md`、`agents/openai.yaml`、4つのReference、`audit-static-site.mjs`を収録している。
- `quick_validate.py`の公式構造検証に合格済み。
- 静的サイト監査は正常FixtureでError 0、不備FixtureでErrorを検出することを確認済み。
- ATELの実装工程を初回の実利用とし、得られた汎用的な学びだけを後続更新候補にする。
