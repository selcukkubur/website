import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

const Web = () => (
  <Box pt={{ base: "60px", lg: "120px" }} pb="60px">
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box mr={{ xl: "-40px" }} mt={{ lg: "-100px" }} mb={{ lg: "-60px" }}>
          <Image
            src={require("../../../../../public/images/pages/features/automations/automation.png")}
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
          Visual workflow builder
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Users have the option of building out their workflows from within the
          Courier UI. No programming knowledge needed and no need to redeploy
          your app.
        </Text>
        <UnorderedList mt={4} ml={7} color="secondary.darkAlpha">
          <ListItem>
            <Text variant="body1">Visual builder feature 1</Text>
          </ListItem>
          <ListItem>
            <Text variant="body1">Visual builder feature 2</Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </FeatureSection>
  </Box>
);

export default Web;