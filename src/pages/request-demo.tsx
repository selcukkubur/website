import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Graphic from "components/pages/request-demo/Graphic";
import Form from "components/pages/request-demo/Form";

const RequestDemo = () => {
  return (
    <>
      <NextSeo
        title="Request Demo"
        description="Courier is critical notification infrastructure for your application. Request a demo of our API and web platform."
      />
      <Flex direction={{ base: "column", lg: "row" }} minH="100vh">
        <Graphic />
        <Form />
      </Flex>
    </>
  );
};

export default RequestDemo;
