import { Box, Heading, Text } from "@chakra-ui/react";
import FeatureSection from "components/common/FeatureSection";
import CodeBox from "components/common/CodeBox";
import TextButton from "components/buttons/TextButton";
import InternalLink from "components/InternalLink";
import { documentation } from "constants/urls";

import codeExamples from "./codeExamples";

const ApiCalls = () => (
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
        label: "API Calls",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2}>
        <Heading as="h3" variant="h3" maxW={{ lg: "430px" }}>
          Data gets passed to your templates as part of the send API call.
        </Heading>
        <Text
          mt={6}
          mb={8}
          variant="body1"
          color="secondary.darkAlpha"
          maxW={{ lg: "480px" }}
        >
          Populate the dynamic parts of your templates when making your API call
          using the data object. Override or update any part of your template
          via the Courier API.
        </Text>
        <InternalLink to={documentation}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default ApiCalls;
