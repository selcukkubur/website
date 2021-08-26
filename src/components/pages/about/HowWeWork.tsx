import { Box, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Container from "components/Container";

import lightbulb from "../../../../public/images/pages/about/how-we-work/lightbulb.svg";
import chat from "../../../../public/images/pages/about/how-we-work/chat.svg";
import flag from "../../../../public/images/pages/about/how-we-work/flag.svg";
import heart from "../../../../public/images/pages/about/how-we-work/heart.svg";
import doc from "../../../../public/images/pages/about/how-we-work/doc.svg";
import glasses from "../../../../public/images/pages/about/how-we-work/glasses.svg";

const highlights = [
  {
    icon: glasses,
    label: "Zoom Out",
    description:
      "Don't just stay in your lane. Take the blinders off and look at the entire business.",
  },
  {
    icon: lightbulb,
    label: "Have An Opinion",
    description:
      "Each team member is an expert on what success will look like for Courier. Nobody else has the answers.",
  },
  {
    icon: flag,
    label: "Keep It Real",
    description:
      "Be honest with ourselves about what is going really well, and what isn't. Celebrate wins and have hard conversations.",
  },
  {
    icon: heart,
    label: "JFDI",
    description:
      "There will always be more work to do than people to do it. If you see something that needs to get done, just f*cking do it. Don't wait for someone else.",
  },
  {
    icon: chat,
    label: "Talk To Customers",
    description:
      "Working with developers isn't a job role here - it is something we all need to do. Hop on a Zoom, reach out in Slack, build a relationship.",
  },
];

const HowWeWork = () => (
  <Container maxW={1280}>
    <Box
      mt={{ base: "-182px", xl: "-232px" }}
      padding={5}
      bgGradient="linear-gradient(128.55deg, rgba(255, 255, 255, 0.5) -3.29%, rgba(255, 255, 255, 0) 98.07%)"
      boxShadow="0 0 0 1px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.55)"
      borderRadius={24}
      sx={{ backdropFilter: "blur(30.8477px)" }}
      color="secondary.dark"
    >
      <Box
        borderRadius={16}
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
        background="white"
        px={{ base: 5, lg: "55px" }}
        py={{ base: 8, md: 12, lg: 20 }}
      >
        <Heading textAlign="center" variant="h2" mb={12}>
          Our Values
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacingX="45px"
          spacingY="32px"
        >
          {highlights.map((highlight) => (
            <Flex key={highlight.label} alignItems="center">
              <Box flexShrink={0}>
                <Image layout="fixed" src={highlight.icon} />
              </Box>

              <Text ml="18px" mr="33px" variant="body2">
                <b>{highlight.label}</b>
                <br></br>
                {highlight.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  </Container>
);

export default HowWeWork;
