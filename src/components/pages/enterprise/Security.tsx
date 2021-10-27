import {
  Box,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import FeatureSection from "components/common/FeatureSection";

import ButtonCTASecondary from "components/buttons/CTASecondary";
import ButtonCTAColor from "components/buttons/CTAColor";
import { requestDemo, security, documentation } from "constants/urls";

const Security = () => (
  <Box
    pt={{ base: "60px", lg: "100px" }}
    pb={{ base: "10px", lg: "50px" }}
    bgColor="rgba(145, 33, 194, 0.05)"
  >
    <FeatureSection
      tag={{
        label: "Security",
        textColor: "#791EB3",
        bgColor: "rgba(121, 30, 179, 0.16)",
      }}
    >
      <Heading as="h3" variant="h3">
        Security and compliance built in
      </Heading>
      <Text variant="body1" mt={2} color="secondary.darkAlpha">
        Securely handling PII is our #1 priority. Courier Enterprise is built
        with security top of mind and is SOC 2 compliant.
      </Text>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        alignItems="flex-start"
        mt="44px"
      >
        <Image
          src={require("../../../../public/images/pages/enterprise/security.png")}
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
          <Heading
            as="h4"
            variant="h3"
            bgGradient="linear(to-r, primary.salmon, primary.violet)"
            bgClip="text"
          >
            Courier Enterprise
          </Heading>
          <Heading as="h4" variant="subh1" fontSize="28px" mt={2}>
            Includes
          </Heading>

          <UnorderedList mt={9} fontSize={18} lineHeight="32px" pl={1}>
            <ListItem>Role based access control</ListItem>
            <ListItem>Custom data retention policies</ListItem>
            <ListItem>Single sign on</ListItem>
            <ListItem>Custom publishing policies</ListItem>
          </UnorderedList>

          <ButtonCTASecondary text="Check out our docs" link={documentation} />
        </Box>
      </Flex>

      <Box pt="34px">
        <ButtonCTAColor
          color="primary.violet"
          hoverColor="secondary.violet"
          mt="16px"
          mr="26px"
          link={requestDemo}
        >
          Request demo
        </ButtonCTAColor>

        <ButtonCTAColor
          color="primary.violet"
          hoverColor="secondary.violet"
          outline
          mt="16px"
          link={security}
        >
          Learn more about security
        </ButtonCTAColor>
      </Box>
    </FeatureSection>
  </Box>
);

export default Security;
