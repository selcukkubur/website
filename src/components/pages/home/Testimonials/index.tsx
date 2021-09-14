import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import testimonials from "./data";
import slideSettings from "./sliderSettings";

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
              src={require("../../../../../public/images/testiquote.svg")}
              alt=""
            />
          </Box>
          <Flex mr={{ base: 0, xl: 16 }}>
            <IconButton
              aria-label="Arrow Back Icon"
              icon={<ArrowBackIcon />}
              onClick={() => sliderRef.current?.slickPrev()}
              boxSize="48px"
              bg="rgba(44,19,56,.06)"
              _hover={{ bg: "rgba(44,19,56,.06)" }}
            />
            <IconButton
              aria-label="Arrow Back Icon"
              icon={<ArrowForwardIcon />}
              onClick={() => sliderRef.current?.slickNext()}
              boxSize="48px"
              bg="rgba(44,19,56,.06)"
              ml={5}
              _hover={{ bg: "rgba(44,19,56,.06)" }}
            />
          </Flex>
        </Flex>

        <Slider ref={sliderRef} {...slideSettings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index}>
              <Box
                boxShadow="0 10px 30px rgb(0 0 0 / 8%)"
                p="32px"
                w={{ base: "325px", md: "376px" }}
                h={{ base: "450px", md: "400px" }}
                mx={4}
                my={20}
                position="relative"
              >
                <Flex>
                  <Box borderRadius="12px" overflow="hidden" display="flex">
                    <Image
                      src={testimonial.Image.url}
                      width={72}
                      height={72}
                      alt={testimonial.Name}
                    />
                  </Box>
                  <Flex ml={"24px"} direction="column">
                    <Heading variant="subh1" w="fit-content">
                      {testimonial.Name}
                    </Heading>
                    <Text variant="body2" opacity="0.48">
                      {testimonial.Designation}
                    </Text>
                  </Flex>
                </Flex>
                <Text textAlign="left" mt="32px">
                  {testimonial.Comment}
                </Text>
                <Box position="absolute" bottom="32px" mt={"32px"}>
                  <Image
                    src={testimonial.CompanyLogo.url}
                    width={testimonial.CompanyLogo.width}
                    height={testimonial.CompanyLogo.height}
                    alt="Company Logo"
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Flex>
    </Box>
  );
};

export default Testimonials;
