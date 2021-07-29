import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface ContainerProps extends BoxProps {
  maxWidth?: number;
}

const Container = ({ children, maxWidth, ...other }: ContainerProps) => (
  <Box
    padding="0 20px"
    maxWidth={maxWidth ? maxWidth : 1400}
    mx="auto"
    {...other}
  >
    {children}
  </Box>
);

export default Container;
