import { Heading, Text } from "@chakra-ui/react";
import Container from "components/Container";

const Hero = ({ title }: { title: string }) => (
  <Container
    textAlign="center"
    color="white"
    pt={{ base: "80px", lg: "162px" }}
    pb={{ base: "80px", lg: "62px" }}
    display="flex"
    flexDir="column"
    alignItems="center"
  >
    <Heading
      as="h1"
      size="2xl"
      lineHeight="1.3"
      maxW="800px"
      pt={{ base: "32px", lg: "0px" }}
    >
      {title}
    </Heading>
  </Container>
);

export default Hero;
