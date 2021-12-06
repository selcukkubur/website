import { Text, Box, Heading } from "@chakra-ui/react";

const Conclusion = ({ conclusion }: { conclusion: string }) => (
  <Box mt={"92px"}>
    <Heading as="h2" mb="22px">
      Conclusion
    </Heading>
    <Text>{conclusion}</Text>
  </Box>
);

export default Conclusion;
