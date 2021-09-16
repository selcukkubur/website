const contentful = require("contentful");

const client = (isPreview?: boolean) => {
  if (isPreview) {
    const previewClient = contentful.createClient({
      space: `${process.env.CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.CONTENTFUL_PREVIEW_API_KEY}`,
      host: "preview.contentful.com",
    });
    return previewClient;
  } else {
    const prodClient = contentful.createClient({
      space: `${process.env.CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.CONTENTFUL_API_KEY}`,
    });
    return prodClient;
  }
};

export default client;
