# ATEL 実装仕様

## 1. 文書の目的

本書は、Pencil正本`design/wireframes/ATEL_HOME_DESIGN.pen`と番号付き資料を、HTML / CSS / Vanilla JavaScriptへ実装するための構造と操作仕様に変換したものである。

実装は次の優先順位で確認する。

1. ユーザーの最新指示
2. `AGENTS.md`
3. Pencil正本
4. `docs/01_SITE_STRUCTURE.md`
5. `docs/02_DESIGN_RULES.md`
6. 本書

---

## 2. 技術と実装方針

- HTML5 / CSS3 / Vanilla JavaScriptで実装する。
- ビルド処理を必須とせず、静的ホスティングで公開できる構成とする。
- Framework、UI Library、Animation Libraryは、同等の体験を標準APIで実装できない場合だけ検討する。
- 重要な内容と導線はJavaScript無効時でも読めるHTMLとし、JavaScriptは開閉、絞り込み、状態切替、演出を担当する。
- 全ページで`lang="ja"`を使用し、英語見出しを使う場合も操作、条件、Error、Confirm、Completeは日本語で理解できるようにする。

---

## 3. URLとページ構成

| Page | File | Query | 主要な役割 |
| --- | --- | --- | --- |
| HOME | `index.html` | なし | 会社、仕事、人の全体像 |
| PEOPLE | `pages/people.html` | `person` 任意 | 人物一覧とInterview Dialog |
| JOBS | `pages/jobs.html` | Filterは必要に応じてURL同期 | 募集職種の絞り込み |
| JOB DETAIL | `pages/job-detail.html` | `job={slug}` | 8職種を1つのTemplateで表示 |
| ENTRY | `pages/entry.html` | `job={slug}` | Input / Confirm / Complete |

### Query Parameter

- `job`はJOBS、JOB DETAIL、ENTRYで同じslugを使う。
- 初期実装の正式slugは`docs/01_SITE_STRUCTURE.md`の8職種とする。
- 無効な`job`は自動で別職種へ置き換えず、JOBSに戻る案内を表示する。
- JOB DETAILのENTRY Linkは同じ`job`を引き継ぐ。ENTRYで職種を変更した場合はURLも同期する。
- `person`を使う場合はDialogの直接参照を可能にし、閉じたときにURLとFocusを元に戻す。

---

## 4. 実装ファイル構成

```text
ATEL/
├── index.html
├── pages/
│   ├── people.html
│   ├── jobs.html
│   ├── job-detail.html
│   └── entry.html
├── assets/
│   ├── css/
│   │   ├── common.css
│   │   ├── index.css
│   │   └── pages/
│   │       ├── people.css
│   │       ├── jobs.css
│   │       ├── job-detail.css
│   │       └── entry.css
│   ├── js/
│   │   ├── main.js
│   │   ├── data.js
│   │   └── pages/
│   │       ├── people.js
│   │       ├── jobs.js
│   │       ├── job-detail.js
│   │       └── entry.js
│   ├── brand/
│   └── images/
└── docs/
```

- ページ固有CSS / JavaScriptは実際に固有処理がある場合だけ作る。
- `data.js`は募集職種と人物の表示データを担当し、DOM操作を含めない。
- 静的HTMLからの相対パスは、ルートと`pages/`で異なることをQAする。

---

## 5. CSS Architecture

`assets/css/common.css`の責務は以下とする。

1. Color / Font / Spacing / Radius / Motion / Z-index Token
2. Reset / Base / Typography
3. Layout Container / Grid / Section Heading
4. Header / Mobile Menu / Footer
5. Button / Text Link / Card / Filter / Dialog / Form
6. Accessibility Utility / Reveal State

### Breakpoint

| Name | Width | 用途 |
| --- | ---: | --- |
| Base | `0px` | 4 Column / Mobile Navigation |
| `md` | `768px` | 8 Column / 2 Column Card |
| `lg` | `1024px` | 12 Column / Desktop Navigation |
| `xl` | `1280px` | Wide Spacing / Editorial Overlap |

- CSSはMobile Firstを基本とする。
- Section固有の大きな位置調整を`common.css`へ置かない。
- `!important`はUtilityの責務が明確な場合を除き使用しない。
- Button内のLabelはFlexまたはGridで視覚的に中央配置し、固定`top`で合わせない。

---

## 6. 共通コンポーネント

### Header / Mobile Menu

