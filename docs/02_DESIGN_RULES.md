# ATEL デザインルール

## 1. 文書の目的

本書は、ATEL採用・キャリアサイトの画面設計と実装に使用するColor、Typography、Grid、Spacing、Image Frame、Component、Motion、Responsiveの共通ルールを定義する。

ビジュアルコンセプトは以下とする。

> Architectural × Editorial × Human × Art Direction × Motion

整然とした建築的グリッドを情報設計の土台とし、人物、Paint、写真の重なりによって人間らしさと制作現場の偶発性を加える。

---

## 2. Design Principles

1. **Structure First**：情報の読みやすさと導線を、装飾より優先する。
2. **People Behind the Space**：完成空間だけでなく、手元、工程、協働する人を見せる。
3. **Controlled Contrast**：大きな文字、余白、Paint Colorの強弱を明確にする。
4. **Limited Frames**：画像フレームはRectangle、Circle、Polaroid、Organic Maskの4種類に限定する。
5. **Purposeful Motion**：理解、順序、関係性を補助する動きだけを使用する。

---

## 3. Color System

### 3.1 Base Colors

| Token | HEX | 用途 |
| --- | --- | --- |
| `--color-paper` | `#F4F1EA` | 基本背景、Polaroid、紙の質感 |
| `--color-white` | `#FFFFFF` | Form、写真周辺、反転文字 |
| `--color-ink` | `#171717` | 基本文字、Primary Button |
| `--color-black` | `#0B0B0B` | 高コントラスト文字、暗背景 |
| `--color-gray-700` | `#4A4A46` | Secondary Text |
| `--color-gray-500` | `#7A7A74` | Caption、非選択状態 |
| `--color-gray-300` | `#C9C7C0` | Border、区切り線 |
| `--color-gray-150` | `#E6E2D9` | Subtle Background |

基本画面は`Paper + Ink`を中心とし、純白を全面背景として多用しない。

### 3.2 Department Colors

Paint素材の実データから抽出した色を正式値とする。

| Token | HEX | Department | 使用例 |
| --- | --- | --- | --- |
| `--color-design` | `#2457E6` | DESIGN | Paint、Filter、Card Accent |
| `--color-planning` | `#F05A35` | PLANNING | Paint、Filter、Card Accent |
| `--color-project` | `#B52C3A` | PROJECT | Paint、Filter、Card Accent |
| `--color-construction` | `#78833F` | CONSTRUCTION | Paint、Filter、Card Accent |

BUSINESSとCORPORATEは新しいアクセント色を増やさず、Ink / Grayを使用する。

### 3.3 Contrast Rules

- Blue背景とRed背景：白文字を使用する。
- Orange背景：InkまたはBlack文字を使用する。
- Green背景：Black文字を使用し、小さい文字を多用しない。
- OrangeとGreenは、Paper背景上の本文色として使用しない。
- Paint ColorだけでDepartmentを伝えず、必ずテキストラベルを併記する。
- Focus Ringは原則Blue `#2457E6`とし、Blue背景上ではWhiteへ切り替える。

### 3.4 Suggested CSS Variables

```css
:root {
  --color-paper: #f4f1ea;
  --color-white: #ffffff;
  --color-ink: #171717;
  --color-black: #0b0b0b;
  --color-gray-700: #4a4a46;
  --color-gray-500: #7a7a74;
  --color-gray-300: #c9c7c0;
  --color-gray-150: #e6e2d9;
  --color-design: #2457e6;
  --color-planning: #f05a35;
  --color-project: #b52c3a;
  --color-construction: #78833f;
}
```

---

## 4. Typography

### 4.1 Font Family

| 役割 | Font | Fallback |
| --- | --- | --- |
| English Display / UI | `Space Grotesk` | `Arial`, sans-serif |
| Japanese / Body | `Noto Sans JP` | `Hiragino Kaku Gothic ProN`, `Yu Gothic`, sans-serif |

