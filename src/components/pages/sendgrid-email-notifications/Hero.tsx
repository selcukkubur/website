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
      pt={{ base: "100px", lg: "180px" }}
      color="white"
      graphicAlignment="right"
      tag={{
        label: "SendGrid Product Notifications",
        textColor: "white",
        bgColor: "rgba(255, 255, 255, 0.16)",
      }}
      graphic={
        <Box ml="38px" display={{ base: "none", lg: "block" }} mb={-10}>
          <Image
            src={require("../../../../public/images/pages/sendgrid-email-notifications/hero.png")}
            width={744}
            height={651.5}
            layout="fixed"
            alt=""
          />
        </Box>
      }
    >
      <Box>
        <Heading as="h1" variant="h1">
          SendGrid + Courier <br />
        </Heading>

        <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
          Courier integrates directly with SendGrid to provide a complete email
          notification system. Simply plugin your SendGrid API key and
          supercharge your notification system with templates, unified logs,
          automated sequences, and more.
        </Text>
      </Box>

      <ButtonCTAGradient text="Get in Touch" link={requestDemo} />

      <ButtonCTASecondary text="Start free" link={signup} />
    </FeatureSection>
  </Box>
);

export default Hero;
