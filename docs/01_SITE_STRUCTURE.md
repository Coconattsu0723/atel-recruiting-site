# ATEL サイト構成・情報設計

## 1. 文書の目的

本書は、ATEL採用・キャリアサイトのページ構成、各ページの役割、セクション順序、主要導線、インタラクションを定義する。

デザイン、コピー制作、HTML構造、JavaScript実装は本書を基準とし、変更が生じた場合は画面と本書を一致させる。

---

## 2. サイトの目的とCV

### Business Goal

ATELの職種と働く人を具体的に伝え、求職者が自分に合う仕事を見つけて応募できる状態をつくる。

### User Goal

- どのような職種があるか理解する
- 職種同士の関係を理解する
- 実際に働く人と仕事の進め方を知る
- 自分に合う募集条件を探す
- 不安なく応募手続きを完了する

### Conversion

| 種別 | 行動 |
| --- | --- |
| Primary CV | ENTRYフォームの送信完了 |
| Secondary CV | JOBSの閲覧、Job Detailの閲覧 |
| Supporting Action | PEOPLE Interviewの閲覧、関連職種への遷移 |

---

## 3. サイトマップ

```text
HOME
├── PEOPLE
│   └── Interview Dialog
├── JOBS
│   └── JOB DETAIL（職種パラメータで内容を切り替える）
└── ENTRY（応募職種パラメータを引き継ぐ）
```

### ページと想定ファイル

| ページ | ファイル | 役割 |
| --- | --- | --- |
| HOME | `index.html` | 会社・仕事・人の全体像を伝える |
| PEOPLE | `pages/people.html` | 社員から仕事を理解する |
| JOBS | `pages/jobs.html` | 条件から自分に合う職種を探す |
| JOB DETAIL | `pages/job-detail.html?job={slug}` | 仕事内容と応募条件を理解する |
| ENTRY | `pages/entry.html?job={slug}` | 応募情報を入力・確認・完了する |

---

## 4. グローバルナビゲーション

### Header

1. ATEL Logo：HOMEへ戻る
2. PEOPLE
3. JOBS
4. ENTRY：Primary CTA
5. Mobile Menu Button

### Footer

- Logo / Key Message
- HOME
- PEOPLE
- JOBS
- ENTRY
- NEW GRADUATE
- CAREER
- Fictional Project Note
- Copyright

### Navigation Rule

- Desktopでは主要リンクとENTRYを常時表示する。
- MobileではMenu Buttonから全画面メニューを開く。
- 現在地を視覚的に示す。
- ENTRYはHeader、Job Detail末尾、Final CTAの3箇所で強く提示する。

---

## 5. 基本ユーザーフロー

### Main Flow

```text
HOME → PEOPLE → JOBS → JOB DETAIL → ENTRY
```

### Job-first Flow

```text
HOME → JOBS → Filter → JOB DETAIL → ENTRY
```

### Person-first Flow

```text
HOME → PEOPLE → Interview → Related Job → JOB DETAIL → ENTRY
```

### Direct Entry Flow

```text
Header ENTRY → ENTRY → 希望職種を選択 → 入力 → 確認 → 完了
```

---

## 6. HOME

### 6.1 Page Goal

完成した空間だけでなく、その裏側にいる人と仕事を短時間で理解させ、PEOPLEまたはJOBSへ送る。

### 6.2 Section Structure

| 順序 | セクション | 内容 | 主な導線 |
| ---: | --- | --- | --- |
| 1 | HERO | メインコピー、施工途中のチーム写真、Organic Mask、Paint | SCROLL / VIEW JOBS |
| 2 | MESSAGE | `BEHIND THE SPACE`、採用コンセプト | HOW WE CREATEへ |
| 3 | HOW WE CREATE | `THINK → DESIGN → BUILD → OPEN`の4工程 | 各工程の理解 |
| 4 | PROFESSIONS | 8職種を横断的に紹介 | JOBS / Job Detail |
| 5 | PROJECT × PEOPLE | 架空店舗MADOと関係職種を紹介 | 関連People / Job Detail |
| 6 | PEOPLE | 代表社員のInterview抜粋 | PEOPLE |
| 7 | CULTURE / NUMBERS | 社員数、平均年齢、比率、制度など | PEOPLEまたはJOBS |
| 8 | JOBS | 募集中の代表3職種 | JOBS / Job Detail |
| 9 | FINAL CTA | `MAKE THE NEXT SPACE.` | VIEW JOBS / ENTRY |

### 6.3 HOME Interaction