- 英語の大見出しはSpace GroteskのMedium〜Boldを使用する。
- 日本語本文はNoto Sans JPのRegular〜Mediumを使用する。
- 極端に多くのWeightを読み込まず、400 / 500 / 600 / 700を基本とする。
- Web Fontには`font-display: swap`を設定する。

### 4.2 Type Scale

| Style | Desktop | Mobile | Weight | Line Height | 用途 |
| --- | ---: | ---: | ---: | ---: | --- |
| Display XL | 96–160px | 52–72px | 600 | 0.88–0.95 | HOME Hero |
| Display L | 72–120px | 44–60px | 600 | 0.92–1.0 | Section Statement |
| H1 | 64–88px | 40–52px | 600 | 1.0 | 下層Hero |
| H2 | 44–64px | 32–42px | 600 | 1.05 | Section Heading |
| H3 | 28–40px | 24–30px | 600 | 1.2 | Card / Detail Heading |
| Body L | 18–22px | 17–20px | 400 | 1.7 | Intro Copy |
| Body | 16–18px | 16px | 400 | 1.7 | 本文 |
| Small | 13–14px | 13px | 400 | 1.6 | Caption / Note |
| Label | 12–13px | 12px | 600 | 1.3 | Navigation / Filter |

Display系は`clamp()`を使い、画面幅に応じて連続的に変化させる。

### 4.3 Typography Rules

- 英語Displayは必要に応じて大文字、`letter-spacing: -0.04em`〜`-0.02em`を使用する。
- NavigationとLabelは大文字、`letter-spacing: 0.08em`を基本とする。
- 日本語本文は字間を過度に広げない。
- 日本語の1行はDesktopで約30〜42文字、Mobileで約18〜25文字を目安とする。
- 本文の最大幅は`42rem`前後とし、長文を画面いっぱいへ広げない。
- 中央揃えは短いStatementとCTAに限定し、長文は左揃えとする。

---

## 5. Grid / Container

### 5.1 Layout Grid

| Range | Columns | Margin | Gutter |
| --- | ---: | ---: | ---: |
| Mobile `0–767px` | 4 | 20px | 16px |
| Tablet `768–1023px` | 8 | 32px | 20px |
| Desktop `1024–1279px` | 12 | 48px | 24px |
| Wide `1280px以上` | 12 | 64–80px | 24px |

### 5.2 Width

- Page Max Width：`1600px`
- Content Max Width：`1320px`
- Text Max Width：`672px`
- Full Bleed写真やPaintはPage Max Widthを超えてViewport端まで配置できる。
- 本文と操作UIはContent Gridへ揃える。

### 5.3 Alignment

- 大見出し、本文、CTAのうち最低2要素は同じGrid Lineへ揃える。
- コラージュの傾きや重なりは許可するが、Sectionの開始位置と本文はGridへ戻す。
- 意図のない中央配置を避け、左揃えを基本とする。

---

## 6. Spacing System

4pxを基準単位とし、以下のTokenを使用する。

| Token | Value | 主な用途 |
| --- | ---: | --- |
| `--space-1` | 4px | Icon内の微調整 |
| `--space-2` | 8px | Label間 |
| `--space-3` | 12px | Compact UI |
| `--space-4` | 16px | Field内、Mobile小間隔 |
| `--space-6` | 24px | Card内、Grid Gutter |
| `--space-8` | 32px | Component間 |
| `--space-12` | 48px | Section内グループ |
| `--space-16` | 64px | Mobile Section |
| `--space-24` | 96px | Tablet Section |
| `--space-32` | 128px | Desktop Section |
| `--space-40` | 160px | 大型Editorial Section |

- Desktopの基本Section Paddingは`128px`。
- Mobileの基本Section Paddingは`64–80px`。
- HeroとFinal CTAは画面高と内容に応じて個別に設定する。
- 余白不足を装飾で隠さず、情報グループ間に明確な間隔を置く。

---

## 7. Border / Radius / Shadow

### Border

- 基本線：`1px solid var(--color-gray-300)`
- 強調線：`1px solid var(--color-ink)`
- 図面線のような細線は装飾に限定し、本文の可読性を妨げない。

