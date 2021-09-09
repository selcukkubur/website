import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Container from "components/Container";
import Image from "next/image";
import InsightsImage from "../../../../public/images/pages/home/insights/insights@2x.png";

const Insights = () => (
  <Container>
    <Box
      mt={{ base: "92px", lg: "132px" }}
      bg="primary.salmon"
      bgImage={'url("/images/pages/home/insights/insightsBg.svg")'}
      color="white"
      textAlign="center"
      backgroundSize="cover"
      height={{ base: "630px", md: "650px", xl: "900px" }}
      p={{ base: "72px 20px 0", xl: "112px 145px 0" }}
    >
      <Heading
        variant="h1"
        w={{ base: "100%", lg: "70%", xl: "80%" }}
        mx="auto"
      >
        In Depth Email Logs
      </Heading>
      <Text mt={"32px"} w={{ base: "100%", lg: "70%", xl: "60%" }} mx="auto">
        We treat email logs just like any other developer logs. Trace every step
        in the process, identify bottlenecks, and optimize deliverability.
      </Text>
    </Box>
    <Flex mt={{ base: "-202px", md: "-350px", xl: "-510px" }} justify="center">
      <Image
        src={InsightsImage}
        width={1032}
        height={640}
        alt={"Notification insights dashboard"}
      />
    </Flex>
  </Container>
);

export default Insights;
