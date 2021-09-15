import { Box, Heading, Text, Button } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import { signup, requestDemo } from "constants/urls";
import CodeBox from "components/common/CodeBox";
import RightArrow from "components/icons/RightArrow";
import codeExamples from "./codeExamples";
import InternalLink from "components/InternalLink";
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
        <Box mt={{ lg: -12 }} pt={5} pl={{ lg: 5 }} minH="460px" display="flex">
          <CodeBox flexGrow={1} minW={0} examples={codeExamples} />
        </Box>
      }
      pt={{ base: "100px", lg: "160px" }}
      pb={{ base: 12, lg: 2 }}
      color="white"
    >
      <Experiment name="Homepage Hero Copy">
        <Experiment.Variant>
          <Heading as="h1" variant="h1">
            API For App-To-User Communication
          </Heading>
          <Text mt="29px" mb="32px" variant="body1">
            Courier's API and Studio enable developers to deliver the right
            message to the right user at the right time.
          </Text>
        </Experiment.Variant>
        <Experiment.Variant>
          <Heading as="h1" variant="h1">
            Product Notifications Made Easy
          </Heading>
          <Text mt="29px" mb="32px" variant="body1">
            Notifications are hard. They require infrastructure that is
            reliable, scalable and observable as well as an end user experience
            that is helpful and respectful. That's why we built Courier.
          </Text>
        </Experiment.Variant>
      </Experiment>
      <ButtonCTAGradient text="Get started for free" link={signup} />
      <div>
        <Button
          as={InternalLink}
          to={requestDemo}
          mt={4}
          mb={{ lg: "120px" }}
          variant="ghost"
          rightIcon={<RightArrow />}
          p={0}
          transition="all .3s cubic-bezier(.645,.045,.355,1)"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          sx={{
            span: {
              transition: "all .3s ease-in-out",
            },
            ":hover span": {
              transform: "translateX(3px)",
            },
          }}
        >
          <Text
            transition="all .3s ease-in-out"
            variant="body3medium"
            fontWeight="600"
          >
            Request a Demo
          </Text>
        </Button>
      </div>
    </FeatureSection>
  </Box>
);

export default Hero;
