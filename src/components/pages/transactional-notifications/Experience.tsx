import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import VideoAnimation from "components/common/VideoAnimation";

const features = [
  {
    image: require("../../../../public/images/pages/use-cases/launch.svg"),
    title: "Launch new channels in minutes",
    body: "Courier supports email, SMS, push, in-app, and multiple chat channels all in a single API. Start supporting a new channel with the click of a button, no need to write more code.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/unify.svg"),
    title: "Unify all notifications in one place",
    body: "Courier supports email, SMS, push, in-app, and multiple chat channels all in a single API. Start supporting a new channel with the click of a button, no need to write more code. ",
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
          url="/videos/pages/use-cases/experience.mp4"
          width={539}
          height={637}
        />
      </Box>
    }
    tag={{
      label: "Deliver a better product experience",
      textColor: "secondary.salmon",
      bgColor: "primary.sand",
    }}
    py={{ base: "60px", lg: "120px" }}
  >
    <Box>
      <Heading as="h2" variant="h2" mr={{ lg: "-60px" }} pb={10}>
        Transactional notifications to any channel, for any use case
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
