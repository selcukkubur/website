import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

const UserPreferences = () => (
  <Box py={{ base: "60px", lg: "120px" }} overflow="hidden">
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box mr={{ xl: "-40px" }}>
          <Image
            src={require("../../../../../public/images/pages/features/preferences/user-preferences.png")}
            alt="Template Samples"
          />
        </Box>
      }
      tag={{
        label: "User Preferences",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Respect user preferences without the headache
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Allow users to set their notification and communication preferences,
          and then automatically respect those preferences when you send.
        </Text>
        <UnorderedList mt={4} ml={7} color="secondary.darkAlpha">
          <ListItem>
            <Text variant="body1">
              Create message groups that users can turn off and on
            </Text>
          </ListItem>
          <ListItem>
            <Text variant="body1">
              Allow users to set the channels they prefer to receive each
              message in
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </FeatureSection>
  </Box>
);

export default UserPreferences;
