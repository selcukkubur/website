import contentfulClient from "./contentfulClient";

export interface Subprocessor {
  fields: {
    name: string;
    description: string;
    location: string;
  };
  sys: {
    id: string;
  };
}

const GetAllSuprocessors = async (): Promise<Subprocessor[]> => {
  const client = contentfulClient();
  const response = await client.getEntries({
    content_type: "subprocessor",
    limit: 1000,
    order: "fields.name",
  });
  return response.items;
};

export default GetAllSuprocessors;