### Radius

| Token | Value | 用途 |
| --- | ---: | --- |
| `--radius-xs` | 4px | Input / Small Control |
| `--radius-sm` | 8px | Button / Card |
| `--radius-md` | 16px | Dialog / Large Panel |
| `--radius-round` | 999px | Circle / Filter Pill |

すべての画像やCardへ同じRadiusを付けず、Rectangleは原則角丸なしとする。

### Shadow

- 通常CardはShadowを使わず、Borderと余白で分ける。
- Polaroidのみ`0 16px 48px rgba(23, 23, 23, 0.14)`を使用できる。
- Dialogは`0 24px 80px rgba(23, 23, 23, 0.22)`を上限とする。

---

## 8. Image Frame Rules

| Frame | 基本比率 | 用途 | 実装 |
| --- | --- | --- | --- |
| Rectangle | 3:2 / 4:3 / 4:5 | 店舗、工程、情報画像 | `object-fit: cover` |
| Circle | 1:1 | 人物、小さなアクセント | `border-radius: 50%` |
| Polaroid | 4:5 | Interview、Culture、BUILD | Frame PNGと写真を別レイヤーで重ねる |
| Organic Mask | 5:4前後 | Hero、主役写真、OPEN | CSS `mask-image`または透過Mask |

### Frame Usage

- 1つのSectionで主役となるFrameは1種類に絞る。
- 2種類以上を併用する場合は、サイズ差で明確な主従を付ける。
- 写真を傾ける場合は原則`-4deg`〜`4deg`以内とする。
- 人物の顔、手元、空間の主役がMobile Cropでも残るよう`object-position`を個別指定する。
- MaskやFrameを写真データへ焼き込まず、HTML/CSS上で分離する。

---

## 9. Logo

- 通常背景では`atel-wordmark-primary.svg`を使用する。
- Inkまたは写真上の暗背景では`atel-wordmark-reverse.svg`を使用する。
- 最小表示幅は80px。
- 周囲にロゴ高の25%以上のClear Spaceを確保する。
- 変形、縁取り、影、グラデーション、Paintとの合成を行わない。
- Paintや写真の上では無地領域を確保し、可読性が不足する場合は配置を変更する。

---

## 10. Component Rules

### 10.1 Button

#### Primary

- Ink背景 + White文字
- 高さ：56px Desktop / 52px Mobile
- 左右Padding：28–32px
- Hover：背景をDepartment ColorまたはBlackへ変化
- Focus：3pxのFocus Ring

#### Secondary

- Transparent背景 + Ink Border + Ink文字
- Hover：Ink背景 + White文字

#### Text Link

- Text + Arrowを基本とする。
- Hover / FocusでArrowを4–8px移動する。
- 下線またはBorder変化を併用し、移動だけで状態を伝えない。

### 10.2 Header

- Desktop高さ：80px
- Mobile高さ：64px
- 初期は背景を透過できるが、Scroll後はPaper背景と下Borderを表示する。
- ENTRYのみPrimary Buttonとして扱う。
- Mobile Menu ButtonのTap領域は44px以上とする。

### 10.3 Card

- 情報CardはBorderと余白を基本とし、Shadowは使用しない。
- Card全体をLinkにする場合でも、見出しと目的を明確にする。
- Hoverで画像拡大する場合は`scale(1.03)`以内とする。
- Employee CardとJob CardはDepartment Labelを共通形式で表示する。

### 10.4 Filter

- Pill Button形式を基本とする。
- 非選択：Paper / Gray Border
- 選択：Department ColorまたはInk背景
- 色だけで選択状態を示さず、文字、Border、`aria-pressed`を併用する。
- Resetは常に見つけられる位置へ置く。

### 10.5 Form

- Input高さ：56px以上
- Textarea最小高さ：180px
- LabelはInput外へ常時表示し、Placeholderだけに依存しない。
- 必須表示、補足、Errorを異なる役割として配置する。
- Error ColorはProject Redを使用できるが、Iconと文章を併用する。
- Focus時はBlue Ringを表示する。

