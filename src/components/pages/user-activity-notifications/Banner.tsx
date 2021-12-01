import { Flex, Box, Heading, Text, Tag } from "@chakra-ui/react";
import Container from "components/Container";

const Banner = () => (
  <Box bgGradient="linear(to-b, white, #fcf1eb)">
    <Container>
      <Flex
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        color="white"
        px={{ base: "40px", lg: "160px" }}
        pt={{ base: "60px", lg: "80px" }}
        pb={{ base: "60px", lg: "100px" }}
        borderRadius="24px"
        background="url(/images/notificationBg.svg) center no-repeat #2c1338"
        backgroundSize="cover"
      >
        <Tag
          color="white"
          bgColor="whiteAlpha.100"
          fontSize="10px"
          fontWeight="600"
          textTransform="uppercase"
          mb={{ base: 4, lg: 6 }}
        >
          Reduce engineering overhead
        </Tag>

        <Heading variant="h2">
          Save engineering resources while moving faster
        </Heading>

        <Text variant="body1" mt={6} color="whiteAlpha.800">
          Stop bogging down engineering with notification overhead. Empower
          product and content teams to own notification content without the need
          to alter code or redeploy your code. Allow customer success and
          support to easily search notification logs to uncover issues.
        </Text>
      </Flex>
    </Container>
  </Box>
);

export default Banner;
