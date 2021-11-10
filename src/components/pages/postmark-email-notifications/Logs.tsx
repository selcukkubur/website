import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import { requestDemo } from "constants/urls";

const Logs = () => (
  <Box
    pt={{ base: "60px", lg: "120px" }}
    pb={{ base: "30px", lg: "80px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      graphicAlignment="left"
      graphic={
        <Box ml={{ lg: "-36px" }}>
          <Image
            src={require("../../../../public/images/pages/providers-common/logs.png")}
            alt=""
          />
        </Box>
      }
      tag={{
        label: "Postmark logs",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Box pt={2}>
        <Heading as="h3" variant="h3">
          Unified logs
        </Heading>
        <Text
          mt={6}
          variant="body1"
          color="secondary.darkAlpha"
          maxW={{ lg: "490px" }}
        >
          Tracking down what went wrong with a missed or accidentally sent
          notification is a huge pain. Courier’s unified logs tie together
          everything that happens before you call the Postmark API with
          everything that happens after, making this process easier for
          engineering and support.
        </Text>
        <ButtonCTASecondary text="Get a Demo" link={requestDemo} />
      </Box>
    </FeatureSection>
  </Box>
);

export default Logs;
