import contentfulClient from "./contentfulClient";

import type { BlogPostTag } from "./GetBlogTag";

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

interface BlogAuthor {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    twitter: string;
    bio: string;
    slug: string;
    avatar: Asset;
  };
}

export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    publishDate: string;
    tags: BlogPostTag[];
    authors: BlogAuthor[];
    excerpt: string;
    content: any;
    content_md: string;
    headerImage: Asset;
    thumbnail: Asset;
    ctaText: string;
  };
}

interface GetBlogPostsResponse {
  total: number;
  skip: number;
  limit: number;
  items: BlogPost[];
}

const GetBlogPosts = async ({
  limit,
  skip,
  tagId,
  exclude,
}: {
  limit?: number;
  skip?: number;
  tagId?: string;
  exclude?: string;
} = {}): Promise<GetBlogPostsResponse> => {
  const client = contentfulClient();
  const response = await client.getEntries({
    content_type: "post",
    limit: limit || 1000,
    skip: skip || 0,
    order: "-sys.createdAt",
    ...(tagId ? { "fields.tags.sys.id": tagId } : {}),
    ...(exclude ? { "sys.id[ne]": exclude } : {}),
  });
  return response;
};

export default GetBlogPosts;
