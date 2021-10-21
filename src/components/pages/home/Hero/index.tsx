import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import { signup, requestDemo } from "constants/urls";
import CodeBox from "components/common/CodeBox";
import codeExamples from "./codeExamples";
import FeatureSection from "components/common/FeatureSection";
import Experiment from "components/Experiment";

const Hero = () => (
  <Box
    mb={8}
    background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
    backgroundSize="cover"
    borderRadius="0 0 40px 40px"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box h={{ lg: "600px" }}>
          <Box
            mt={{ lg: -12 }}
            pt={5}
            pl={{ lg: 5 }}
            minH="460px"
            display="flex"
          >
            <CodeBox flexGrow={1} minW={0} examples={codeExamples} />
          </Box>
        </Box>
      }
      pt={{ base: "100px", lg: "160px" }}
      pb={{ base: 12, lg: 2 }}
      color="white"
    >
      <Experiment name="Homepage Hero Copy">
        <Experiment.Variant>
          <Heading as="h1" variant="h1">
            Product Notifications Made Easy
          </Heading>

          <Text mt="29px" mb="32px" variant="body1">
            Notifications are hard. They require infrastructure that is
            reliable, scalable and observable as well as an end user experience
            that is helpful and respectful. That's why we built Courier.
          </Text>
          <ButtonCTAGradient text="Get started for free" link={signup} />
          <ButtonCTASecondary text="Request a Demo" link={requestDemo} />
        </Experiment.Variant>

        <Experiment.Variant>
          <Heading as="h1" variant="h1">
            Production ready product notification system
          </Heading>

          <Text mt="29px" mb="32px" variant="body1">
            Notifications are hard. They require infrastructure that is
            reliable, scalable and observable as well as an end user experience
            that is helpful and respectful. That's why we built Courier.
          </Text>
          <ButtonCTAGradient text="Get started for free" link={signup} />
          <ButtonCTASecondary text="Request a Demo" link={requestDemo} />
        </Experiment.Variant>
      </Experiment>
    </FeatureSection>
  </Box>
);

export default Hero;