### 10.6 Dialog

- Desktop最大幅：960px
- Mobile：Full Screen
- Close Buttonを右上へ固定し、44px以上の操作領域を確保する。
- 背景Scrollを停止し、Focus TrapとFocus Returnを実装する。

---

## 11. Icon / Line Style

- Iconは原則Stroke 1.5–2pxの単色線画とする。
- Arrow、Plus、Close、Filterなど必要なものだけを使用する。
- 絵文字や複数テイストのIcon Setを混在させない。
- 図面線は情報の接続やSectionの方向を補助する用途に限定する。

---

## 12. Motion Principles

### Duration

| Token | Duration | 用途 |
| --- | ---: | --- |
| Fast | 160ms | Hover / Focus |
| Base | 280ms | Button / Card / Filter |
| Reveal | 600ms | Section / Image Reveal |
| Hero | 900ms | Heroの初回演出 |

### Easing

```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

### Rules

- Reveal移動量は24–40px以内とする。
- Paint拡大は主役の出現を補助する場合に限定する。
- Parallaxは前景と背景の差を小さくし、本文を動かさない。
- Mouse FollowはPrimary操作へ使用しない。
- `prefers-reduced-motion: reduce`ではReveal、Parallax、横移動を停止し、即時表示へ切り替える。
- Animation中もLinkやButtonを操作できる状態を維持する。

---

## 13. Responsive Rules

### Breakpoints

| Token | Width | 主な変更 |
| --- | ---: | --- |
| Base | 0px | 4 Columns、Mobile Navigation |
| `md` | 768px | 8 Columns、2 Column Card |
| `lg` | 1024px | 12 Columns、Desktop Navigation |
| `xl` | 1280px | Wide Spacing、Editorial Overlap |

Breakpointは端末名ではなく、Layoutが成立しなくなる位置を基準に微調整できる。

### Required Checks

- 375px
- 390px
- 768px
- 1024px
- 1366px
- 1440px

### Layout Changes

- HOME Profession：Desktop横方向、Mobile縦リスト。
- PEOPLE Grid：Mobile 1列、Tablet 2列、Desktop 3列を基本とする。
- JOBS Filter：Mobileは分類ごとに複数行、Desktopは横配置。
- Job Detail：Mobileは1列、Desktopは本文 + 補助情報の2領域。
- ENTRY：Mobileは1列、Desktopでも入力順序を崩さず最大2列まで。
- Heroの大見出しはMobileで改行位置を指定し、画像へ重なり過ぎないようにする。

---

## 14. Z-index

| Token | Value | 用途 |
| --- | ---: | --- |
| Base | 0 | 通常Content |
| Decoration | 1 | Paint / Line |
| Content | 2 | Text / Card |
| Header | 20 | Sticky Header |
| Overlay | 40 | Menu Backdrop |
| Dialog | 50 | Interview Dialog |
| Toast | 60 | Form Status |

不要に大きな値を使用せず、このScale内で管理する。

---

## 15. Accessibility / Usability

- 本文は原則16px未満にしない。
- Tap Targetは44 × 44px以上とする。
- Keyboard Focusを消さない。
- Hover、Focus、Touchで同じ主要情報へ到達できるようにする。
- Colorだけで状態やDepartmentを伝えない。
- 装飾画像は`alt=""`、内容画像は具体的な`alt`を使用する。
- Background Image内へ重要な文字情報を含めない。
- 文字と背景のコントラストは通常文字4.5:1、大きな文字3:1以上を基準とする。

---

## 16. Screen Design Order

1. HOME Desktop 1440px
2. HOME Mobile 390px
3. 共通Header / Footer / Button / Filter / Card
4. PEOPLE Desktop / Mobile
5. JOBS Desktop / Mobile
6. JOB DETAIL Desktop / Mobile
7. ENTRY Desktop / Mobile
8. 全ページを並べたScreen Map確認

HOMEでGrid、Typography、画像表現、Motionの基準を検証し、共通Componentを確定してから下層ページへ展開する。
