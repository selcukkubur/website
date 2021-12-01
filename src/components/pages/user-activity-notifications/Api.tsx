import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import FeatureSection from "components/common/FeatureSection";
import CodeBox from "components/common/CodeBox";

import codeExamples from "./codeExamples";

const Api = () => {
  const codeBoxFontSize = useBreakpointValue({ lg: 16 });

  return (
    <Box mb={{ base: "60px", lg: "120px" }}>
      <FeatureSection
        tag={{
          label: "An API for every use case",
          textColor: "#791EB3",
          bgColor: "rgba(121, 30, 179, 0.16)",
        }}
      >
        <Box pt={2}>
          <Heading as="h2" variant="h2" maxW="680px" mb="70px">
            Define content, routing, and more programmatically.
          </Heading>
        </Box>

        <CodeBox
          flexGrow={1}
          minW={0}
          minH="360px"
          examples={codeExamples}
          fontSize={codeBoxFontSize}
        />
      </FeatureSection>
    </Box>
  );
};

export default Api;
