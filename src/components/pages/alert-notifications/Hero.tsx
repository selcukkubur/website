import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import Image from "next/image";
import { signup, requestDemo } from "constants/urls";
import FeatureSection from "components/common/FeatureSection";

const Hero = () => (
  <Box
    background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
    backgroundSize="cover"
    borderRadius="0 0 40px 40px"
    overflow="hidden"
  >
    <FeatureSection
      pt={{ base: "100px", lg: "100px" }}
      pb={{ lg: "10px" }}
      color="white"
      graphicAlignment="right"
      tag={{
        label: "Alert Notifications",
        textColor: "white",
        bgColor: "rgba(255, 255, 255, 0.16)",
      }}
      graphic={
        <Box
          ml="48px"
          mr="24px"
          my="24px"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src={require("../../../../public/images/pages/use-cases/alert-hero.png")}
            alt=""
          />
        </Box>
      }
    >
      <Box>
        <Heading as="h1" variant="h1">
          Ensure deliverability and visibility of your user alerts.
        </Heading>

        <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
          When a package is delayed, a ride has arrived, or a credit card has
          payment failed, you need to ensure your user’s are aware. Courier has
          the infrastructure and tooling you need to ensure your users receive
          and view your most important and timely notifications.
        </Text>
      </Box>

      <ButtonCTAGradient text="Request Demo" link={requestDemo} />

      <ButtonCTASecondary text="Try free" link={signup} />
    </FeatureSection>
  </Box>
);

export default Hero;
