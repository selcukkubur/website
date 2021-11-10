import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import { featuresTemplates } from "constants/urls";

const Templates = () => (
  <Box
    pt={{ base: "60px", lg: "180px" }}
    pb={{ base: "120px", sm: "180px", lg: "140px" }}
    overflow="hidden"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box
          pos="relative"
          ml="36px"
          maxW="508px"
          mt={{ lg: "-60px" }}
          mx={{ base: "32px", md: "auto" }}
        >
          <Image
            src={require("../../../../public/images/pages/providers-common/templates-bg.png")}
            alt=""
          />

          <Box
            pos="absolute"
            top="15%"
            left="-9%"
            right="29%"
            display="flex"
            overflow="hidden"
            borderRadius="16px"
            boxShadow="0px 12px 40px rgba(44, 19, 56, 0.16)"
          >
            <Image
              src={require("../../../../public/images/pages/providers-common/templates.gif")}
              alt=""
            />
          </Box>

          <Box
            pos="absolute"
            left="51%"
            right="-8%"
            bottom="-24%"
            display="flex"
            overflow="hidden"
            borderRadius="12px"
            boxShadow="0px 12px 40px rgba(44, 19, 56, 0.16)"
          >
            <Image
              src={require("../../../../public/images/pages/sendgrid-email-notifications/templates-fg.png")}
              alt=""
            />
          </Box>
        </Box>
      }
      tag={{
        label: "SendGrid templates",
        textColor: "secondary.salmon",
        bgColor: "primary.sand",
      }}
    >
      <Box maxW={{ lg: "480px" }}>
        <Heading as="h3" variant="h3">
          Powerful email templating
        </Heading>
        <Text variant="body1" mt={6} color="secondary.darkAlpha">
          Courier provides a powerful drag-and-drop template builder with
          options for white-labeling. Preview and test your SendGrid emails in a
          fully rendered format right in the browser.
        </Text>
        <ButtonCTASecondary text="More on Templates" link={featuresTemplates} />
      </Box>
    </FeatureSection>
  </Box>
);

export default Templates;
