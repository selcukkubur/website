import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import VideoAnimation from "components/common/VideoAnimation";

const features = [
  {
    image: require("../../../../public/images/pages/use-cases/channels.svg"),
    title: "Deliver alerts across channels to ensure visibility",
    body: "Courier supports all major notification channels including email, SMS, push, in-app, and multiple chat channels all in a single API.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/clock.svg"),
    title: "Ensure timely delivery",
    body: "The Courier API is built for speed and reliability. With average notification delivery in under 200ms you can rest assured your users will get their alerts in time.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/preferences.svg"),
    title: "Automate follow up to ensure",
    body: "Courier’s Preferences API allows your users to choose which notifications they want to receive in which channels.",
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
      label: "Deliver a better product experience",
      textColor: "secondary.salmon",
      bgColor: "primary.sand",
    }}
    py={{ base: "60px", lg: "120px" }}
  >
    <Box>
      <Heading as="h2" variant="h2" mr={{ lg: "-60px" }} pb={10}>
        Deliver alerts to the best channel at the right time.
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