- Desktop HeaderはLogo、PEOPLE、JOBS、ENTRYを表示する。
- Mobile Headerは64px、Menu Buttonは44px以上とする。
- Mobile Menuは`dialog`または同等のModal構造で全画面表示し、`aria-expanded`、`aria-controls`、`Esc`、Focus Trap、Focus Return、背景Scroll停止に対応する。
- 現在ページは`aria-current="page"`と青のIndicatorで示す。
- Mobile Menuのナビゲーション背景は半透明Inkとし、背面のPaintが見える状態を維持する。

### Button / Text Link

- Primary / Secondary / Text Linkの3種とし、同じ役割のスタイルをページごとに作り直さない。
- Hoverだけでなく`:focus-visible`とTouchでも操作と情報を確認できるようにする。
- Sticky Entry CTAはJOB DETAIL Desktopだけで使用し、MobileではSection内CTAへ置き換える。

### Card / Department

- DepartmentはText LabelとAccent Colorを常に併記する。
- DESIGNはBlue、PLANNINGはOrange、PROJECTはRed、CONSTRUCTIONはGreen、BUSINESS / CORPORATEはInk / Grayを使用する。
- Card全体がLinkの場合は、中に別の主要Linkを入れ子にしない。

### Dialog

- PEOPLE Interviewは`dialog`を第一候補とする。
- Desktopは最大960px、MobileはFull Screenとする。
- Close Button、`Esc`、Backdrop操作を実装し、閉じた後は開いたEmployee CardへFocusを戻す。

### Form

- LabelはInputの外に常時表示する。
- ErrorはColorだけでなく文章で示し、`aria-describedby`でFieldと結ぶ。
- 送信時はError SummaryをForm先頭に表示し、最初のErrorへFocusを移す。
- ConfirmからInputへ戻っても入力値と選択職種を保持する。
- BackendなしのPortfolio DemoであることをForm付近とComplete画面で明記する。

---

## 7. JavaScriptの責務

| File | Responsibility |
| --- | --- |
| `main.js` | Mobile Menu、Header Scroll State、Reveal、共通Focus処理 |
| `data.js` | Job / Personデータと関連付け |
| `people.js` | People Filter、Interview Dialog、URL / Focus同期 |
| `jobs.js` | AND Filter、件数、Selected Chip、Reset、Empty State |
| `job-detail.js` | `job`slug検証、テンプレートへのデータ反映、ENTRY / Person Link |
| `entry.js` | `job`同期、Validation、Input / Confirm / Complete、Focus移動 |

- DOM取得失敗時に他ページのJavaScriptまで停止させない。
- カスタムイベントや共通Utilityは、同じ処理を3か所以上で必要になった場合に限って導入する。
- MotionはIntersection ObserverとCSS Transitionを基本とし、`prefers-reduced-motion: reduce`で即時表示へ切り替える。

---

## 8. 画像実装

- HTMLからは`assets/`内の正式素材だけを参照する。
- 写真と不透明IllustrationはWebPを優先し、PNG原本を保持する。
- Paint、Cut-out Person、Polaroid Frame、Organic MaskはAlphaを保持したPNGを使用する。
- Heroと大きな写真は`srcset`と`sizes`を設定し、MobileでDesktop用の大容量画像を読ませない。
- Hero以外の画像は原則`loading="lazy" decoding="async"`を使用する。
- 写真と人物は`width`と`height`または`aspect-ratio`を与え、Layout Shiftを抑える。
- Paintは装飾画像として`alt=""`、人物・工程・完成空間は内容が分かる日本語`alt`を使用する。

---

## 9. Accessibility / SEO

- ページごとに`h1`を1つとし、セクション見出しを順序どおりに使用する。
- `header`、`nav`、`main`、`footer`を使い、Skip Linkを全ページの先頭に置く。
- Pageごとに内容に合った`title`と`description`を設定する。
- canonicalとOGPは公開URL確定後に最終化する。公開前に仮URLを残さない。
- Focus Indicatorは常に表示でき、通常文字4.5:1、大きな文字3:1以上のContrastを確認する。

---

## 10. 実装順序

1. Token / Reset / Typography / Container
2. Header / Mobile Menu / Footer / Button / Text Link
3. HOME Desktop / Mobile
4. Job / Person Data
5. PEOPLE + Interview Dialog
6. JOBS + Filtered / Empty State
7. JOB DETAIL + Query Parameter + Sticky CTA
8. ENTRY Input / Error / Confirm / Complete
9. Metadata / OGP / Favicon
10. Responsive / Accessibility / Production QA

共通UIをHOMEで確定してから下層ページへ展開する。

---

## 11. 実装開始前のGate

