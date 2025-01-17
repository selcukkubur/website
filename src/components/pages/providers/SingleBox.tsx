import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import ExternalLink from "components/ExternalLink";

interface Props {
  image: { src: string; height: number; width: number };
  name: string;
  link: string;
}

const SingleBox = ({ image, name, link }: Props) => (
  <ExternalLink to={link}>
    <Flex
      borderRadius="10px"
      boxShadow="0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)"
      direction="column"
      justify="space-between"
      h="176px"
    >
      <Flex align="center" pl="24px" h="128px">
        <Image src={image} alt={name} />
        <Text fontSize="24px" fontWeight="500" ml={"32px"} lineHeight="30px">
          {name}
        </Text>
      </Flex>
      <Flex
        bg="primary.violet"
        h="48px"
        borderRadius="0 0 10px 10px"
        align="center"
        justify="center"
      >
        <Text color="white" fontSize="18px" fontWeight="600">
          Docs
        </Text>
        <Box ml={2} pt={"2px"}>
          <Image
            src={require("../../../../public/images/pages/integrations/providers/arrow.svg")}
            alt=""
          />
        </Box>
      </Flex>
    </Flex>
  </ExternalLink>
);

export default SingleBox;
