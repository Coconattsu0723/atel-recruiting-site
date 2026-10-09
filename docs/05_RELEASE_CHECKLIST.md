# ATEL Release Checklist

## 公開物

- Build Command：`npm run build`
- Publish Directory：`dist`
- Entry：`dist/index.html`
- Route：`/index.html`、`/pages/people.html`、`/pages/jobs.html`、`/pages/job-detail.html`、`/pages/entry.html`
- Runtime：静的HTML / CSS / Vanilla JavaScript。Server処理とEnvironment Variableは不要。
- Form：Portfolio Demo。外部送信先は接続しない。

`dist/`は生成物とし、直接編集しない。修正は元Fileへ行い、再度`npm run build`を実行する。

## 公開前

- 公開先のProject Rootではなく、`dist/`だけを公開対象にする。
- Query Parameterを保持できる通常の静的配信を使用する。
- `pages/*.html`への直接アクセスを許可する。
- HTTPSを有効にする。
- 仮URL、`localhost`、`file://`をMetadataや本文へ残さない。
- ENTRYを実送信Formへ変更しない。

## 公開URL確定後に追加する項目

- 各Pageのcanonical。
- 各Pageの`og:url`。
- 1200 × 630pxのOGP画像と絶対URLの`og:image`。
- 公開URLを使用した`sitemap.xml`。
- `robots.txt`へのSitemap URL。

## 公開後

- HOMEと4つの下層Pageへ直接アクセスする。
- HOME → PEOPLE → JOB DETAIL → ENTRYの導線を確認する。
- PEOPLE Dialog、JOBS Filter / Empty、JOB DETAILの有効・無効Queryを確認する。
- ENTRYのError / Confirm / Completeを確認し、外部送信が発生しないことを確認する。
- 390 / 1440pxで横Scroll、Text Wrap、画像Cropを確認する。
- favicon、canonical、OGP、sitemap、404を確認する。
- Network 404、Console Error、Mixed Contentがないことを確認する。
- Hard Reload後もCSS、JavaScript、画像が更新されることを確認する。
