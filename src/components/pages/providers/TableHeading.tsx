import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const TableHeading = ({
  headingText,
  isComparePage,
}: {
  headingText: string;
  isComparePage?: boolean;
}) => (
  <Flex align="center" justify="space-between" mb="42px">
    <Heading as="h2">{headingText}</Heading>
    {!isComparePage && (
      <Flex display={{ base: "none", md: "flex" }}>
        <Text mr={2}>(scroll left to view more providers)</Text>
        <Image src={"/images/pages/home/workflows/hand.svg"} height={"22px"} />
      </Flex>
    )}
  </Flex>
);

export default TableHeading;
