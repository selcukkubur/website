import { Heading, Text, Box } from "@chakra-ui/react";
import TextButton from "components/buttons/TextButton";
import InternalLink from "components/InternalLink";
import { documentation } from "constants/urls";
import CodeBox from "components/common/CodeBox";
import data from "./data";
import FeatureSection from "components/common/FeatureSection";

const APIOptions = () => (
  <Box
    pt={{ base: "60px", lg: "120px" }}
    pb={{ base: "60px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      graphicAlignment="left"
      graphic={
        <Box mt={{ lg: 2 }} minH="360px" display="flex">
          <CodeBox flexGrow={1} minW={0} examples={data} />
        </Box>
      }
      tag={{
        label: "Built for Developers",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2} maxW={{ lg: "530px" }}>
        <Heading as="h3" variant="h3">
          Email API With Superpowers
        </Heading>
        <Text mt={6} mb={8} variant="body1" color="secondary.darkAlpha">
          The Courier API allows you to deliver complex email usecases with a
          single API call.
        </Text>
        <InternalLink to={documentation}>
          <TextButton> Check out our docs </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default APIOptions;
