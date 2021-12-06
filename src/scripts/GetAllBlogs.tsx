import contentfulClient from "./contentfulClient";

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

interface BlogPostTag {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    slug: string;
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

const GetAllBlogs = async (
  { limit } = { limit: 1000 }
): Promise<BlogPost[]> => {
  const client = contentfulClient();
  const response = await client.getEntries({
    content_type: "post",
    limit,
    order: "-sys.createdAt",
  });
  return response.items;
};

export default GetAllBlogs;
