import { NextApiRequest, NextApiResponse } from "next";
import getAllBlogs from "scripts/GetAllBlogs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.json(await getAllBlogs({ limit: 2 }));
};
