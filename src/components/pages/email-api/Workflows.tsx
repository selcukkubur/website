import { Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

import lists from "../../../../public/images/pages/email/lists.svg";

const Workflows = () => (
  <Box mt={{ base: "60px", lg: "120px" }} mb={{ base: "20px", lg: "100px" }}>
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box display={{ base: "none", lg: "block" }} mt={{ lg: -2 }}>
          <Image
            src={lists}
            width={526}
            height={364}
            alt="Email list send view"
          />
        </Box>
      }
      tag={{
        label: "List Sends",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Complex Email List Sends
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Courier allows you to design and execute dynamic, customized list
          sends with a single API call. Perfect for product updates, customized
          newsletters, and more.
        </Text>
      </Box>
    </FeatureSection>
  </Box>
);

export default Workflows;
