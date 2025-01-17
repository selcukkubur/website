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
        label: "Action Requested Notifications",
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
            src={require("../../../../public/images/pages/use-cases/action-hero.png")}
            alt=""
          />
        </Box>
      }
    >
      <Box>
        <Heading as="h1" variant="h1" mr={{ lg: "-36px" }}>
          Proactively notify users when their action is required.
        </Heading>

        <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
          Courier makes it easy to create and orchestrate action-oriented
          notifications. Automations allow for powerful escalation workflows and
          Courier’s omni-channel routing allows your to deliver the notification
          that is most likely to get a response for your users.
        </Text>
      </Box>

      <ButtonCTAGradient text="Request Demo" link={requestDemo} />

      <ButtonCTASecondary text="Try free" link={signup} />
    </FeatureSection>
  </Box>
);

export default Hero;
