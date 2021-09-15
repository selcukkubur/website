import { useCallback } from "react";
import { Flex, FlexProps, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface TestimonialsSliderControlProps extends FlexProps {
  sliderRef: React.RefObject<Slider>;
}

const TestimonialsSliderControl = ({
  sliderRef,
  ...props
}: TestimonialsSliderControlProps) => {
  const handlePrev = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  return (
    <Flex {...props}>
      <IconButton
        aria-label="Arrow Back Icon"
        icon={<ArrowBackIcon />}
        onClick={handlePrev}
        boxSize="48px"
        bg="rgba(44,19,56,.06)"
        _hover={{ bg: "rgba(44,19,56,.06)" }}
      />
      <IconButton
        aria-label="Arrow Forward Icon"
        icon={<ArrowForwardIcon />}
        onClick={handleNext}
        boxSize="48px"
        bg="rgba(44,19,56,.06)"
        ml={5}
        _hover={{ bg: "rgba(44,19,56,.06)" }}
      />
    </Flex>
  );
};

export default TestimonialsSliderControl;
