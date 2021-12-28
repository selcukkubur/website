import { NextApiRequest, NextApiResponse } from "next";
import GetBlogPosts from "../../scripts/GetBlogPosts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, tagId } = req.query;
  const response = await GetBlogPosts({
    limit: 6,
    skip: Number(page) * 6 + (tagId ? 7 : 8),
    tagId: tagId && String(tagId),
  });
  return res.json({
    done: response.skip + response.limit >= response.total,
    posts: response.items,
  });
};
