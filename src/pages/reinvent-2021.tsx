import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Graphic from "components/pages/reinvent-2021/Graphic";
import Form from "components/pages/reinvent-2021/Form";

import "slick-carousel/slick/slick.css";

const Reinvent2021 = () => {
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

export default Reinvent2021;
