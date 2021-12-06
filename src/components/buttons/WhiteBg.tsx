import { Flex, Box } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";

interface Props {
  children: React.ReactNode;
  height: string | object;
  width: string | object;
  link: string;
  [x: string]: any;
}

const WhiteBg = ({ width, height, link, children, ...other }: Props) => (
  <InternalLink to={link}>
    <Flex
      background="#FFFFFF"
      color="primary.violet"
      borderRadius="6px"
      fontSize="14px"
      {...other}
      width={width}
      height={height}
      textShadow="0 -1px 0 rgb(0 0 0 / 12%)"
      boxShadow="0 2px 0 rgb(0 0 0 / 2%)"
      fontWeight="600"
      justify="center"
      align="center"
      transition="all .8s"
      _hover={{
        div: {
          backgroundImage:
            "linear-gradient(270deg, #9121C2 -119.03%, #FF5E5E 8.24%, #9121C2 50.97%, #FF5E5E 91.41%)",
        },
      }}
    >
      <Box
        sx={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        bgImage="linear-gradient(270deg, #9121C2 0%, #FF5E5E 99.38%, #9121C2 151.08%, #FF5E5E 200.75%)"
      >
        {children}
      </Box>
    </Flex>
  </InternalLink>
);

export default WhiteBg;