- Hero：文字とOrganic Mask写真を段階的に表示する。
- HOW WE CREATE：スクロールに合わせて工程と色を順番に切り替える。
- PROFESSIONS：Desktopは横方向のカード体験、Mobileは縦リストとする。
- Profession Card：Hover / Focusで対応するPaint Colorと補助情報を表示する。
- PROJECT × PEOPLE：MADO全景、ディテール、関係職種を同じ領域で結び付ける。
- PEOPLE：PolaroidとCut-out Personを重ね、PEOPLEページへ誘導する。

---

## 7. PEOPLE

### 7.1 Page Goal

社員の経歴、役割、仕事への考え方から、自分がATELで働く姿を想像できるようにする。

### 7.2 Section Structure

| 順序 | セクション | 内容 |
| ---: | --- | --- |
| 1 | HERO | 6名の人物コラージュ、Paint、Circle、Polaroid |
| 2 | INTRO | `THE PEOPLE BEHIND THE SPACE`、短い説明 |
| 3 | FILTER | ALL / DESIGN / PROJECT / CONSTRUCTION / BUSINESS |
| 4 | PEOPLE GRID | 社員カード6件、Filter結果件数 |
| 5 | INTERVIEW DIALOG | 選択した社員のInterview詳細 |
| 6 | JOB CONNECTION | Personから関連職種へ誘導 |
| 7 | FINAL CTA | FIND YOUR ROLE / VIEW JOBS |

### 7.3 Employee Card

各カードに以下を表示する。

- Portrait / Cut-out Person
- Name
- Role
- Department
- Join Year
- NEW GRADUATE / CAREER
- Previous Job または Major
- `READ INTERVIEW`

### 7.4 Interview Dialog

Interviewは別ページを増やさず、同一ページ内のDialogで表示する。

- Employee Profile
- Short Message
- Why ATEL
- Current Work
- Project Episode
- Collaboration with Other Roles
- Advice for Applicants
- Related Job Link

Dialogは`Esc`、Close Button、背景クリックで閉じられるようにし、開閉時のFocus移動を管理する。Mobileでは画面全体を使う読み物パネルとして表示する。

---

## 8. JOBS

### 8.1 Page Goal

複数条件から自分に合う募集職種を絞り込み、Job Detailへ進めるようにする。

### 8.2 Section Structure

| 順序 | セクション | 内容 |
| ---: | --- | --- |
| 1 | HERO | `FIND YOUR ROLE`、ページ説明 |
| 2 | FILTER | Department / Career Type / Location |
| 3 | RESULT SUMMARY | 該当件数、選択中条件、Reset |
| 4 | JOB LIST | 募集職種カード8件 |
| 5 | EMPTY STATE | 条件に一致する職種がない場合の案内 |
| 6 | RECRUIT MESSAGE | 選考・応募に関する補足 |
| 7 | FINAL CTA | PEOPLE / ENTRY |

### 8.3 Filter

| 分類 | 選択肢 |
| --- | --- |
| Department | ALL / DESIGN / PROJECT / CONSTRUCTION / PLANNING / BUSINESS / CORPORATE |
| Career Type | ALL / NEW GRADUATE / CAREER |
| Location | ALL / TOKYO / OSAKA |

Filterは複数条件のAND検索とし、変更時にページ再読込なしで結果、件数、Empty Stateを更新する。選択状態はButtonの見た目だけでなく`aria-pressed`でも伝える。

### 8.4 Job Card

- Department
- Job Title
- Career Type
- Location
- Short Description
- Related Paint Color
- `VIEW ROLE`

### 8.5 Jobs Data

| slug | Job Title | Department |
| --- | --- | --- |
| `interior-designer` | Interior Designer | DESIGN |
| `spatial-designer` | Spatial Designer | DESIGN |
| `graphic-sign-designer` | Graphic / Sign Designer | DESIGN |
| `project-manager` | Project Manager | PROJECT |
| `construction-manager` | Construction Manager | CONSTRUCTION |
| `planner-creative-director` | Planner / Creative Director | PLANNING |
| `account-producer` | Account Producer | BUSINESS |
| `back-office` | Back Office | CORPORATE |

---

## 9. JOB DETAIL

### 9.1 Page Goal

仕事内容、チーム、条件、選考を十分に理解させ、納得感を持ってENTRYへ進める。

### 9.2 Content Switching

`job-detail.html?job={slug}`の`slug`を読み取り、8職種の内容を同一テンプレートへ表示する。該当しないslugの場合はJOBSへ戻る案内を表示する。

### 9.3 Section Structure

