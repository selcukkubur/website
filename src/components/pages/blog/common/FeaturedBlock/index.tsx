import { Box } from "@chakra-ui/react";
import type { BlogPost } from "scripts/GetBlogPosts";
import MainArticle from "../../common/FeaturedBlock/MainArticle";
import ContentGrid from "../../common/ContentGrid";

const FeaturedBlock = ({ items }: { items: BlogPost[] }) => (
  <Box>
    <MainArticle item={items[0]} />
    <ContentGrid items={items.slice(1)} />
  </Box>
);

export default FeaturedBlock;
