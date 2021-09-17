import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Header from "components/Header/index";
import Hero from "components/pages/features/templates/Hero";
import Web from "components/pages/features/templates/Web";
import ApiCalls from "components/pages/features/templates/ApiCalls";
import Footer from "components/Footer/index";

const FeaturesTemplates = () => {
  return (
    <>
      <NextSeo
        title="Templates | Features"
        description="Perfectly formatted messages for every channel."
      />
      <Box
        background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
        backgroundSize="cover"
        borderRadius="0 0 40px 40px"
        overflow="hidden"
      >
        <Header />
        <Hero />
      </Box>
      <Web />
      <ApiCalls />
      <Footer />
    </>
  );
};

export default FeaturesTemplates;
