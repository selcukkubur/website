import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

const Web = () => (
  <Box pt={{ base: "60px", lg: "120px" }} pb="60px" overflow="hidden">
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box mt={{ lg: "-60px" }} mb={{ lg: "-60px" }} mr={{ xl: "-60px" }}>
          <Image
            src={require("../../../../../public/images/pages/features/templates/web.png")}
            alt="Template Samples"
          />
        </Box>
      }
      tag={{
        label: "Web",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Easy drag and drop editor for designing templates
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Courier's Template Designer makes it easy for anyone to update and
          edit message content and design. Simply drag and drop your content
          blocks then publish, no need to redeploy code.
        </Text>
        <UnorderedList mt={4} ml={7} color="secondary.darkAlpha">
          <ListItem>
            <Text variant="body1">Edit once and update everywhere</Text>
          </ListItem>
          <ListItem>
            <Text variant="body1">
              Robust version control allows for easy rollback
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </FeatureSection>
  </Box>
);

export default Web;
