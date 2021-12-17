import {
  Heading,
  Text,
  Box,
  BoxProps,
  AspectRatio,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Table as ChakraTable,
  TableProps,
} from "@chakra-ui/react";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import Markdown from "markdown-to-jsx";

const ChakraIframe = chakra("iframe");

const ChakraBlockquote = chakra("blockquote");

const Table = ({
  data,
  ...props
}: TableProps & { data: Array<Array<Array<string>>> }) => (
  <ChakraTable variant="simple" {...props}>
    <Tbody>
      {data.map((row, ri) => (
        <Tr key={ri}>
          {row.map((cell, ci) => (
            <Td
              key={ci}
              px="30px"
              verticalAlign="top"
              borderWidth="1px"
              borderColor="rgba(44, 19, 56, 0.2)"
            >
              {cell.map((line, li) => (
                <Text
                  key={li}
                  mt={2}
                  mb={4}
                  fontWeight={ci === 0 || ri === 0 ? 500 : 400}
                >
                  {line}
                </Text>
              ))}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </ChakraTable>
);

const YouTubeEmbed = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <AspectRatio
      maxH={"430px"}
      my={10}
      maxW={"90%"}
      mx="auto"
      borderRadius={64}
    >
      <ChakraIframe src={embedUrl} allowFullScreen borderRadius={12} />
    </AspectRatio>
  );
};

const MarkdownContent = ({
  assets,
  content,
}: {
  assets?: Record<string, { url: string; width: number; height: number }>;
  content: string;
}) => {
  return (
    <Box mt="52px">
      <Markdown
        options={{
          overrides: {
            h1: {
              component: Heading,
              props: { as: "h1", variant: "h1", mb: "42px" },
            },
            h2: {
              component: Heading,
              props: { as: "h2", mb: "32px", mt: "92px" },
            },
            h3: {
              component: Heading,
              props: { as: "h3", mb: "22px", fontSize: "xl", mt: "22px" },
            },
            h4: {
              component: Heading,
              props: { as: "h4", variant: "h4", mb: "22px" },
            },
            h5: {
              component: Heading,
              props: { as: "h5", variant: "h5", mb: "16px" },
            },
            h6: {
              component: Heading,
              props: { as: "h6", variant: "h6", mb: "12px" },
            },
            p: {
              component: Text,
              props: { mt: 4, mb: 6 },
            },
            table: {
              component: (props) => {
                const data = JSON.parse(props.children[0].props.children[0]);
                return <Table data={data} />;
              },
            },
            thead: {
              component: Thead,
            },
            tbody: {
              component: Tbody,
            },
            tr: {
              component: Tr,
            },
            th: {
              component: Th,
            },
            td: {
              component: Td,
            },
            pre: {
              component: (props) => {
                return (
                  <Box mt="10px" maxW={{ base: "300px", md: "700px" }}>
                    <CopyBlock
                      text={props.children.props.children}
                      language={(props.children.props.className || "").replace(
                        "lang-",
                        ""
                      )}
                      showLineNumbers={true}
                      startingLineNumber={1}
                      theme={dracula}
                      codeBlock
                    />
                  </Box>
                );
              },
            },
            a: {
              component: (props) => {
                // if (props.href.includes("youtube.com/embed")) {
                //   return <YouTubeEmbed embedUrl={props.href} />;
                // }

                const external =
                  /^https?:\/\//.test(props.href) &&
                  !props.href.includes("courier.com");

                return (
                  <Link
                    textDecoration="underline"
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : ""}
                    {...props}
                  />
                );
              },
            },
            ol: {
              component: OrderedList,
            },
            ul: {
              component: UnorderedList,
            },
            li: {
              component: ListItem,
              props: { my: 2 },
            },
            blockquote: {
              component: (props) => (
                <ChakraBlockquote
                  borderLeftColor="primary.sand"
                  borderLeftWidth={4}
                  pl={4}
                  {...props}
                />
              ),
            },
            example: {
              component: ({ children, ...props }: BoxProps) => (
                <Box
                  py="24px"
                  px="30px"
                  borderWidth="1px"
                  borderRadius="10px"
                  borderColor="rgba(44, 19, 56, 0.2)"
                  color="secondary.dark"
                  {...props}
                >
                  <Text mb={4} variant="body1medium" fontSize="24px">
                    Example:
                  </Text>
                  <Text my={0}>{children}</Text>
                </Box>
              ),
            },
            img: {
              component: (props) => {
                const assetId = props.src.split("/")[4];
                const asset = assets![assetId || ""];

                if (!asset) return null;

                return (
                  <Box my={10}>
                    <Image
                      src={`https:${asset.url}`}
                      alt={props.alt}
                      title={props.title}
                      width={asset.width}
                      height={asset.height}
                      quality={100}
                    />
                  </Box>
                );
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </Box>
  );
};

export default MarkdownContent;
