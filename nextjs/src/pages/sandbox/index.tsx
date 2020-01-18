import * as React from 'react';
import Link from 'next/link';

const sandboxList: React.SFC = () => (
  <>
    <p>
      Dynamic API Routes 確認用
      <Link href="https://nextjs.org/docs/api-routes/dynamic-api-routes">
        APIドキュメント
      </Link>
    </p>
    <ul>
      <li>
        <Link href="/api/sandbox/blog/[userUniqueName]/post/[postDate]/[postName]">
          /api/sandbox/blog/[userUniqueName]/post/[postDate]/[postName]
        </Link>
      </li>
      <li>
        <Link
          href="/api/sandbox/blog/[userUniqueName]/post/[postDate]/[postIdAlias]"
          as="/api/sandbox/blog/nobunaga/post/15820621/human-50years"
        >
          /api/sandbox/blog/nobunaga/post/15820621/human-50years
        </Link>
      </li>
    </ul>
  </>
);

export default sandboxList;