| 順序 | セクション | 内容 |
| ---: | --- | --- |
| 1 | JOB HERO | Department、Job Title、Career Type、Location |
| 2 | ROLE SUMMARY | 役割と仕事の価値 |
| 3 | RESPONSIBILITIES | 主な仕事内容 |
| 4 | PROJECT EXAMPLE | MADOでの担当例 |
| 5 | WORKFLOW | 仕事の流れ |
| 6 | TEAM | 関わる職種とチーム構成 |
| 7 | PERSON PROFILE | 求める人物像 |
| 8 | REQUIREMENTS | 必須条件 / 歓迎条件 |
| 9 | CONDITIONS | 勤務地、給与、勤務時間、待遇 |
| 10 | PROCESS | 選考フロー |
| 11 | PEOPLE WHO DO THIS JOB | 関連社員とInterview |
| 12 | ENTRY CTA | 選択職種を引き継いでENTRYへ |

### 9.4 Entry Link

```text
entry.html?job={slug}
```

Desktopでは画面端へ簡潔なSticky Entry CTAを表示できる。Mobileでは本文を妨げないよう固定表示を避け、Section末尾のCTAを基本とする。

---

## 10. ENTRY

### 10.1 Page Goal

入力負荷と迷いを抑え、必要事項を確認したうえで応募完了まで進める。

### 10.2 State Structure

```text
INPUT → CONFIRM → COMPLETE
```

別ページへ分割せず、同一ページ内で状態を切り替える。入力内容はConfirmからInputへ戻っても保持する。

### 10.3 Form Sections

| 順序 | グループ | 項目 |
| ---: | --- | --- |
| 1 | Applying For | 応募職種、NEW GRADUATE / CAREER |
| 2 | Personal Information | 氏名、メールアドレス、電話番号 |
| 3 | Career Information | 現在の所属または前職、経験年数 |
| 4 | Portfolio / Documents | ポートフォリオURL、履歴書添付想定 |
| 5 | Motivation | 志望動機 |
| 6 | Agreement | Privacy Policy同意 |

### 10.4 Form Behavior

- URLの`job`パラメータと応募職種を同期する。
- 必須項目はLabelとエラー文の両方で示す。
- エラー時は先頭のエラーへFocusを移し、上部にError Summaryを表示する。
- 添付はポートフォリオ用デモとして、ファイル名と削除操作までを表現する。
- 実際の外部送信先がない段階では、デモ送信であることを明示する。

### 10.5 Complete State

- 応募受付メッセージ
- 応募職種
- HOMEへ戻る
- JOBSを確認する

---

## 11. Cross-link Rules

| From | To | 目的 |
| --- | --- | --- |
| Person | Job Detail | その人の仕事を理解する |
| Job Detail | Person | 実際に働く人を知る |
| MADO Project | Related Person / Job | 職種間の協働を理解する |
| Job Detail | Entry | 選択職種を保持して応募する |
| Entry | Jobs | 職種を再検討できるようにする |

同じ内容を複数ページへ重複掲載せず、要約と詳細へのリンクで情報をつなぐ。

---

## 12. Responsive Information Priority

### Desktop

- 複数カラム、重なり、横方向の演出を使用できる。
- Filterは横並び、Job Detailは本文と補助情報を分ける。
- 人物と写真のコラージュを広い画面で展開する。

### Mobile

- 情報を1カラムで上から順番に理解できる構成へ変更する。
- 横スクロールが情報理解を妨げる箇所は縦リストへ変更する。
- Filterは分類ごとに折り返し、選択状態とResetを見失わない配置にする。
- Dialogは全画面表示とし、Close Buttonを常に操作可能にする。
- ENTRYは1項目ずつ読みやすい余白と入力サイズを確保する。

---

## 13. Accessibility Structure

- ページごとに`h1`は1つとし、Section見出しを順序どおりに配置する。
- Navigation、Main、FooterをLandmarkで分ける。
- Filter、Dialog、Mobile Menu、Entry FormはKeyboardでも操作できるようにする。
- Motionは`prefers-reduced-motion`に対応する。
- 装飾目的のPaint、Mask、Frameには空の`alt`を使用する。
- 人物写真、工程写真、完成空間写真には内容に即した`alt`を設定する。
- Hoverだけで情報を提供せず、FocusとTouchでも同じ内容へ到達できるようにする。

---

## 14. 関連資料と次工程

Color、Typography、Grid、Spacing、Image Frame、Component、Motion、Responsiveの正式仕様は`02_DESIGN_RULES.md`を参照する。

全ページと主要状態の画面設計はPencil正本へ反映済み。次工程は`docs/04_IMPLEMENTATION_NOTES.md`に従い、共通UIを含むHOMEからHTML / CSS / Vanilla JavaScript実装を開始する。
