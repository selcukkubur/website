import { Text, Box, Heading } from "@chakra-ui/react";

const Intro = ({ introduction }: { introduction: string }) => (
  <Box mt={92}>
    <Heading as="h2" mb="22px">
      Introduction
    </Heading>
    <Text>{introduction}</Text>
    <span id="features" />
  </Box>
);

export default Intro;
