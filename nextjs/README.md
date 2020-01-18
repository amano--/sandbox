# Next.js + Material-UI + Storybook + Jest + Typescript + Airbnb style + Prettier + ESLint で構築したサンプル

### 概要
環境設定が非常にめんどくさかったので、どなたかの参考になればと公開します。

基本的に [ Next JS x Jest x Typescript x Airbnb x Prettier x ESLintで環境構築 ]( https://qiita.com/festa78/items/53bdde680284e13c974f ) を参考にしたものに、Material-UI と Storybook を追加し、動作させられるまでの設定変更を試行錯誤した結果になります。そんな感じのものなので、いろいろ雑な感じはおゆるしを。

### インストール
```bash
yarn install
```

### 実行

開発環境モードで起動
```bash
yarn dev
```

本番環境で起動
```bash
# 静的ページ類を生成
yarn build

# Next.js を起動
yarn start
```
### 確認
http://localhost:3000/ にブラウザでアクセス。

### Storybook
Storybook で Material-UI のサンプルページを確認
```bash
yarn storybook
```

#### 参考資料
