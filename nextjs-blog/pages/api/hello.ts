// api route document
// https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

// cf. https://nextjs.org/learn/basics/api-routes/creating-api-routes
// Tips
// cf. https://nextjs.org/learn/basics/api-routes/api-routes-details
export const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: "Hello" });
};
export default handler;
