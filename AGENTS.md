# ATEL Project Instructions

## Project

ATELは、店舗・商業空間の設計、デザイン、施工会社を想定した架空の採用・キャリアサイトである。

- Site Type：Multi-page Recruiting Site
- Primary CV：ENTRYフォームの送信完了
- Pages：HOME / PEOPLE / JOBS / JOB DETAIL / ENTRY
- Concept：`BEHIND THE SPACE`
- Key Message：`SPACE IS NEVER MADE ALONE.`

## Required Reading

作業前に、対象範囲に応じて以下を確認する。

1. `docs/00_PROJECT_BRIEF.md`
2. `docs/01_SITE_STRUCTURE.md`
3. `docs/02_DESIGN_RULES.md`
4. `docs/03_IMAGE_ASSETS.md`
5. `docs/04_IMPLEMENTATION_NOTES.md`
6. 公開作業では`docs/05_RELEASE_CHECKLIST.md`

仕様が矛盾する場合は、ユーザーの最新指示、`AGENTS.md`、番号順の正本資料を優先する。

## Current Phase

企画、情報設計、デザインルール、主要画像素材と全ページのDesktop / Mobile画面設計が完了している。Pencil正本にはHOME、PEOPLE、Interview Dialog、JOBSの通常 / Filtered / Empty、JOB DETAIL、ENTRYのINPUT / CONFIRM / COMPLETE、Screen Map、Mobile Menu Open Stateを収録済み。HTML / CSS / Vanilla JavaScript実装は全ページ、共通UI、URL状態、Form状態まで完了し、375 / 390 / 768 / 1024 / 1366 / 1440pxの横断QA、内部Link、画像、Console、Metadataのローカル確認も完了している。Faviconと公開URLに依存しない基本OGPは設定済み。`npm run build`で公開対象だけを`dist/`へ出力でき、公開用出力単体のQAも完了している。次工程はHostingと公開URLを確定し、canonical、`og:url`、`og:image`、sitemapを最終化してProduction環境で確認する。

Pencilの現在の正本は`design/wireframes/ATEL_HOME_DESIGN.pen`とする。旧版は`design/wireframes/archive/ATEL_HOME_WIREFRAME_legacy.pen`へ移動済みであり、通常作業では参照・編集しない。

生成スクリプトから正本を更新する場合は、Penの自動保存による上書きを防ぐため、先にPenを終了してから生成し、更新完了後に正本を開き直す。HOMEの再生成は`design/wireframes/generate-atel-home-wireframe.mjs`、PEOPLE画面は`design/wireframes/generate-atel-people-design.mjs`、JOBS基本画面は`design/wireframes/generate-atel-jobs-design.mjs`、JOBS状態画面は`design/wireframes/generate-atel-jobs-states.mjs`、JOB DETAILは`design/wireframes/generate-atel-job-detail-design.mjs`、ENTRYは`design/wireframes/generate-atel-entry-design.mjs`、Screen Mapは`design/wireframes/generate-atel-screen-map.mjs`、Mobile Menuは`design/wireframes/generate-atel-mobile-menu.mjs`の順に実行し、最後に`design/wireframes/normalize-atel-button-labels.mjs`で全画面のButton / Filterラベルを視覚的中央へ統一する。

## Implementation Direction

- HTML5 / CSS3 / Vanilla JavaScriptを基本とする。
- 明確な必要性がないFrameworkやLibraryを追加しない。
- HOMEはルートの`index.html`、下層ページは`pages/`へ配置する。
- 共通CSSは`assets/css/common.css`、HOME固有CSSは`assets/css/index.css`を基本とする。
- 共通JavaScriptは`assets/js/main.js`、ページ固有処理は必要な場合だけ分割する。
- JOBS Filter、Interview Dialog、ENTRYの状態切替はKeyboardとTouchの両方へ対応する。

## Asset Rules

- Webから参照する正式素材は`assets/`内だけを使用する。
- `design/source-images/`は生成元データ、`design/references/`は参考資料であり、公開画面から直接参照しない。
- HOME写真の正式参照先は`assets/images/home/`とする。
- 写真は実装時に適切な表示サイズのWebPまたはAVIFを用意し、PNG原本を保持する。
- Paint、Frame、Mask、Cut-out Personの透過を維持する。
- 画像フレームはRectangle / Circle / Polaroid / Organic Maskの4種類に限定する。

## Design Constraints

- Base ColorはOff White `#F4F1EA`とInk `#171717`を中心とする。
- Department Colorは`docs/02_DESIGN_RULES.md`の正式値を使用する。
- Typography、Grid、Spacing、Component、Motionは`docs/02_DESIGN_RULES.md`に従う。
- Person → Job、Job → Personの双方向導線を維持する。
- 装飾やMotionは情報理解と採用導線を妨げない範囲で使用する。

## QA

- 375 / 390 / 768 / 1024 / 1366 / 1440pxを確認する。
- Horizontal Scroll、画像Crop、Text Wrap、Focus、Keyboard操作を確認する。
- Broken Link、Missing Image、Console Errorを残さない。
- 装飾画像は空の`alt`、内容画像は具体的な`alt`を設定する。
- Motionは`prefers-reduced-motion`へ対応する。
- 文書と画面仕様が変わった場合は正本資料も更新する。