- Pencil正本とScreen Mapの対象画面が揃っている。
- COMMON / Mobile / Menu Openを含め、共通UIの開閉状態が確認できる。
- 実装に使用する正式素材が`assets/`内にある。
- デザインの手動調整値がPencil正本へ保存されている。
- フォント、公開URL、実送信先など未確定の項目を、実装を妨げる項目と後から確定できる項目に分けている。

### 現時点の前提

- FontはSpace Grotesk / Noto Sans JPを使用する。外部配信を使用する場合はPrivacy / Performanceを考慮する。
- ENTRYはポートフォリオ用Demoとし、実在の個人情報を送信しない。
- HostingはGitHub Pages、公開URLは`https://coconattsu0723.github.io/atel-recruiting-site/`とする。

---

## 12. 実装進捗（2026-10-10）

### 完了

- `index.html`へHOMEの全Sectionを実装した。
- `assets/css/common.css`へToken、Base、Header、Mobile Menu、Button、Revealを実装した。
- `assets/css/index.css`へHOME固有のDesktop / Mobile Layoutを実装した。
- `assets/js/main.js`へHeader State、Mobile Menu、Focus Trap、Scroll Lock、Revealを実装した。
- `assets/js/home.js`へPROFESSIONSのActive切替を実装した。
- SP HeroはPencil正本の`Mobile Hero Photo / Angled Crop`に合わせ、写真面を斜めにし、青背景が上下に見える構成とした。
- PC HeroはBlue Paintを写真の外側へ置き、写真を覆わず十分見える位置にした。
- COMMON Mobile Menuは半透明InkのNavigation背景とし、背面のPaintが見える状態にした。
- 共通FooterをDesktop / Mobileへ実装し、HOMEと下層ページで同じComponent構造を使用できるようにした。
- `assets/js/data.js`へ8職種と6名の人物、関連職種、Interview本文を定義した。
- `pages/people.html`へPEOPLEのHero、Intro、Filter、People Grid、Job Connection、Final CTAを実装した。
- PEOPLEの職種Filter、結果件数、Interview Dialog、Backdrop / Esc / Close操作、Focus Return、`person` URL状態を実装した。
- `pages/jobs.html`へJOBSのHero、Filter、8職種一覧、Recruit Message、Final CTAを実装した。
- JOBSのDepartment / Career Type / LocationによるAND Filter、結果件数、選択中条件、Reset、Filtered / Empty Stateを実装した。
- JOBS Filterは`department` / `career` / `location`のQuery ParameterとBack / Forwardを同期し、無効値は選択状態へ採用しない。
- `assets/js/data.js`の募集区分と勤務地をPencil正本へ揃え、職種番号とカード説明文を追加した。
- Mobile Menu内の同一ページAnchor LinkでもMenuが閉じ、Scroll Lockと`aria-expanded`が残らないよう共通処理を更新した。
- `pages/job-detail.html`へRole Summary、Responsibilities、Project、Workflow、Team、Person Profile、Requirements、Selection Process、関連社員、Entry CTAを実装した。
- `assets/js/data.js`へ8職種分のJOB DETAIL本文、担当範囲、Workflow、関連職種、人物像、応募条件を追加した。
- JOB DETAILは`job` Query Parameterから職種を安全に選択し、Title / Description、Department Color、関連社員、ENTRYの`job`引き継ぎを切り替える。未指定・無効値は専用のNot Found表示とする。
- DesktopのSticky Entry CTAと、Mobileを含む各SectionのResponsive Layoutを実装した。
- `pages/entry.html`へ応募職種、応募区分、基本情報、経歴、書類、志望動機、同意事項の入力Formを実装した。
- `assets/js/pages/entry.js`へ`job` Query Parameter同期、職種ごとの応募区分制御、Validation、Error Summary、INPUT / CONFIRM / COMPLETE切替、修正時の入力保持、文字数表示、添付ファイル名・削除表示を実装した。
- ENTRYは実送信を行わないPortfolio Demoとし、INPUT・CONFIRM・COMPLETEの各状態でその旨を明示した。
- ENTRYの部門Accent、選択職種、応募区分、勤務地をHero、Complete、Footerへ同期した。
- 全5ページへSVG Favicon、Theme Color、ページ固有の基本OGP、Twitter Cardを設定した。
- JOB DETAILの動的Title / Descriptionと`og:title` / `og:description`を職種・Not Found状態へ同期した。
- HOMEの装飾Paint、人物Cut-out、Polaroid Frameを含む全画像へ原寸の`width` / `height`を設定した。
- 最新の画面調整として、HOME HeroとMESSAGE Sectionの背景用縦Grid LineをDesktop / Mobileともに削除した。
- 公開後に旧HOME用CSSがブラウザキャッシュへ残るケースを避けるため、`index.css`の参照URLへ更新識別子を付与した。
- `npm run build`で`index.html`、`pages/`、実際に参照される`assets/`、`robots.txt`、`sitemap.xml`だけを`dist/`へ出力する公開用Buildを追加した。
- 公開用Buildは`localhost`、`file://`、`design/source-images`、`design/references`の参照を検出した場合に停止する。
- 未使用Assetと`.DS_Store`を公開用出力から除外し、デザイン資料を含む743MBの作業フォルダから57.1MB / 66 Fileの公開用出力へ分離した。
- 全ページのcanonical、`og:url`、`og:image`、`sitemap.xml`、`robots.txt`を確定URLへ揃えた。
- GitHub Actionsから`dist/`をGitHub Pagesへ公開し、公開後のCache対策を含めて確認した。
- `README.md`と`docs/06_PORTFOLIO_CASE_STUDY.md`へ制作記録、掲載用コピー、代表画面を整理した。

