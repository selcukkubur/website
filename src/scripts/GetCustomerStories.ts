import contentfulClient from "./contentfulClient";

export interface CustomerStory {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    companyLogo: {
      fields: {
        file: {
          url: string;
          details: { image: { width: number; height: number } };
        };
      };
    };
    usedFeatures: string[];
    metaDescription: string;
    mainContent: string;
    whyCourier?: string;
    theRoadToSuccess?: string;
    conclusion: string;
  };
}

function GetCustomerStories(): Promise<CustomerStory[]>;
function GetCustomerStories(slug: string): Promise<CustomerStory | void>;

async function GetCustomerStories(slug?: string) {
  const client = contentfulClient();
  const entries = await client.getEntries({
    content_type: "customerStory",
    ...(slug
      ? {
          "fields.slug": slug,
          limit: 1,
        }
      : {}),
  });

  if (slug) return entries.items[0];

  return entries.items;
}

export default GetCustomerStories;
