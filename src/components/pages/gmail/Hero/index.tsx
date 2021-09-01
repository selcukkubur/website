import { Box, Heading, Text } from "@chakra-ui/react";
import Container from "components/Container";
import GoogleButton from "components/buttons/Google";

import Steps from "./Steps";

import bannerPattern from "../../../../../public/banner-pattern.svg";

const Hero = () => {
  return (
    <Box
      pos="relative"
      bg={`url(${bannerPattern.src}) no-repeat, linear-gradient(261.53deg, #9121C2 3.43%, #FF5E5E 99.12%)`}
      borderBottomLeftRadius={{ base: 22, lg: 40 }}
      borderBottomRightRadius={{ base: 22, lg: 40 }}
      bgSize="cover"
      pt={{ base: "112px", lg: "132px" }}
      pb={{ base: "32px", md: "48px" }}
    >
      <Container maxWidth={1240} display={{ lg: "flex" }} color="white">
        <Box
          flexGrow={1}
          flexBasis={0}
          textAlign={{ base: "center", lg: "initial" }}
        >
          <Box maxW={{ base: "440px", xl: "unset" }} mx="auto">
            <Heading as="h1" variant="h1">
              The Power of API + The Ease of Gmail
            </Heading>
            <Text variant="body1" my={7}>
              Start sending email programmatically in 3 steps.
              <br />
              No DKIM, no SPF, no WTF.
            </Text>
            <Box display={{ base: "none", lg: "block" }}>
              <GoogleButton />
            </Box>
          </Box>
        </Box>
        <Box flexGrow={1} flexBasis={0}>
          <Steps />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
