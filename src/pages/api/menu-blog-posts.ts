import { NextApiRequest, NextApiResponse } from "next";
import getBlogPosts from "scripts/GetBlogPosts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.json(await getBlogPosts({ limit: 2 }));
};
