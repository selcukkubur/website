import contentfulClient from "./contentfulClient";

async function getAsset({
  assetId,
  isPreview,
}: {
  assetId: string;
  isPreview: boolean;
}) {
  const client = contentfulClient(isPreview);
  const asset = await client.getAsset(assetId);
  return asset;
}

const ContentfulExtractAssets = async ({
  contentMd,
  isPreview,
}: {
  contentMd: any;
  isPreview: boolean;
}) => {
  // Extract assets from markdown content and fetch their width/height
  const assetRegex =
    /\(\/\/images\.(?:ctfassets\.net|contentful\.com)\/(?:.+?)\/(.+?)\/(?:.+?)\/(?:.+?)\)/g;
  const matches = [...(contentMd || "").matchAll(assetRegex)];
  const assetIds = Array.from(new Set(matches.map((match) => match[1])));
  const assetsInfo = await Promise.all(
    assetIds.map((assetId) => getAsset({ assetId, isPreview }))
  );
  const assets = assetsInfo.reduce(
    (obj, asset) => ({
      ...obj,
      [asset.sys.id]: {
        url: asset.fields.file.url,
        ...asset.fields.file.details.image,
      },
    }),
    {}
  );
  return assets;
};

export default ContentfulExtractAssets;
