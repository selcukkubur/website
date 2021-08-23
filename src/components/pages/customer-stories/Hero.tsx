import { Box, Heading } from "@chakra-ui/react";
import Container from "components/Container";

import { CustomerStory } from "scripts/GetCustomerStories";

import heroPattern from "../../../../public/images/pages/customer-stories/hero-pattern.svg";

interface HeroProps {
  customerStory: CustomerStory;
}

const Hero = ({ customerStory }: HeroProps) => {
  return (
    <Box
      pt={{ base: "100px", lg: "220px" }}
      pb={{ lg: "114px" }}
      bgImage={`url(${heroPattern.src})`}
      bgSize="110%"
      bgPos="center"
    >
      <Container maxWidth={1240}>
        <Heading
          as="h1"
          variant="h2"
          lineHeight={{ lg: "64px" }}
          bgGradient="linear-gradient(90deg, #FD5E5F 0%, #C84093 50.52%, #9121C1 100%)"
          backgroundClip="text"
          maxW="900px"
        >
          {customerStory.fields.title}
        </Heading>
      </Container>
    </Box>
  );
};

export default Hero;
