import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import Image from "next/image";
import { signup, requestDemo } from "constants/urls";
import FeatureSection from "components/common/FeatureSection";

const Hero = () => (
  <FeatureSection
    pt={{ base: "100px", lg: "211px" }}
    pb="12px"
    color="white"
    graphicAlignment="right"
    tag={{
      label: "Templates",
      textColor: "white",
      bgColor: "rgba(255, 255, 255, 0.16)",
    }}
    graphic={
      <Box ml="38px" display={{ base: "none", lg: "block" }} mt={-10}>
        <Image
          src={require("../../../../../public/images/pages/features/templates/hero.png")}
          width={972}
          height={610}
          layout="fixed"
          alt="Templates Designer"
        />
      </Box>
    }
  >
    <Box mr={4}>
      <Heading as="h1" variant="h1">
        Perfectly formatted messages for every channel.
      </Heading>

      <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
        Courier Templates allow you deliver the same message, with the same
        data, to multiple channels. Buttons, links, text, and more are
        auto-formatted for your channel and provider.
      </Text>
    </Box>

    <ButtonCTAGradient text="Get started for free" link={signup} />

    <ButtonCTASecondary text="Request a Demo" link={requestDemo} />
  </FeatureSection>
);

export default Hero;
