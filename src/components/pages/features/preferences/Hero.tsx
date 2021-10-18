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
      label: "Preferences",
      textColor: "white",
      bgColor: "rgba(255, 255, 255, 0.16)",
    }}
    graphic={
      <Box
        mt="-46px"
        ml="38px"
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
      >
        <Image
          src={require("../../../../../public/images/pages/features/preferences/hero.png")}
          width={402}
          height={635}
          alt="Preferences"
        />
      </Box>
    }
  >
    <Box mr={4}>
      <Heading as="h1" variant="h1">
        User-first Notifications
      </Heading>

      <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
        Courier's Preferences makes it easy to put your users in control of
        which notifications they want and which channels they prefer to receive
        them through.
      </Text>
    </Box>

    <ButtonCTAGradient text="Get started for free" link={signup} />

    <ButtonCTASecondary text="Request a Demo" link={requestDemo} />
  </FeatureSection>
);

export default Hero;
