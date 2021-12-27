import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import data from "components/pages/blog/common/Menu/data";

const Hero = ({ slug }: { slug?: string }) => {
  const tag = slug ? data.find((e) => e.slug === slug)?.name : null;
  return (
    <Flex
      color="secondary.dark"
      mt={{ base: "132px", lg: "142px", xl: "192px" }}
      w={"100%"}
    >
      {tag ? (
        <Box mx="auto" textAlign="center" p="0 20px">
          <Heading variant="h2">Courier [{tag}]</Heading>
          <Text textAlign="center" mt={4} variant="body1">
            Latest {tag.toLowerCase()} blog posts
          </Text>
        </Box>
      ) : (
        <Box mx="auto" textAlign="center" p="0 20px">
          <Heading variant="h2">
            Welcome to the Courier Engineering Blog
          </Heading>
          <Text textAlign="center" mt={4} variant="body1">
            Interesting topics and learnings in software development.
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default Hero;
