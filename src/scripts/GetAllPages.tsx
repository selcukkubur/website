import contentfulClient from "./contentfulClient";

const GetAllPages = async () => {
  const client = contentfulClient();
  const response = await client.getEntries({
    content_type: "textPage",
    limit: 1000,
  });
  return response.items;
};

export default GetAllPages;
