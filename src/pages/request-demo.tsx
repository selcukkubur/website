import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Graphic from "components/pages/request-demo/Graphic";
import Form from "components/pages/request-demo/Form";

const RequestDemo = () => {
  return (
    <>
      <NextSeo title="Request Demo" description="Request Courier Demo" />
      <Flex direction={{ base: "column", lg: "row" }} minH="100vh">
        <Graphic />
        <Form />
      </Flex>
    </>
  );
};

export default RequestDemo;
