import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";

type TableOfContent = {
  title: string;
  anchorLink: string;
};

const TableOfContents = ({ data }: { data: Array<TableOfContent> }) => {
  return (
    <Box
      pos={{ lg: "sticky" }}
      top="100px"
      width={{ base: "100%", lg: "250px" }}
      mt={{ base: "60px", lg: "100px" }}
      mr={{ lg: 16 }}
      p="18px 24px"
      borderRadius={10}
      bgColor="white"
      boxShadow="0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)"
    >
      <UnorderedList margin={0} listStyleType="none">
        {data.map(({ title, anchorLink }) => {
          return (
            <ListItem key={title} my={3}>
              <InternalLink
                to={`${anchorLink}`}
                color={"rgba(26, 32, 44, 0.5)"}
                _hover={{ color: "secondary.dark" }}
              >
                {/* {active && (
                  <Box
                    display="inline-block"
                    verticalAlign="middle"
                    mr="6px"
                    width={1}
                    height={1}
                    bgColor="secondary.dark"
                    borderRadius={4}
                  />
                )} */}

                {title}
              </InternalLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default TableOfContents;
