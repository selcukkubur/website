import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import VideoAnimation from "components/common/VideoAnimation";

const features = [
  {
    image: require("../../../../public/images/pages/use-cases/multi-user.svg"),
    title: "Multi-user escalation",
    body: "Automations allow for multiple reminders to one user, and then escalation notifications to additional users if action is not taken.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/multi-channel.svg"),
    title: "Multi-channel escalation",
    body: "Courier makes it easy to remind users on various channels, including email, SMS, push, in-app, chat, and more, until the proper action is taken.",
  },
  {
    image: require("../../../../public/images/pages/use-cases/choice.svg"),
    title: "Give your user’s the power of choice",
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
      label: "Intelligent notification workflows",
      textColor: "secondary.salmon",
      bgColor: "primary.sand",
    }}
    py={{ base: "60px", lg: "120px" }}
  >
    <Box>
      <Heading as="h2" variant="h2" mr={{ lg: "-60px" }} pb={10}>
        Properly escalate your notifications until action is taken
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
