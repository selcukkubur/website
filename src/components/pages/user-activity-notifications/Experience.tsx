import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import VideoAnimation from "components/common/VideoAnimation";

const features = [
  {
    image: require("../../../../public/images/pages/use-cases/trigger.svg"),
    title: "Trigger notifications based on key events",
    body: "With options to trigger notifications from the Courier API or using our Segment integration, there are multiple ways to ensure that your key user action triggers the proper notifications.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/data.svg"),
    title: "Dynamically load relevant data in your templates",
    body: "Courier’s templates are powered by variables that can be updated at the time of send, giving your engineering team the ability to deliver beautiful and useful notifications to any channel.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/choice.svg"),
    title: "Give your user’s the power of choice",
    body: "Courier’s Preferences API allows your users to choose which notifications they want to receive in which channels. ",
  },
];

const Experience = () => (
  <FeatureSection
    graphicAlignment="right"
    graphic={
      <Box pt={{ lg: "190px" }} pl={{ lg: "60px" }}>
        <VideoAnimation
          url="/videos/pages/use-cases/inbox.mp4"
          width={457}
          height={609}
        />
      </Box>
    }
    tag={{
      label: "Better engage your users",
      textColor: "secondary.salmon",
      bgColor: "primary.sand",
    }}
    py={{ base: "60px", lg: "120px" }}
  >
    <Box>
      <Heading as="h2" variant="h2" mr={{ lg: "-60px" }} pb={10}>
        Supercharge your social and collaboration functionality
      </Heading>

      {features.map((feature, index) => (
        <Flex key={index} mt={10} pt={1} pr={{ lg: "56px" }}>
          <Box flexShrink={0} mr={7}>
            <Image src={feature.image} alt="" />
          </Box>
          <Box>
            <Heading as="h4" variant="h4" fontSize={24} mb={2}>
              {feature.title}
            </Heading>
            <Text variant="body2" color="secondary.darkAlpha">
              {feature.body}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  </FeatureSection>
);

export default Experience;
