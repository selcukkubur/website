import { Box } from "@chakra-ui/react";
import { BlogPost } from "scripts/GetBlogPosts";
import FeaturedBlock from "./FeaturedBlock";

const Feed = ({
  blogPosts,
  showHighlights,
}: {
  blogPosts: BlogPost[];
  showHighlights: boolean;
}) => (
  <Box
    w={{ base: "100%", xl: "80%" }}
    ml={{ base: 0, xl: "62px" }}
    p={{ base: "0 20px", xl: 0 }}
  >
    <FeaturedBlock items={blogPosts.slice(0, showHighlights ? 4 : undefined)} />
    {showHighlights && (
      <Box mt={{ base: "62px", md: "92px" }}>
        <FeaturedBlock items={blogPosts.slice(4)} />
      </Box>
    )}
  </Box>
);

export default Feed;
