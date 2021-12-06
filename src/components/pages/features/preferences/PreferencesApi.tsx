import { Box, Heading, Text } from "@chakra-ui/react";
import FeatureSection from "components/common/FeatureSection";
import CodeBox from "components/common/CodeBox";
import TextButton from "components/buttons/TextButton";
import InternalLink from "components/InternalLink";
import { docs } from "constants/urls";

import codeExamples from "./codeExamples";

const PreferencesApi = () => (
  <Box
    mb="-156px"
    pt={{ base: "60px", lg: "168px" }}
    pb={{ base: "146px", lg: "160px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      graphicAlignment="left"
      graphic={
        <Box mt={5} pr={{ lg: 5 }} minH="360px" display="flex">
          <CodeBox flexGrow={1} minW={0} examples={codeExamples} />
        </Box>
      }
      tag={{
        label: "Preferences API",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2}>
        <Heading as="h3" variant="h3" maxW={{ lg: "430px" }}>
          Programmatically control your user's preferences
        </Heading>
        <Text
          mt={6}
          mb={8}
          variant="body1"
          color="secondary.darkAlpha"
          maxW={{ lg: "480px" }}
        >
          Courier's Preferences API allows developers to programmatically
          control user's preferences, while Courier's Routing functionality
          automatically respects those preferences.
        </Text>
        <InternalLink to={docs}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default PreferencesApi;
