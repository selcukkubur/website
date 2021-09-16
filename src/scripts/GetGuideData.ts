import contentfulClient from "./contentfulClient";
import contentfulMdExtractAssets from "./contentfulMdExtractAssets";

interface Props {
  slug: string;
  isPreview: boolean;
}

async function getGuidePageId({ slug, isPreview }: Props) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          isPreview
            ? process.env.CONTENTFUL_PREVIEW_API_KEY
            : process.env.CONTENTFUL_API_KEY
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query postEntryQuery {
            guideCollection(where: {slug:"${slug}"}, preview: ${
          isPreview ? true : false
        }) {
              items {
                sys {
                    id
                }
              }
            }
          }
        `,
      }),
    }
  );
  const data = await response.json();
  const guideId = data.data.guideCollection.items[0].sys.id;
  return guideId;
}

const getGuideData = async ({
  guidePageId,
  isPreview,
}: {
  guidePageId: string;
  isPreview: boolean;
}) => {
  const client = contentfulClient(isPreview);
  const response = await client.getEntry(guidePageId);
  const { updatedAt } = response.sys;
  const fields = response.fields;
  const guidePageData = {
    updatedAt,
    ...fields,
  };
  guidePageData.assets = await contentfulMdExtractAssets({
    contentMd: fields.content,
    isPreview,
  });
  return guidePageData;
};

const GetGuideData = async ({ slug, isPreview }: Props) => {
  const guidePageId = await getGuidePageId({ slug, isPreview });
  const guidePostData = await getGuideData({ guidePageId, isPreview });
  return guidePostData;
};

export default GetGuideData;
