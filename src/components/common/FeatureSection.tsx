import { Box, Tag, BoxProps } from "@chakra-ui/react";
import Container from "components/Container";

interface FeatureSectionProps extends BoxProps {
  graphicAlignment?: "left" | "right";
  graphic?: React.ReactNode;
  tag?: {
    label: string;
    textColor: string;
    bgColor: string;
  };
  children: React.ReactNode;
}

const FeatureSection = ({
  graphicAlignment,
  graphic,
  tag,
  children,
  ...props
}: FeatureSectionProps) => (
  <Container
    maxWidth={1240}
    display="flex"
    flexDirection={{ base: "column", lg: "row" }}
    alignItems={{ base: "center", lg: "stretch" }}
    {...props}
  >
    {graphic && (
      <Box
        flex="1"
        minW={0}
        order={{ base: 1, lg: graphicAlignment === "right" ? 1 : 0 }}
        width={{ base: "100%", lg: undefined }}
      >
        {graphic}
      </Box>
    )}

    <Box
      flex="1"
      py={2}
      pb={{ base: 12, lg: undefined }}
      width={graphic ? undefined : "100%"}
    >
      <Box
        pl={{ lg: graphicAlignment === "right" || !graphic ? undefined : 20 }}
      >
        {tag && (
          <Tag
            color={tag.textColor}
            bgColor={tag.bgColor}
            fontSize="10px"
            fontWeight="600"
            textTransform="uppercase"
            mb={{ base: 4, lg: 6 }}
          >
            {tag.label}
          </Tag>
        )}

        {children}
      </Box>
    </Box>
  </Container>
);

export default FeatureSection;