### 確認済み

- 375 / 390 / 768 / 1024 / 1366 / 1440pxで横方向のOverflowがない。
- HOMEで参照する画像、CSS、JavaScriptはすべて正常に読み込まれる。
- Mobile Menuの開閉、`aria-expanded`、Scroll Lockが同期する。
- PROFESSIONSの選択状態と`aria-pressed`が同期する。
- JOBS FilterのMouse / Touch相当Click、Keyboard Space操作、`aria-pressed`、件数、Selected Chip、Resetが同期する。
- JOBSの`DESIGN + NEW GRADUATE + TOKYO`で2件、`CONSTRUCTION + NEW GRADUATE + OSAKA`で0件となり、Pencil正本のFiltered / Empty Stateと一致する。
- JOBSのFilter URL状態がReload、Back / Forwardで復元される。
- JOBSの画像、CSS、JavaScriptは正常に読み込まれ、Console Errorはない。
- JOB DETAILの8職種すべてで直接アクセス、職種別本文、Department Color、関連社員Link、ENTRYへの`job`引き継ぎが同期する。
- JOB DETAILの未指定・無効な`job`はNot Found表示となり、JOBS一覧へ戻れる。
- JOB DETAILは375 / 390 / 768 / 1024 / 1366 / 1440pxで横方向のOverflowがなく、DesktopのみSticky Entry CTAが表示される。
- JOB DETAILのMobile Menuは開閉、Esc、Focus Returnが動作し、Console Errorはない。
- ENTRYの8職種すべてで`job`直接アクセス、選択職種、応募可能区分、Department Colorが同期する。
- ENTRYの未指定`job`は職種選択を促し、無効な`job`は自動置換せず案内を表示する。
- ENTRYの必須Validation、個別Error、Error Summary、先頭ErrorへのFocus移動が動作する。
- ENTRYのCONFIRMからINPUTへ戻った際に入力値が保持され、各「修正」操作は対応FieldへFocusを移す。
- ENTRYのDemo送信でCOMPLETEへ遷移し、実際の外部送信は発生しない。
- ENTRYは375 / 390 / 768 / 1024 / 1366 / 1440pxで横方向のOverflowがなく、FormはMobile 1列 / 768px以上2列へ切り替わる。
- ENTRYのRadio / CheckboxのKeyboard操作、Mobile MenuのEsc・Focus Returnが動作し、Console Errorはない。
- 全5ページを375 / 390 / 768 / 1024 / 1366 / 1440pxで横断確認し、横方向のOverflow、見出し数、Navigation切替、画像欠損がないことを確認した。
- HOME → PEOPLE → JOB DETAIL → ENTRYの導線、PEOPLE Dialog、JOBSのFiltered / Empty / Reset、無効Query、ENTRYのError / CONFIRM / COMPLETEを実操作で確認した。
- 遅延読み込み画像は各ページ下部まで表示し、HOME 42件、JOBS 8件、JOB DETAIL 12件がすべて読み込まれることを確認した。
- Browser ConsoleにWarning / Errorはなく、ローカル配信時のMissing Asset / 404もない。
- Static Site Auditは全5 HTMLで0 Error / 0 Warning。JavaScript全Fileの構文Checkも通過した。
- `dist/`単体でも全5 Routeを390 / 1440pxで確認し、横方向のOverflow、見出し、Dialog、Filter、職種引き継ぎ、Missing Asset、Console Errorがない。
- Button LabelはFlexで中央配置される。

### 現在地

- 実装、公開、Production QA、Portfolio Documentationまで完了している。
- 今後はユーザー指示に応じて保守・改善を行い、変更時は実装、正本デザイン、番号付き資料を同期する。
