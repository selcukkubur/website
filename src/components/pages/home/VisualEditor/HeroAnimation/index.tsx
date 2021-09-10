import { Box } from "@chakra-ui/react";
import DesktopAnimation from "./HeroAnimation";
import MobileImage from "./MobileImage";

const HeroAnimation = () => (
  <Box pos="relative" zIndex={4}>
    <DesktopAnimation />
    <MobileImage />
  </Box>
);

export default HeroAnimation;
