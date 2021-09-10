import { Box } from "@chakra-ui/react";
import Image from "next/image";

const IconsRight = () => (
  <Box
    display={{ base: "none", xl: "block" }}
    mt={{ base: 4, lg: 14 }}
    pl={{ base: "132px", md: "492px", lg: "650px", xl: "62px" }}
    position="absolute"
  >
    <Box
      transform={"translate3d(28.25px, 35.15px, 0px)"}
      alignSelf="right"
      pl={{ base: 0, xl: "1162px" }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/blurmedia.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(54.55px, 33.25px, 0px)"}
      textAlign="left"
      my={"62px"}
      pl={{ base: 0, xl: "962px" }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/markdown.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(24.35px, 14.55px, 0px)"}
      pl={{ base: 0, xl: "1162px" }}
      pt={{ md: "92px", xl: 0 }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/blurquote.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(19.8px, 15.55px, 0px)"}
      my={"62px"}
      pl={{ base: 0, xl: "962px" }}
      pr={{ md: "62px", lg: "192px", xl: 0 }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/code.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(53.1px, 35.45px, 0px)"}
      pl={{ base: 0, xl: "1162px" }}
      pt={{ md: "62px", xl: 0 }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/text.svg")}
        alt=""
      />
    </Box>
  </Box>
);

export default IconsRight;
