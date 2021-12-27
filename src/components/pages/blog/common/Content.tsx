import { Flex } from "@chakra-ui/react";
import { BlogPost } from "scripts/GetBlogPosts";
import Menu from "../common/Menu";
import Feed from "./Feed";

const Content = ({
  blogPosts,
  slug,
}: {
  blogPosts: BlogPost[];
  slug?: string;
}) => (
  <Flex
    maxW="1240px"
    mx="auto"
    mt={{ base: "92px", lg: "92px", xl: "142px" }}
    direction={{ base: "column", xl: "row" }}
  >
    <Menu slug={slug || "home"} />
    <Feed blogPosts={blogPosts} showHighlights={!slug} />
  </Flex>
);

export default Content;
