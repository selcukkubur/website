import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";
import CodeBox from "components/common/CodeBox";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import ButtonCTAColor from "components/buttons/CTAColor";
import { signup, documentation } from "constants/urls";

import codeExamples from "./codeExamples";

const Api = () => {
  const codeBoxFontSize = useBreakpointValue({ lg: 16 });

  return (
    <Box pt={{ base: "60px", lg: "100px" }} pb={{ base: "10px", lg: "50px" }}>
      <FeatureSection
        tag={{
          label: "By Developers, For Developers",
          textColor: "secondary.salmon",
          bgColor: "primary.sand",
        }}
      >
        <Heading as="h3" variant="h3">
          An API for every notification use case
        </Heading>
        <Text variant="body1" mt={2} color="secondary.darkAlpha">
          Courier is built by developers for developers. All platform
          functionality is programmable via our extensive APIs.
        </Text>

        <Flex
          flexDir={{ base: "column", lg: "row" }}
          alignItems="flex-start"
          mt="44px"
        >
          <CodeBox
            w="100%"
            flexGrow={1}
            minW={0}
            examples={codeExamples}
            fontSize={codeBoxFontSize}
          />

          <Box
            p="30px"
            pb="24px"
            mt={{ base: "24px", lg: 0 }}
            ml={{ lg: "36px" }}
            w={{ base: "100%", lg: "376px" }}
            flexShrink={0}
            borderRadius="18px"
            boxShadow="0px 12px 40px rgba(44, 19, 56, 0.16)"
            bgColor="white"
          >
            <Image
              src={require("../../../../public/images/pages/enterprise/launchdarkly.png")}
              width={194.5}
              height={30}
              alt="LaunchDarkly Logo"
            />

            <Heading
              as="p"
              my="40px"
              fontWeight={600}
              fontSize="28px"
              lineHeight="40px"
            >
              “LaunchDarkly uses Courier’s notifications to deliver software
              with speed, security, and coordination.”
            </Heading>

            <ButtonCTASecondary
              text="Read the case study"
              link="/customers/launch-darkly"
            />
          </Box>
        </Flex>

        <Box pt="34px">
          <ButtonCTAColor
            color="primary.salmon"
            hoverColor="secondary.salmon"
            mt="16px"
            mr="26px"
            link={signup}
          >
            Get started for free
          </ButtonCTAColor>

          <ButtonCTAColor
            color="primary.salmon"
            hoverColor="secondary.salmon"
            outline
            mt="16px"
            link={documentation}
          >
            Documentation
          </ButtonCTAColor>
        </Box>
      </FeatureSection>
    </Box>
  );
};

export default Api;
