import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import Animation from "../home/Integrations/animation";
import FeatureSection from "components/common/FeatureSection";

const Integrations = () => (
  <Box
    pt={{ base: "60px", lg: "120px" }}
    mb="-60px"
    pos="relative"
    overflow="hidden"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box h="470px">
          <Box
            mx={-5}
            mt={{ base: -10, lg: 0 }}
            pos={{ lg: "absolute" }}
            left="50%"
            right={0}
          >
            <Animation />
          </Box>
        </Box>
      }
    >
      <Flex h="100%" flexDir="column" justifyContent="center">
        <Heading as="h3" variant="h3" maxW={{ lg: "400px" }}>
          Integrate with the APIs you already use
        </Heading>
        <Text
          variant="body1"
          mt={6}
          mb={8}
          color="secondary.darkAlpha"
          maxW={{ lg: "520px" }}
        >
          Courier seamlessly integrates with the communication APIs you already
          use. Easily swap vendors without needing to change code.
        </Text>
      </Flex>
    </FeatureSection>
  </Box>
);

export default Integrations;
