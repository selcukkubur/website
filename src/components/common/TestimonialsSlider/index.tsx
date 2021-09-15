import { forwardRef } from "react";
import { Box, BoxProps, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import testimonials from "./data";

interface TestimonialsSliderProps extends BoxProps {
  compact?: boolean;
}

const TestimonialsSlider = forwardRef<Slider, TestimonialsSliderProps>(
  ({ compact, ...props }: TestimonialsSliderProps, ref) => {
    return (
      <Box {...props}>
        <Slider ref={ref} variableWidth>
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={4} py={compact ? 10 : 20}>
              <Box
                boxShadow="0 10px 30px rgb(0 0 0 / 8%)"
                bgColor="white"
                color="secondary.dark"
                p={compact ? 6 : 8}
                w={compact ? "300px" : { base: "325px", md: "376px" }}
                h={compact ? "340px" : { base: "450px", md: "400px" }}
                position="relative"
              >
                <Flex alignItems="flex-start">
                  <Flex borderRadius="12px" overflow="hidden">
                    <Image
                      src={testimonial.Image.url}
                      width={compact ? 64 : 72}
                      height={compact ? 64 : 72}
                      alt={testimonial.Name}
                    />
                  </Flex>
                  <Flex ml={compact ? 4 : 6} direction="column">
                    <Heading
                      variant={compact ? "subh2" : "subh1"}
                      w="fit-content"
                    >
                      {testimonial.Name}
                    </Heading>
                    <Text variant={compact ? "body3" : "body2"} opacity="0.48">
                      {testimonial.Designation}
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  textAlign="left"
                  mt={compact ? 6 : 8}
                  variant={compact ? "body3" : undefined}
                >
                  {testimonial.Comment}
                </Text>
                <Box position="absolute" bottom={compact ? 4 : 8}>
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
      </Box>
    );
  }
);

export default TestimonialsSlider;
