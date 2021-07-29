import {
  Heading as ChakraHeading,
  Text,
  TextProps,
  HeadingProps,
  Box,
  BoxProps,
  TableProps,
  Table as ChakraTable,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";

export const Heading = (props: HeadingProps) => (
  <ChakraHeading
    as="h3"
    variant="subh1"
    mt={12}
    mb={4}
    color="secondary.dark"
    fontWeight="500"
    fontSize="2xl"
    {...props}
  />
);

export const Paragraph = (props: TextProps) => (
  <Text variant="body1" my={6} fontWeight="300" {...props} />
);

export const Image = (props: ImageProps) => (
  <Box my={12}>
    <NextImage {...props} />
  </Box>
);

export const Example = ({ children, ...props }: BoxProps) => (
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
    <Paragraph my={0}>{children}</Paragraph>
  </Box>
);

export const List = (props: BoxProps) => (
  <Box my={8} mx={0} {...props} role="list" sx={{ counterReset: "list" }} />
);

export const ListItem = ({ children, ...props }: TextProps) => (
  <Paragraph
    as="div"
    role="listitem"
    pos="relative"
    mb={6}
    py="24px"
    pl="60px"
    pr="30px"
    borderWidth="1px"
    borderRadius="10px"
    borderColor="rgba(44, 19, 56, 0.2)"
    sx={{
      counterIncrement: "list",
      "&:before": {
        content: `counter(list) '.'`,
        position: "absolute",
        left: "30px",
      },
    }}
    {...props}
  >
    {children}
  </Paragraph>
);

export const Table = ({
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
                <Paragraph
                  key={li}
                  my={2}
                  fontWeight={ci === 0 || ri === 0 ? 500 : 400}
                >
                  {line}
                </Paragraph>
              ))}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </ChakraTable>
);
