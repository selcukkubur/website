import { Heading, Text } from "@chakra-ui/react";
import Container from "components/Container";

const Hero = () => (
  <Container
    textAlign="center"
    color="white"
    py={{ base: "80px", lg: "220px" }}
    display="flex"
    flexDir="column"
    alignItems="center"
  >
    <Heading as="h1" variant="h1">
      Developers Guide To Notifications
    </Heading>
    <Text fontSize={{ base: "22px", lg: "32px" }} mt={8} maxW="720px">
      Everything you need to know to build a great notification experience for
      your application
    </Text>
  </Container>
);

export default Hero;
