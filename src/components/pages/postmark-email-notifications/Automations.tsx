import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import { featuresAutomations } from "constants/urls";

const Automations = () => (
  <Box
    pt={{ base: "60px", lg: "150px" }}
    pb={{ base: "180px", lg: "150px" }}
    overflow="hidden"
    mb="-156px"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box
          pos="relative"
          ml="36px"
          maxW="508px"
          mt={{ lg: "-30px" }}
          mx={{ base: "32px", md: "auto" }}
        >
          <Box
            display="flex"
            overflow="hidden"
            borderRadius="16px"
            boxShadow="0px 12px 40px rgba(44, 19, 56, 0.16)"
          >
            <Image
              src={require("../../../../public/images/pages/providers-common/automations-bg.png")}
              alt=""
            />
          </Box>

          <Box pos="absolute" top="11%" left="1%" right="1%" display="flex">
            <Image
              src={require("../../../../public/images/pages/providers-common/automations.gif")}
              alt=""
            />
          </Box>

          <Box
            pos="absolute"
            left="43%"
            right="-8%"
            bottom="-11%"
            display="flex"
            overflow="hidden"
            borderRadius="12px"
            boxShadow="0px 12px 40px rgba(44, 19, 56, 0.16)"
          >
            <Image
              src={require("../../../../public/images/pages/providers-common/automations-fg.png")}
              alt=""
            />
          </Box>
        </Box>
      }
      tag={{
        label: "Postmark email sequences",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Automated email sequences
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Courier allows you to build complex email sequences on top of the
          Postmark API. You can use our API or drag-and-drop editor to fetch
          data, delay steps, send to lists, and more.
        </Text>
        <ButtonCTASecondary
          text="More On Automations"
          link={featuresAutomations}
        />
      </Box>
    </FeatureSection>
  </Box>
);

export default Automations;
