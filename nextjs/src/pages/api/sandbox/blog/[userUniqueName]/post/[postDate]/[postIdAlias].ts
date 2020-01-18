import { NextApiRequest, NextApiResponse } from 'next';

interface Article {
  userUniqueName?: string;
  postDate?: string;
  postIdAlias?: string;
  postBody?: string;
}

// type ArticleKeys = keyof Article;

export default function accept(
  req: NextApiRequest,
  res: NextApiResponse<Article>
): void {
  // eslint-disable-next-line no-console
  // console.log(`ArticleKeys=${JSON.stringify(ArticleKeys)}`);
  // console.log(JSON.stringify(req.query));

  // const article: { [key in ArticleKeys]?: string } = req.query;
  const article: Article = req.query;
  console.log(`article=${JSON.stringify(article)}`);

  res.status(200).json(article);
}
