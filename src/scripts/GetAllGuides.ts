import contentfulClient from "./contentfulClient";

const GetAllGuides = async () => {
  const client = contentfulClient();
  const response = await client.getEntries({
    content_type: "guide",
    limit: 1000,
    order: "-sys.createdAt",
  });
  return response.items;
};

export default GetAllGuides;
