import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Hero from "components/pages/about/Hero";
import Footer from "components/Footer/index";
import { NextSeo } from "next-seo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HowWeWork from "components/pages/about/HowWeWork";
import Investors from "components/pages/about/Investors";
import WorkWithUs from "components/pages/about/WorkWithUs";

const About = () => {
  return (
    <>
      <NextSeo
        title="About Us"
        description="Courier is a developer tools startup based in San Francisco. Our mission is to make software to human communication delightful."
      />
      <Box overflow="hidden">
        <Box
          background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
          backgroundSize="cover"
          borderRadius="0 0 40px 40px"
        >
          <Header />
          <Hero />
        </Box>

        <HowWeWork />
        <Investors />
        <WorkWithUs />
        <Footer cta="newsletter" />
      </Box>
    </>
  );
};

export default About;
