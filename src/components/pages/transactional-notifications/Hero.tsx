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
        label: "Transactional Notifications",
        textColor: "white",
        bgColor: "rgba(255, 255, 255, 0.16)",
      }}
      graphic={
        <Box
          ml="38px"
          display={{ base: "none", lg: "block" }}
          mr={{ xl: "-72px" }}
        >
          <Image
            src={require("../../../../public/images/pages/use-cases/transactional-hero.png")}
            alt=""
          />
        </Box>
      }
    >
      <Box>
        <Heading as="h1" variant="h1" mr={{ xl: "-140px" }}>
          Unify all your transactional notifications across teams, products, and
          channels.
        </Heading>

        <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
          Courier takes the pain out creating, editing, triggering, and
          delivering transactional product notifications. With a full featured
          API, SDKs for all major languages, and a direct integration with
          Segment, there’s multiple ways Courier can power your transactional
          notifications.
        </Text>
      </Box>

      <ButtonCTAGradient text="Request Demo" link={requestDemo} />

      <ButtonCTASecondary text="Try free" link={signup} />
    </FeatureSection>
  </Box>
);

export default Hero;
