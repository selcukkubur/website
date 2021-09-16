import { Heading, Text } from "@chakra-ui/react";
import Container from "components/Container";

const Hero = ({ title, subTitle }: { title: string; subTitle: string }) => (
  <Container
    textAlign="center"
    color="white"
    pt={{ base: "80px", lg: "162px" }}
    pb={{ base: "80px", lg: "62px" }}
    display="flex"
    flexDir="column"
    alignItems="center"
  >
    <Heading as="h1" size="2xl" lineHeight="1.3" maxW="800px">
      {title}
    </Heading>
    <Text mt={8} fontSize={{ base: "22px", lg: "23px" }} maxW="720px">
      {subTitle}
    </Text>
  </Container>
);

export default Hero;
