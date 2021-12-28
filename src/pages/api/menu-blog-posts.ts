import { NextApiRequest, NextApiResponse } from "next";
import getBlogPosts from "scripts/GetBlogPosts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const blogPostsResponse = await getBlogPosts({ limit: 2 });
  res.json(blogPostsResponse.items);
};
