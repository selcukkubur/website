import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

import ButtonCTAColor from "components/buttons/CTAColor";
import { signup, docs } from "constants/urls";

const Scale = () => (
  <Box
    pt={{ base: "60px", lg: "100px" }}
    pb={{ base: "34px", lg: "74px" }}
    bgColor="primary.sand"
    mb={{ base: "-116px", lg: "-156px" }}
  >
    <FeatureSection
      tag={{
        label: "Scale",
        textColor: "secondary.salmon",
        bgColor: "rgba(255, 94, 94, 0.2)",
      }}
    >
      <Heading as="h3" variant="h3">
        Notifications at enterprise scale
      </Heading>
      <Text variant="body1" mt={2} color="secondary.darkAlpha">
        We scale our infrastructure so you don't have to. Courier Enterprise can
        handle billion of notifications of month.
      </Text>

      <Box mt="40px">
        <Image
          src={require("../../../../public/images/pages/enterprise/scale.png")}
        />
      </Box>

      <Box pt="34px">
        <ButtonCTAColor
          color="secondary.dark"
          hoverColor="secondary.darkAlpha"
          mt="16px"
          mr="26px"
          link={signup}
        >
          Get started for free
        </ButtonCTAColor>

        <ButtonCTAColor
          color="secondary.dark"
          hoverColor="secondary.darkAlpha"
          outline
          mt="16px"
          link={docs}
        >
          Documentation
        </ButtonCTAColor>
      </Box>
    </FeatureSection>
  </Box>
);

export default Scale;
