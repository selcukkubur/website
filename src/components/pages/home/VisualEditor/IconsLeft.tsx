import { Box } from "@chakra-ui/react";
import Image from "next/image";

const IconsRight = () => (
  <Box
    display={{ base: "none", xl: "block" }}
    mt={{ base: 4, lg: 14 }}
    pr={{ base: "132px", md: "492px", lg: "750px", xl: "62px" }}
    position="absolute"
    zIndex={3}
  >
    <Box
      transform={"translate3d(28.25px, 35.15px, 0px)"}
      alignSelf="right"
      pl={{ base: "-43px", xl: "192px" }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/cross.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(54.55px, 33.25px, 0px)"}
      textAlign="left"
      my={"62px"}
      pr={{ base: 0, xl: "1162px" }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/blurtext.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(24.35px, 14.55px, 0px)"}
      pl={{ base: 0, xl: "122px" }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/blurcode.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(19.8px, 15.55px, 0px)"}
      my={"62px"}
      pr={{ base: 0, xl: "1162px" }}
      pt={{ md: "132px", xl: 0 }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/media.svg")}
        alt=""
      />
    </Box>
    <Box
      transform={"translate3d(53.1px, 35.45px, 0px)"}
      pl={{ base: 0, xl: "162px" }}
      pt={{ md: "92px", xl: 0 }}
    >
      <Image
        src={require("../../../../../public/images/pages/home/visual-editor/quote.svg")}
        alt=""
      />
    </Box>
  </Box>
);

export default IconsRight;
