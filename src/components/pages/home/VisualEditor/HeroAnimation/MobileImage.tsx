import { Box } from "@chakra-ui/react";
import Image from "next/image";
import HeroMobileImage from "../../../../../../public/images/pages/home/hero/mobile-static.png";

const HomeHeroMobileImage = () => (
  <Box display={{ base: "block", xl: "none" }} mx="auto" padding="0 20px">
    <picture>
      <source srcSet="data;" media="(min-width: 1280px)" />
      <Image src={HeroMobileImage} />
    </picture>
  </Box>
);

export default HomeHeroMobileImage;
