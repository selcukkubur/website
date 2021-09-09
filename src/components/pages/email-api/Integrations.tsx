import { Heading, Text, Box } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";
import TextButton from "components/buttons/TextButton";
import { email_providers } from "constants/urls";
import Animation from "../home/Integrations/animation";
import FeatureSection from "components/common/FeatureSection";

const Integrations = () => (
  <Box
    pt={{ base: "60px", lg: "120px" }}
    pb={{ base: "20px", lg: "80px" }}
    pos="relative"
    overflow="hidden"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box
          mx={-5}
          mt={{ base: -10, lg: 0 }}
          pos={{ lg: "absolute" }}
          left="50%"
          right={0}
        >
          <Animation />
        </Box>
      }
      tag={{
        label: "Integrations",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box>
        <Heading as="h3" variant="h3" maxW={{ lg: "480px" }}>
          We Support Your Provider
        </Heading>
        <Text
          variant="body1"
          mt={6}
          mb={8}
          color="secondary.darkAlpha"
          maxW={{ lg: "520px" }}
        >
          Courier supports sending through any provider you choose, even Gmail.
          We also support sending through SMS, chat, and push providers for
          multi-channel notifications.
        </Text>
        <InternalLink to={email_providers}>
          <TextButton> View all email providers </TextButton>
        </InternalLink>
      </Box>
    </FeatureSection>
  </Box>
);

export default Integrations;
