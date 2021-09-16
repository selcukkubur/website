import { Box } from "@chakra-ui/react";
import Container from "components/Container";
import TableOfContents from "./TableOfContents";
import MarkdownContent from "./MarkdownContent";

export type TableOfContent = {
  title: string;
  anchorLink: string;
};

const GuidesContent = ({
  contentMd,
  tableOfContents,
  assets,
}: {
  contentMd: any;
  tableOfContents: Array<TableOfContent>;
  assets: Record<string, { url: string; width: number; height: number }>;
}) => {
  return (
    <Container
      maxWidth={1100}
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      alignItems="flex-start"
    >
      <TableOfContents data={tableOfContents} />
      <Box color="#1A202C" flex={1} mb="60px" id="content">
        <MarkdownContent content={contentMd || ""} assets={assets} />
      </Box>
    </Container>
  );
};

export default GuidesContent;
