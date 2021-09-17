import { Box, Heading, Text } from "@chakra-ui/react";
import FeatureSection from "components/common/FeatureSection";
import CodeBox from "components/common/CodeBox";
import TextButton from "components/buttons/TextButton";
import InternalLink from "components/InternalLink";
import { documentation } from "constants/urls";

import codeExamples from "./codeExamples";

const Templates = () => (
  <Box
    mb="-156px"
    pt={{ base: "60px", lg: "168px" }}
    pb={{ base: "146px", lg: "204px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      graphicAlignment="left"
      graphic={
        <Box pt={5} pr={{ lg: 5 }} minH="360px" display="flex">
          <CodeBox flexGrow={1} minW={0} examples={codeExamples} />
        </Box>
      }
      tag={{
        label: "Rendering",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2} maxW={{ lg: "530px" }}>
        <Heading as="h3" variant="h3">
          Ensure your messages are rendered propertly for each provider
        </Heading>
        <Text mt={6} mb={8} variant="body1" color="secondary.darkAlpha">
          Courier's Rendering Engine will ensure that your message is rendered
          and delivered in the proper format for the underlying provider you
          have configured. No more customer coding of templates.
        </Text>
        <InternalLink to={documentation}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default Templates;