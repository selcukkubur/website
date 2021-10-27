import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import Image from "next/image";
import { requestDemo } from "constants/urls";
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
          ml="96px"
          mr="-24x"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src={require("../../../../public/images/pages/enterprise/hero.png")}
            width={512}
            height={546}
            alt=""
          />
        </Box>
      }
    >
      <Box>
        <Heading as="h1" variant="h1">
          Modern product notifications without the overhead
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
