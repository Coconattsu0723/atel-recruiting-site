# ATEL 画像・素材台帳

## 1. 文書の目的

本書は、ATEL採用・キャリアサイトで使用する正式画像素材のファイル名、サイズ、用途、運用ルールをまとめた台帳である。

- 正式な参照先は、下表に記載したフォルダ内のファイルとする。
- `design/source-images/home/`は生成時の高解像度原本の控えであり、HTML/CSSからは参照しない。正式参照先は`assets/images/home/`とする。
- 写真はPNG原本を保持し、実装用に表示サイズ別のWebPを使用する。必要に応じてAVIFを追加する。
- ロゴはSVGを優先し、PNGは確認・代替用途に使用する。
- Paint、Frame、Mask、Cut-out Personは透過PNGを使用する。

---

## 2. ブランド素材

| ファイル | サイズ | 形式 | 主な用途 | 状態 |
| --- | ---: | --- | --- | --- |
| `assets/brand/atel-wordmark-primary.svg` | 1763 × 326 | SVG | 明るい背景のHeader / Footer | 正式 |
| `assets/brand/atel-wordmark-reverse.svg` | 1763 × 326 | SVG | 暗い背景のHeader / Footer | 正式 |
| `assets/brand/atel-wordmark-primary.png` | 2400 × 444 | 透過PNG | SVGを使用できない場合の代替 | 正式 |
| `assets/brand/atel-wordmark-reverse.png` | 2400 × 444 | 透過PNG | SVGを使用できない場合の代替 | 正式 |
| `assets/brand/atel-wordmark-preview.png` | 2400 × 730 | PNG | 確認・資料用 | 資料用 |

---

## 3. Paint Graphic

職種カテゴリとUIのアクセントカラーを連動させる。装飾画像として使用する場合は空の`alt`を設定する。

| ファイル | サイズ | 対応カテゴリ | 主な用途 | 状態 |
| --- | ---: | --- | --- | --- |
| `assets/images/paint/paint-design-blue.png` | 3272 × 3310 | DESIGN | Profession / People / Filter | 正式 |
| `assets/images/paint/paint-planning-orange.png` | 3272 × 3310 | PLANNING | Profession / People / Filter | 正式 |
| `assets/images/paint/paint-project-red.png` | 3272 × 3310 | PROJECT | Profession / People / Filter | 正式 |
| `assets/images/paint/paint-construction-green.png` | 3272 × 3310 | CONSTRUCTION | Profession / People / Filter | 正式 |

---

## 4. Frame / Mask

| ファイル | サイズ | 主な用途 | 実装方針 | 状態 |
| --- | ---: | --- | --- | --- |
| `assets/images/frames/polaroid-interview-frame.png` | 1200 × 1500 | Interview / Culture / BUILD | 写真と別レイヤーで重ねる | 正式 |
| `assets/images/masks/organic-mask-hero.png` | 2000 × 1600 | HOME Hero / OPEN | CSS maskまたは画像マスクとして使用 | 正式 |

写真へ枠やマスク形状を焼き込まず、実装側で写真と分離して扱う。

---

## 5. Cut-out Person

すべて架空のATEL社員として生成した透過PNGであり、参照画像の人物を特定できないよう顔立ち、髪型、服装、所持品を変更している。

| ファイル | サイズ | 想定職種 | 主な用途 | 状態 |
| --- | ---: | --- | --- | --- |
| `assets/images/people/person-01-interior-designer-cutout.png` | 1122 × 1402 | Interior Designer | PEOPLE Hero / Employee Card | 正式 |
| `assets/images/people/person-02-planner-cutout.png` | 1122 × 1402 | Planner / Creative Director | PEOPLE Hero / Employee Card | 正式 |
| `assets/images/people/person-03-project-manager-cutout.png` | 1122 × 1402 | Project Manager | PEOPLE Hero / Employee Card | 正式 |
| `assets/images/people/person-04-construction-manager-cutout.png` | 1122 × 1402 | Construction Manager | PEOPLE Hero / Employee Card | 正式 |
| `assets/images/people/person-05-graphic-sign-designer-cutout.png` | 1122 × 1402 | Graphic / Sign Designer | PEOPLE Hero / Employee Card | 正式 |
| `assets/images/people/person-06-account-producer-cutout.png` | 1122 × 1402 | Account Producer | PEOPLE Hero / Employee Card | 正式 |

---

## 6. Illustration

