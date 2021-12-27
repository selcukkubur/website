import { SimpleGrid } from "@chakra-ui/react";
import { BlogPost } from "scripts/GetBlogPosts";
import SingleItem from "../../common/ContentGrid/SingleItem";

const ContentGrid = ({
  items,
  customMarginTop,
}: {
  items: BlogPost[];
  customMarginTop?: string;
}) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingY={{ base: 14, md: "62px" }}
      spacingX={10}
      mt={customMarginTop ? customMarginTop : { base: 14, md: "62px" }}
    >
      {items.map((item, index) => (
        <SingleItem data={item} key={index} />
      ))}
    </SimpleGrid>
  );
};

export default ContentGrid;
