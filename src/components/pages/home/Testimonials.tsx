import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Heading, Flex } from "@chakra-ui/react";
import TestimonialsSlider from "components/common/TestimonialsSlider";
import TestimonialsSliderControl from "components/common/TestimonialsSlider/TestimonialsSliderControl";

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <Box
      mt={{ base: "92px", lg: "112px" }}
      textAlign="center"
      overflow="hidden"
    >
      <Heading variant="h2" as="h2" color="secondary.dark" mb="22px">
        You're in good company
      </Heading>
      <Flex
        position="relative"
        direction={{ base: "column-reverse", xl: "row" }}
      >
        <Flex
          pl={{ base: 0, xl: "150px", "2xl": "350px" }}
          w={{ xl: "30%" }}
          py={{ base: 0, xl: 20 }}
          direction="column"
          justify="space-between"
          mx="auto"
          pos="relative"
        >
          <Box
            display={{ base: "none", xl: "block" }}
            zIndex={1}
            pos="absolute"
            top={0}
            left="100%"
            bottom={0}
            w={4}
            bgGradient="linear(to-r, white, #fff0)"
          />

          <Box display={{ base: "none", xl: "block" }} mr={{ base: 0, xl: 16 }}>
            <Image
              src={require("../../../../public/images/testiquote.svg")}
              alt=""
            />
          </Box>

          <TestimonialsSliderControl
            mr={{ base: 0, xl: 16 }}
            sliderRef={sliderRef}
          />
        </Flex>

        <TestimonialsSlider ref={sliderRef} flexGrow={1} minWidth={0} />
      </Flex>
    </Box>
  );
};

export default Testimonials;
