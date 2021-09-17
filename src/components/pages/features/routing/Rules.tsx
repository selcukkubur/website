import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import RulesAnimation from "./RulesAnimation";

const Rules = () => (
  <Box
    pt={{ base: "60px", lg: "120px" }}
    pb={{ base: "60px", md: "20px" }}
    overflow="hidden"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box display={{ base: "none", md: "block" }}>
          <RulesAnimation />
        </Box>
      }
      tag={{
        label: "Rules",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Powerful rules ensure proper routing
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Courier allows you to set routing rules such as which channels are
          preferred over others, which channels should always be delivered, and
          even conditional statements to define your routing logic.
        </Text>
        <UnorderedList mt={4} ml={7} color="secondary.darkAlpha">
          <ListItem>
            <Text variant="body1">
              Drag-and-drop editor to set channel hierarchy
            </Text>
          </ListItem>
          <ListItem>
            <Text variant="body1">
              Branching logic and conditionals for complex routing rules
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </FeatureSection>
  </Box>
);

export default Rules;
