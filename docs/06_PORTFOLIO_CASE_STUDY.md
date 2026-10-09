# ATEL Portfolio Case Study

## 1. 基本情報

| 項目 | 内容 |
| --- | --- |
| Project | ATEL Recruiting Site |
| Category | Web Design / Front-end Development |
| Site Type | Multi-page Recruiting Site |
| Pages | HOME / PEOPLE / JOBS / JOB DETAIL / ENTRY |
| Concept | `BEHIND THE SPACE` |
| Key Message | `SPACE IS NEVER MADE ALONE.` |
| Primary CV | ENTRYフォームの完了 |
| Tools | Pencil / Photoshop / HTML / CSS / Vanilla JavaScript / Git / GitHub |
| URL | https://coconattsu0723.github.io/atel-recruiting-site/ |

## 2. 一覧掲載用コピー

### Short

空間づくりの裏側にいる「人と仕事」を可視化した、架空の空間デザイン会社ATELの採用サイト。

### Medium

完成した空間だけでは見えにくい職種と人のつながりを、人物インタビュー、募集職種Filter、Job Detail、応募フォームまで一貫した導線で設計した採用サイトです。

## 3. 詳細掲載用コピー

ATELは、店舗・商業空間の企画、設計、施工を手がける架空企業を想定した採用・キャリアサイトです。

空間デザイン会社では完成事例が前面に出やすい一方、求職者にとって重要な「どのような職種があるか」「職種同士がどう関わるか」「どのような人が働いているか」が見えにくいという課題を設定しました。

そこで`BEHIND THE SPACE`をコンセプトに、完成した空間の裏側にいる人と仕事を主役として構成。HOMEからPEOPLE、JOBS、JOB DETAIL、ENTRYへ進む主導線に加え、人物から関連職種へ進むPerson-firstの導線、条件から仕事を探すJob-firstの導線を用意しました。

ビジュアルは、設計図のような秩序と、Paint Graphicや写真の重なりによる人間らしい偶発性を組み合わせています。実装ではHTML、CSS、Vanilla JavaScriptを使用し、Filter、Dialog、Query Parameter、FormのError / Confirm / Complete、レスポンシブ、Keyboard操作まで含めて設計しました。

## 4. 課題と解決

### Problem

- 完成事例だけでは、実際の仕事内容や働く人が伝わりにくい
- 8職種の違いと連携関係を理解しづらい
- 新卒・中途、勤務地など、自分に合う募集を探しにくい
- 人物理解と募集要項、応募フォームが分断されやすい

### Approach

- 工程、職種、人物、募集を同じストーリー上に配置
- Person → Job、Job → Personの双方向リンクを設計
- 3分類のAND FilterとFiltered / Empty Stateを実装
- Job DetailからENTRYへ職種情報を保持
- FormにInput / Error / Confirm / Completeを用意

### Outcome

求職者が「会社を知る」だけでなく、「人を知る」「仕事を探す」「条件を確認する」「応募する」まで迷わず進める採用UXとしてまとめました。

## 5. 担当範囲

- 企画・架空企業設定
- 採用課題、Target、Primary CVの定義
- Sitemap、Information Architecture、User Flow
- Brand Concept、Copy、Visual Direction
- Desktop / Mobile UI Design
- Image Direction、Paint Graphic、画像加工
- HTML / CSS / Vanilla JavaScript実装
- Responsive、Accessibility、Metadata
- GitHub Pages公開、Production QA

## 6. 工夫したポイント

### 人物と職種の双方向導線

人物に興味を持ったユーザーはInterview Dialogから関連職種へ、職種から入ったユーザーはJob Detailから関連社員へ移動できます。どの入口からでも応募検討に必要な情報へ接続できる構造にしました。

### URLに残るUI状態

JOBSのFilter、PEOPLEのInterview、JOB DETAILとENTRYの職種はQuery Parameterへ同期します。直接アクセス、再読み込み、Back / Forwardでも状態を復元できます。

### 応募前後の不安を減らすForm

エラーを項目単位と一覧の両方で示し、確認画面から対応項目へ戻れるようにしました。完了画面でも応募職種と区分を再表示します。

### 装飾と可読性の両立

Paint GraphicやCut-out Personを使いながら、本文、Filter、条件、FormはGridと余白で整理し、装飾だけに情報を依存しない設計にしています。

## 7. 掲載画像の推奨順

1. `portfolio/atel-home-overview.png` — HOMEのProject / People連携
2. `portfolio/atel-screen-map.png` — 主要導線と画面状態
3. `portfolio/atel-people-interview.png` — 人物から関連職種への導線
4. `portfolio/atel-jobs-filtered.png` — 複数条件Filter
5. `portfolio/atel-entry-complete.png` — Primary CVの完了状態

一覧サムネイルには、HOMEのProject / People連携またはPEOPLEのInterview Dialogを使用する。詳細ページでは、Screen Mapを先に置いてから各機能の画面を並べると、見た目だけでなく設計意図も説明しやすい。

## 8. 注記

- 本作品は自主制作の架空プロジェクトです。
- 企業、人物、募集職種、応募情報はすべてフィクションです。
- ENTRYはPortfolio Demoであり、入力内容は外部へ送信されません。
