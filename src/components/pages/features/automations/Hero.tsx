import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import Image from "next/image";
import { signup } from "constants/urls";
import FeatureSection from "components/common/FeatureSection";
import RequestDemoButton from "components/pages/home/Hero/RequestDemoButton";

const Hero = () => (
  <FeatureSection
    pt={{ base: "100px", lg: "211px" }}
    pb="12px"
    color="white"
    graphicAlignment="right"
    tag={{
      label: "Automations",
      textColor: "white",
      bgColor: "rgba(255, 255, 255, 0.16)",
    }}
    graphic={
      <Box
        display={{ base: "none", lg: "block" }}
        ml="38px"
        mt="-20px"
        mb="40px"
        mr={{ xl: "-56px" }}
      >
        <Image
          src={require("../../../../../public/images/pages/features/automations/hero.png")}
          alt="Automations"
        />
      </Box>
    }
  >
    <Box mr={4}>
      <Heading as="h1" variant="h1">
        Program complex notification workflows
      </Heading>

      <Text mt={6} mb={10} variant="body1" color="whiteAlpha.900">
        Automations allows you to define workflows around your notifications.
        Utilize delayed sends, condtionals and branching logic, and event-driven
        workflows in order to achieve the messaging strategy your product
        requires.
      </Text>
    </Box>

    <ButtonCTAGradient text="Get started for free" link={signup} />

    <RequestDemoButton />
  </FeatureSection>
);

export default Hero;
