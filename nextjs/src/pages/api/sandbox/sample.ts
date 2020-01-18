import { NextApiRequest, NextApiResponse } from 'next';

// import * from 'src/sandbox/';
// type Input = {
//   word: string;
// }

type Data = {
  name: string;
};

export default function accept(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  // eslint-disable-next-line no-console
  console.log(`req.body=${req.body}`);

  res.status(200).json({ name: 'Jhon Doe' });
}
