import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";
import ParseData from "../../common/ParseData";
import BlogTag from "../../common/Tag";
import Image from "next/image";

const SingleItem = ({ data }: { data: any }) => {
  const {
    tag,
    authorName,
    authorAvatar,
    thumbnailUrl,
    slug,
    excerpt,
    title,
    pubDate,
    thumbnailTitle,
  } = ParseData({ data });
  return (
    <Box color="secondary.dark">
      <Box
        mb={"32px"}
        sx={{
          img: {
            objectFit: "cover",
            borderRadius: "12px",
          },
          "@media screen and (max-width: 30em)": {
            img: {
              width: "445px",
              height: "250px",
            },
          },
        }}
      >
        <Image
          src={`https:${thumbnailUrl}`}
          width={270}
          height={270}
          alt={thumbnailTitle}
        />
      </Box>
      <BlogTag tag={tag} />
      <InternalLink to={`/blog/${slug}`}>
        <Heading variant="subh1" mt={"12px"}>
          {title}
        </Heading>
      </InternalLink>
      <Text opacity="0.7" mt={2} variant="body3">
        {excerpt}
      </Text>
      <Flex mt={5} color="secondary.dark">
        <Box
          sx={{
            img: {
              borderRadius: "50%",
              objectFit: "cover",
            },
          }}
        >
          <Image
            alt={authorName}
            src={`https://${authorAvatar}?w=40&h=40`}
            height="40px"
            width="40px"
          />
        </Box>
        <Box ml={3}>
          <Text variant="body3">{authorName}</Text>
          <Text opacity="0.4" mt={0} variant="smallbody2">
            {pubDate}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleItem;
