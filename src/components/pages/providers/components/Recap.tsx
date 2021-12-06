import { Text, Box, Heading, Flex } from "@chakra-ui/react";

const Recap = ({ recap }: { recap: any }) => (
  <Box mt={"92px"}>
    <Heading as="h2" mb="22px">
      Recap
    </Heading>
    <Flex>
      <Box>
        {Object.keys(recap).map((point) => (
          <Text mt={2}>{point} :</Text>
        ))}
      </Box>
      <Box ml={4}>
        {Object.keys(recap).map((point) => (
          <Text mt={2} fontWeight={500}>
            {recap[point]}
          </Text>
        ))}
      </Box>
    </Flex>
    <span id="conclusion" />
  </Box>
);

export default Recap;
