import { Flex, Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";

const Author = ({
  name,
  avatar,
  publishDate,
}: {
  name: string;
  avatar: string;
  publishDate: Date;
}) => (
  <Flex color="secondary.dark">
    <Box
      sx={{
        img: {
          borderRadius: "50%",
          objectFit: "cover",
        },
      }}
    >
      <Image
        alt={name}
        src={`${avatar}?w=48&h=48`}
        width="48px"
        height="48px"
      />
    </Box>
    <Box ml={3}>
      <Text>{name}</Text>
      <Text opacity="0.4" mt={1} variant="body3">
        {dayjs(publishDate).format("MMMM DD, YYYY")}
      </Text>
    </Box>
  </Flex>
);

export default Author;
