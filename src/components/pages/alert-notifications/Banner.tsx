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

        <Heading variant="h2" maxW="800px">
          Focus on product experience, not notification infrastructure
        </Heading>

        <Text variant="body1" mt={6} color="whiteAlpha.800">
          Stop bogging down engineering with building and maintaining the
          infrastructure needed for a highly reliable, highly available alerts
          experience. Focus engineering time on building product experiences
          that customers care about.
        </Text>
      </Flex>
    </Container>
  </Box>
);

export default Banner;
