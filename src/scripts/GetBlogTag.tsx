import contentfulClient from "./contentfulClient";

export interface BlogPostTag {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    slug: string;
  };
}

const GetBlogTag = async (slug: string): Promise<BlogPostTag> => {
  const client = contentfulClient();
  const response = await client.getEntries({
    content_type: "tag",
    limit: 1,
    "fields.slug": slug,
  });
  return response.items[0];
};

export default GetBlogTag;
