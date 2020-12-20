# Blogを SSG(Static Site Generator) で作る方法の調査記録 

## やりたいこと

  - 記事を Markdown で手軽につくりたい。
  - サーバーの運用をしたくない
  - 実験コードを動作させられるようにしたいので、Reactのコードを埋め込めるとよい
  - Next.jsのSSG,ISR(Incremental Static Regeneration) 周りの調査・検証もしたい
    - ISRについてはこちらが参考になります → [ Next.jsにおけるSSG（静的サイト生成）とISRについて（自分の）限界まで丁寧に説明する ](https://qiita.com/thesugar/items/47ec3d243d00ddd0b4ed)

  React で Blog、SSG、目的だと Gatsby.js とかが有名だが、
  Next.jsを使いたいので、今回は対象外とした。

## 候補1 amdxg

[ mizchi ]( https://twitter.com/mizchi ) さんがつくっているやつ。

[ next.js で自分のブログを作る ]( https://mizchi.dev/slides/develop-mizchi-dev) を参考にして環境構築。

一点だけ間違いがあるので注意。

npx degit mizchi/mdxx/templates/blog myblog

↓

npx degit mizchi/amdx/templates/blog myblog

たしか、最初は mdxx という名前で作り始めたけど、ドラッグの名前とかぶってしまったらしくそれが理由で amdx にリネームしたという経緯があって、それが反映されていなかった模様。

比較的簡単に動作確認ができた。

## 候補2 Nextein

- [ Nextein is a static site & blog generator. Combine the simplicity of Markdown and the power of Next.js. ]( https://nextein.elmasse.io/ )
  - [ Nextein - Github ](https://github.com/elmasse/nextein)

Setup が全部手打ちでクソめんどくさかった上、手順書どうりに npm i nextein すると下記のような謎のエラーが発生。

```
npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "nextein" under a package
npm ERR! also called "nextein". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR! 
npm ERR! For more information, see:
npm ERR!     <https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm>
```

試しに yarn add nextein してみたら、普通にインストールできて草ｗ でも謎のエラーでて挫折。

あきらめかけたが、再度 README 読み直したら [ Nextein Starter ]( https://github.com/elmasse/nextein-starter.git ) が用意されていることを発見ｗ

普段の癖で npm install 系の Installコマンド系を 目Grep して、そこから読み始めたわけだが、その文字の上に  Starter Kit が紹介されていたので読み飛ばしてたｗ

Starter Kit で、動作確認して軽くコードレビューをしてみたが、イマイチな気がする。JSで書かれてるし、文法もあれな感じなのでなしと判断した。

ちなみに調査過程で、[ ISCライセンス ]( https://ja.wikipedia.org/wiki/ISC%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9 ) というものを初めて知った。
npmパッケージのデフォルトライセンスらしい。

## 候補3 elm + tailwindcss 

[ Elm JP - 知識0から始めるElm入門ハンズオン ]( https://elm-jp.connpass.com/ ) に以前参加して、クオリティーの高さに感動したので、
Elmでなにか作りたいなと思っていたので、これを機会にかるく調査してみました。

そのものずばりの記事 [ Set up Elm project with Tailwindcss & Parcel ]( https://dev.to/codewithcats/set-up-elm-project-with-tailwindcss-parcel-14gc ) が見つかったので、それで検証開始。 

ちなみに VSCode の拡張は、公式っぽい方は deprecated で有るという罠があるので注意。
推奨はこっち [ elm-ls-vscode ]( https://marketplace.visualstudio.com/items?itemName=Elmtooling.elm-ls-vscode )

環境構築はできたので、勉強会の記憶を思い出しながら、とりあえず [ 最小手数で始めるTailwind CSS ]( https://tech.medpeer.co.jp/entry/better-tailwind-css ) の情報を元にスタイルを当ててみた。スタイルが当たることを確認できたので、ここで一旦終了。

## 結論

とりあえず、amdxg でやる。

elm + tailwindcss は、どちらかといえば tailwindcss をつかった CSSの勉強目的なので、あとでこのコードをベースにして Blogっぽいレイアウトを試作してみようと思っている。

## その他情報

以下は、調査過程のメモを雑記している。

[ Reactの最強フレームワークGatsby.jsの良さを伝えたい！！ ]( https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca ) で、とりあげられている

  - 今現在どの静的サイトジェネレーターが人気かというのを一覧で見れる [ StaticGen ](https://jamstack.org/generators/) サイトもあります。

のサイトが面白かった。静的サイトジェネレーターありすぎｗ

[ Tailwind CSSでUIをマークアップしてく為の参考となるサイトまとめ ]( https://blog.nakamu.life/posts/tailwind-css-ui )
  - ここで紹介されている [ tailwindcomponents - A free repository for community components using TailwindCSS ]( https://tailwindcomponents.com/ ) は、コンポーネント探しに役に立つと思う

[ 最小手数で始めるTailwind CSS ](https://tech.medpeer.co.jp/entry/better-tailwind-css)

