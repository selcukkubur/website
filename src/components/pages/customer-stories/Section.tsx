import { Box, BoxProps, Heading, Text, Flex } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import Container from "components/Container";
import DarkGradientBg from "components/buttons/DarkGradientBg";

import { requestDemo } from "constants/urls";

interface SectionProps extends BoxProps {
  title?: string;
  children?: string;
  isConclusion?: boolean;
  sidebar?: React.ReactNode;
}

const markdownOptions = {
  forceBlock: true,
  overrides: {
    h2: {
      component: Heading,
      props: { variant: "h3", as: "h2", fontSize: 32, mt: "72px", mb: 10 },
    },
    p: {
      component: Text,
      props: { variant: "body1", my: 8, fontWeight: 300 },
    },
  },
};

const Section = ({
  title,
  children,
  isConclusion,
  sidebar,
  ...props
}: SectionProps) => {
  if (children == null) return null;

  return (
    <Box overflow="hidden" {...props}>
      <Container maxWidth={1240} color="#1A202C">
        <Flex
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          <Box maxW="800px">
            {title && (
              <Box my={10}>
                <Heading
                  display="inline-block"
                  as="h2"
                  variant="h3"
                  fontSize={32}
                  bgGradient={
                    isConclusion
                      ? "linear-gradient(90deg, #FD5E5F 0%, #C84093 50.52%, #9121C1 100%)"
                      : undefined
                  }
                  backgroundClip={isConclusion ? "text" : undefined}
                >
                  {title}
                </Heading>
              </Box>
            )}

            <Markdown options={markdownOptions}>{children}</Markdown>

            {isConclusion && (
              <Flex justifyContent="flex-end" pr={{ lg: "80px" }} my={20}>
                <DarkGradientBg width="183px" height="56px" link={requestDemo}>
                  Request Demo
                </DarkGradientBg>
              </Flex>
            )}
          </Box>

          <Box
            width="250px"
            flexShrink={0}
            color="secondary.dark"
            ml={{ lg: 6 }}
            my={{ base: 8, lg: 0 }}
            alignSelf={{ base: "center", lg: "flex-start" }}
            display={sidebar ? undefined : { base: "none", lg: "block" }}
          >
            {sidebar}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Section;
