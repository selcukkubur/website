import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import VideoAnimation from "components/common/VideoAnimation";
import { requestDemo } from "constants/urls";
import FeatureSection from "components/common/FeatureSection";

const Hero = () => (
  <Box
    bgColor="secondary.dark"
    backgroundSize="cover"
    borderRadius="0 0 40px 40px"
    overflow="hidden"
  >
    <FeatureSection
      pt={{ base: "100px", lg: "160px" }}
      pb={{ lg: "90px" }}
      color="white"
      graphicAlignment="right"
      tag={{
        label: "Courier Enterprise",
        textColor: "white",
        bgColor: "rgba(255, 255, 255, 0.16)",
      }}
      graphic={
        <Box
          mt="-30px"
          ml="36px"
          mr="-72px"
          display={{ base: "none", lg: "block" }}
        >
          <VideoAnimation
            url="/videos/pages/enterprise/hero.mp4"
            width={528}
            height={544}
          />
        </Box>
      }
    >
      <Box>
        <Heading as="h1" variant="h1">
          Mission critical notification infrastructure
        </Heading>

        <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
          Product notifications are the voice of your application. Courier
          Enterprise empowers engineering and product teams to deliver a great
          customer experience while reducing development and operational
          overhead.
        </Text>
      </Box>

      <ButtonCTAGradient text="Request a demo" link={requestDemo} />
    </FeatureSection>
  </Box>
);

export default Hero;
