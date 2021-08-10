import { Box } from "@chakra-ui/react";
import Image from "next/image";
import HeroMobileImage from "../../../../../public/images/pages/home/hero/mobile-static.png";

const HomeHeroMobileImage = () => {
  return (
    <Box
      display={{ base: "block", xl: "none" }}
      mx="auto"
      mt={{ base: "-180px", xl: "-500px" }}
      padding="0 20px"
    >
      <picture>
        <source srcSet="data;" media="(min-width: 1280px)" />
        <Image
          src={HeroMobileImage}
          width="713px"
          height="435px"
          layout="responsive"
        />
      </picture>
    </Box>
  );
};

export default HomeHeroMobileImage;
