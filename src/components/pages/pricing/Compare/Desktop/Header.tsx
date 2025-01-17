import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import PurpleBgButton from "components/buttons/PurpleBg";
import DarkGradientBg from "components/buttons/DarkGradientBg";
import WhiteBgSimple from "components/buttons/WhiteBgSimple";

const Header = () => (
  <>
    <Flex
      sx={{
        top: "72px",
        position: "sticky",
        background: "#FFFFFF",
        transition: "top .2s",
      }}
    >
      <Box w={"30%"} />
      <Box w={"25%"}>
        <Heading variant="subh2">Developer</Heading>
        <Flex my={"20px"}>
          <Heading
            fontSize={{ base: "32px", md: "24px", xl: "32px" }}
            fontWeight="700"
            lineHeight={{ base: "32px", md: "24px", xl: "32px" }}
            sx={{
              background: "linear-gradient(270deg,#9121C2, #FF5E5E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            $0
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "16px", xl: "18px" }}
            pt={"5px"}
            fontWeight="600"
          >
            / month
          </Text>
        </Flex>
      </Box>
      <Box w={"25%"}>
        <Heading variant="subh2">Business</Heading>
        <Flex my={"20px"}>
          <Heading
            fontSize={{ base: "32px", md: "24px", xl: "32px" }}
            fontWeight="700"
            lineHeight={{ base: "32px", md: "24px", xl: "32px" }}
          >
            $.005
          </Heading>
          <Text fontSize={{ base: "18px", md: "16px", xl: "18px" }} pt={"5px"}>
            / message
          </Text>
        </Flex>
      </Box>
      <Box w={"25%"}>
        <Heading variant="subh2">Enterprise</Heading>
        <Text variant="body2" mt={"27px"} mb={"23.5px"}>
          Custom pricing
        </Text>
      </Box>
    </Flex>
    <Flex>
      <Box w={"30%"} />
      <Box w={"25%"}>
        <DarkGradientBg
          width={{ base: "144px", xl: "180px" }}
          height={"40px"}
          link={"/"}
        >
          Try for free
        </DarkGradientBg>
      </Box>
      <Box w={"25%"}>
        <PurpleBgButton
          width={{ base: "144px", xl: "180px" }}
          height={"40px"}
          link={"/"}
        >
          Try for free
        </PurpleBgButton>
      </Box>
      <Box w={"25%"}>
        <WhiteBgSimple
          width={{ base: "144px", xl: "180px" }}
          height={"40px"}
          link={"/"}
        >
          Get a demo
        </WhiteBgSimple>
      </Box>
    </Flex>
  </>
);

export default Header;
