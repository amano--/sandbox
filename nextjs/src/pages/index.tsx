import * as React from 'react';

import Link from 'next/link';
import Layout from '../components/nextjs-samples/Layout';

const index: React.SFC = () => (
  <Layout>
    <h1>
    Next.js + Material-UI + Storybook + Jest + Typescript + Airbnb style + Prettier + ESLint で構築したサンプル
    </h1>
    <p>Sandbox 確認用リンク </p>
    <Link href="/sandbox">
      <a>src/pages/sandbox/index.tsx</a>
    </Link>
    <p>public 以下に配置した静的ファイルのリンク確認 </p>
    <Link href="/dummy.html">
      <a>public/dummy.html</a>
    </Link>
  </Layout>
);

export default index;
