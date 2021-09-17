import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

import templates from "../../../../../public/images/pages/features/templates/web.png";

const Templates = () => (
  <Box py={{ base: "60px", lg: "120px" }}>
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Image
          src={templates}
          width={677}
          height={516.5}
          alt="Template Samples"
        />
      }
      tag={{
        label: "Logs",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Robust logs show redered messages
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          See exactly what your customers received for every message sent
          through Courier. Never waste time wondering again.
        </Text>
        <UnorderedList mt={4} ml={7} color="secondary.darkAlpha">
          <ListItem>
            <Text variant="body1">
              End-to-end logging shows full story of your message
            </Text>
          </ListItem>
          <ListItem>
            <Text variant="body1">
              Studio allows anyone to update templates without the need to write
              code
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </FeatureSection>
  </Box>
);

export default Templates;
