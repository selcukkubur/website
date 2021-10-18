import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import Image from "next/image";
import { signup, requestDemo } from "constants/urls";
import FeatureSection from "components/common/FeatureSection";

const Hero = () => (
  <FeatureSection
    pt={{ base: "100px", lg: "211px" }}
    color="white"
    graphicAlignment="right"
    tag={{
      label: "Routing",
      textColor: "white",
      bgColor: "rgba(255, 255, 255, 0.16)",
    }}
    graphic={
      <Box
        display={{ base: "none", lg: "flex" }}
        alignItems="flex-end"
        mt="24px"
        ml="8px"
        mr={{ xl: "-80px" }}
      >
        <Image
          src={require("../../../../../public/images/pages/features/routing/hero.png")}
          alt="Routing"
        />
      </Box>
    }
  >
    <Box mr={4}>
      <Heading as="h1" variant="h1">
        Message routing infrastructure for your application.
      </Heading>

      <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
        Courier's Routing Engine ensures you always deliver the right message,
        to the right user, through the right channel, at the right time.
      </Text>
    </Box>

    <ButtonCTAGradient text="Get started for free" link={signup} />

    <ButtonCTASecondary text="Request a Demo" link={requestDemo} />
  </FeatureSection>
);

export default Hero;