| ファイル | サイズ | 主な用途 | 状態 |
| --- | ---: | --- | --- |
| `assets/images/illustrations/job-detail-design-experience-illustration.png` | 1448 × 1086 | JOB DETAIL / DESIGN THE EXPERIENCE. | 正式 |
| `assets/images/illustrations/job-detail-team-collaboration-illustration.png` | 1448 × 1086 | JOB DETAIL / DESIGN IS A TEAM SPORT. | 正式 |
| `assets/images/illustrations/job-detail-person-profile-illustration.png` | 1448 × 1086 | JOB DETAIL / WHO WE WANT TO WORK WITH. | 正式 |
| `assets/images/illustrations/jobs-role-starting-point-illustration.png` | 1448 × 1086 | JOBS / A ROLE IS A STARTING POINT. | 正式 |
| `assets/images/illustrations/home-behind-space-illustration.png` | 1448 × 1086 | HOME / BEHIND THE SPACE / 明背景用原案 | 保持 |
| `assets/images/illustrations/home-behind-space-illustration-blue.png` | 1448 × 1086 | HOME / BEHIND THE SPACE / 暗背景上の正式使用版 | 正式 |

---

## 7. HOME写真

写真の色調は、柔らかい自然光、低彩度、Off White、Charcoal、Light Gray、明るい木材色を基準とする。

| ファイル | サイズ | 比率 | 使用箇所 | 表示形式 | 状態 |
| --- | ---: | ---: | --- | --- | --- |
| `assets/images/home/home-hero-team-collaboration.png` | 1536 × 1024 | 3:2 | HOME Hero | Organic Mask | 正式 |
| `assets/images/home/home-process-think-workshop.png` | 2000 × 1500 | 4:3 | HOW WE CREATE / THINK | Rectangle | 正式 |
| `assets/images/home/home-process-design-studio.png` | 1600 × 1600 | 1:1 | HOW WE CREATE / DESIGN | Circle | 正式 |
| `assets/images/home/home-process-build-site.png` | 1600 × 2000 | 4:5 | HOW WE CREATE / BUILD | Polaroid | 正式 |
| `assets/images/home/home-process-open-mado-cafe.png` | 2400 × 1600 | 3:2 | HOW WE CREATE / OPEN、MADO全景 | Organic Mask / Rectangle | 正式 |
| `assets/images/home/home-project-mado-counter-detail.png` | 1600 × 2000 | 4:5 | PROJECT × PEOPLE / MADOディテール | Rectangle | 正式 |

### HOME内の再利用方針

- `home-process-open-mado-cafe.png`は、HOW WE CREATEのOPENとPROJECT × PEOPLEの完成店舗写真で共用する。
- PROJECT × PEOPLEでは、MADO全景、カウンターディテール、関係職種のCut-out Personを組み合わせる。
- PEOPLE、PROFESSIONS、JOBSでは、人物切り抜きとPaint Graphicを優先し、用途が重なる写真を追加生成しない。

---

## 8. 実装時の書き出しルール

1. 写真は必要な表示幅の約1.5〜2倍を上限としてWebPまたはAVIFへ変換する。
2. 元のPNGは削除せず、正式素材として保持する。
3. 人物切り抜き、Paint、Frame、Maskはアルファチャンネルを保持する。
4. 内容を伝える写真には具体的な`alt`を設定し、純粋な装飾素材は`alt=""`とする。
5. Mobileでは人物の顔、手元、カウンターなど主題が残るよう`object-position`を個別に調整する。
6. AI生成画像内に不自然な文字、ロゴ、手指、施工表現がないか、公開前に再確認する。

### 8.1 Web表示用書き出し済み素材

- HOME写真6点は、用途に応じた2サイズのWebPを`assets/images/home/`に保持する。
- 正式Illustration 5点は、724px / 1448pxのWebPを`assets/images/illustrations/`に保持する。
- ファイル名は`{original-name}-{width}.webp`とし、`srcset`で表示幅に近いサイズを選ぶ。
- PNG原本は加工、再書き出し、将来のAVIF対応のために削除しない。

---

## 9. 現在の素材制作状況

- Logo：完了
- Paint Graphic：完了
- Polaroid Frame：完了
- Organic Mask：完了
- Cut-out Person：6名完了
- HOME Hero：完了
- HOW WE CREATE：4工程完了
- PROJECT × PEOPLE：MADO全景・ディテール完了
- JOB DETAIL / JOBS / HOME Illustration：5点完了

現時点で、実装開始に必要な主要画像とWeb表示用バリアントは揃っている。追加画像は、実際のレイアウトで不足が確認された場合のみ制作する。
