import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";

type TableOfContent = {
  title: string;
  anchorLink: string;
};

type ITableOfContent = {
  title: string;
  anchorLink?: string;
  items?: Array<TableOfContent>;
};

const TableOfContents = ({ data }: { data: Array<ITableOfContent> }) => {
  return (
    <Box
      pos={{ lg: "sticky" }}
      top="100px"
      minWidth={{ base: "100%", lg: "250px" }}
      mt={{ base: "60px", lg: "100px" }}
      mr={{ lg: 16 }}
      p="18px 24px"
      borderRadius={10}
      bgColor="white"
      boxShadow="0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)"
    >
      <UnorderedList margin={0} listStyleType="none">
        {data.map(({ title, anchorLink, items }) => {
          return (
            <Box>
              {title === "Compare" ? (
                <Box my={3}>
                  <Text color={"rgba(26, 32, 44, 0.5)"}>{title}</Text>
                  <Box ml={5} mt={"5px"}>
                    {items!.map(({ title, anchorLink }) => (
                      <Text mb={1}>
                        <InternalLink
                          to={`${anchorLink}`}
                          color={"rgba(26, 32, 44, 0.5)"}
                          _hover={{ color: "secondary.dark" }}
                        >
                          {title}
                        </InternalLink>
                      </Text>
                    ))}
                  </Box>
                </Box>
              ) : (
                <ListItem key={title} my={3}>
                  <InternalLink
                    to={`${anchorLink}`}
                    color={"rgba(26, 32, 44, 0.5)"}
                    _hover={{ color: "secondary.dark" }}
                  >
                    {title}
                  </InternalLink>
                </ListItem>
              )}
            </Box>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default TableOfContents;
