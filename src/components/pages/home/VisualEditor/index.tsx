import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import IconsLeft from "./IconsLeft";
import IconsRight from "./IconsRight";
import Container from "components/Container";
import HeroAnimation from "./HeroAnimation";

const VisualEditor = () => (
  <Box bg="#FCECE2" overflow="hidden" pos="relative">
    <Container>
      <Box pt={{ base: "92px", lg: "132px" }} textAlign="center">
        <Heading variant="h2" as="h2" color="secondary.dark">
          A visual editor that everyone can use
        </Heading>
        <Text mt={"32px"} variant="body1" color="rgba(0, 0, 0, 0.85)">
          Utilize our drag-and-drop builder or control every pixel with our code
          editor, then easily collaborate on designs with other team members.
        </Text>
        <Flex justify="center">
          <IconsLeft />
          <Box pt="32px" pb={{ base: "42px", lg: "132px" }}>
            <HeroAnimation />
          </Box>
          <IconsRight />
        </Flex>
      </Box>
    </Container>
  </Box>
);

export default VisualEditor;
