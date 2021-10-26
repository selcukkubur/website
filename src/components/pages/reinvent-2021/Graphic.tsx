import { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import InternalLink from "components/InternalLink";
import Logo from "components/Logo";
import TestimonialsSlider from "components/common/TestimonialsSlider";
import TestimonialsSliderControl from "components/common/TestimonialsSlider/TestimonialsSliderControl";

import { getStarted } from "constants/urls";

const Graphic = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <Box
      flex={1}
      minW={0}
      bgImage="url('/banner-pattern.svg'),linear-gradient(229.33deg, #9121C2 -12.83%, #FF5E5E 115.1%)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      color="white"
    >
      <Flex h="100%" direction="column">
        <Container>
          <Box mt={6} mb={{ base: 6, lg: 20 }}>
            <InternalLink to={getStarted} aria-label="Courier Logo">
              <Logo />
            </InternalLink>
          </Box>

          <Box flex={1} mb={8}>
            <Heading as="h1" variant="h2" mb={6}>
             Visit the Courier Lounge at re:Invent 2021
            </Heading>
            <UnorderedList ml={7}>
              <ListItem>
                <Text variant="body2">
                  Learn how to modernize your product notification stack
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="body2">Learn how Courier works along with SES, SNS, Serverless and more</Text>
              </ListItem>
              <ListItem>
                <Text variant="body2">
                  Enjoy a drink and a break from the crowds
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Container>

        <Box pb={8} display={{ base: "none", lg: "block" }}>
          <TestimonialsSlider ref={sliderRef} compact />
          <TestimonialsSliderControl
            sliderRef={sliderRef}
            justifyContent="center"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Graphic;
