import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  BoxProps,
  chakra,
} from "@chakra-ui/react";
import Highlight, { defaultProps, Language, Prism } from "prism-react-renderer";
import theme from "./theme";

// @ts-expect-error
(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-ruby");
require("prismjs/components/prism-php");

export interface CodeExample {
  languageName: string;
  languageCode: Language | "ruby" | "php";
  code: string;
}

interface CodeBoxProps extends BoxProps {
  examples: CodeExample[];
  fontSize: number;
}

const CodeBox = ({ examples, fontSize, ...props }: CodeBoxProps) => {
  const lineNumbersWidth = fontSize * 3.4;

  return (
    <Box position="relative" display="flex" {...props}>
      <Box
        position="absolute"
        h="100%"
        w={`${lineNumbersWidth}px`}
        bg="#1e0c26"
        borderTopLeftRadius="16px"
        borderBottomLeftRadius="16px"
      />
      <Tabs
        variant="unstyled"
        display="flex"
        flexDir="column"
        flexGrow={1}
        minW={0}
        isLazy
      >
        <TabList
          bg="#2D1339"
          borderTopRadius="16px"
          pt="16px"
          pl={`${fontSize * 4.6}px`}
          flexWrap="wrap"
        >
          {examples.map((example) => (
            <Tab
              _selected={{
                color: "white",
                bg: "linear-gradient(270deg,#9121c2,#ff5e5e)",
                opacity: "1",
              }}
              borderRadius="6px"
              py="7px"
              fontSize={`${fontSize * 0.9}px`}
              fontWeight="600"
              color="white"
              opacity=".72"
              background="hsla(0,0%,100%,.08)"
              mr={3}
              mb={3}
              key={example.languageName}
            >
              {example.languageName}
            </Tab>
          ))}
        </TabList>
        <TabPanels flex="1" minH={0}>
          {examples.map((example) => (
            <TabPanel p="0" h="100%" key={example.languageName}>
              <Highlight
                {...defaultProps}
                theme={theme}
                code={example.code.trim()}
                language={example.languageCode as Language}
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <chakra.pre
                    className={className}
                    style={style}
                    overflow="auto"
                    py={6}
                    borderBottomRadius={16}
                    minH="100%"
                  >
                    {tokens.map((line, i) => (
                      <Flex
                        key={i}
                        {...getLineProps({ line, key: i })}
                        fontSize={fontSize}
                      >
                        <Box
                          position="sticky"
                          left={0}
                          flexShrink={0}
                          w={`${lineNumbersWidth}px`}
                          textAlign="right"
                          pr="1em"
                          mr={4}
                          userSelect="none"
                          color="rgba(136, 136, 136, 0.5)"
                          bg="#1e0c26"
                        >
                          {i + 1}
                        </Box>
                        <Box>
                          {line.map((token, key) => (
                            <span
                              key={key}
                              {...getTokenProps({ token, key })}
                            />
                          ))}
                        </Box>
                      </Flex>
                    ))}
                  </chakra.pre>
                )}
              </Highlight>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

CodeBox.defaultProps = {
  fontSize: 13,
};

export default CodeBox;
