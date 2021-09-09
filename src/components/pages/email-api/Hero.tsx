import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import { signup, requestDemo } from "constants/urls";
import RightArrow from "components/icons/RightArrow";
import InternalLink from "components/InternalLink";
import FeatureSection from "components/common/FeatureSection";

import email from "../../../../public/images/pages/email/email.svg";

const Hero = () => (
  <Box
    mb={8}
    background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
    backgroundSize="cover"
    borderRadius="0 0 40px 40px"
  >
    <FeatureSection
      graphicAlignment="right"
      graphic={
        <Box pl={{ lg: 5 }}>
          <Image src={email} alt="Email notification view" />
        </Box>
      }
      pt={{ base: "100px", lg: "160px" }}
      pb={{ base: 12, lg: 2 }}
      color="white"
    >
      <Heading as="h1" variant="h1">
        The most powerful transactional email API ever built.
      </Heading>
      <Text mt="29px" mb="32px" variant="body1">
        Courier is the notification infrastructure for your application. Manage
        templates, deliverability, routing, and user preferences all in a single
        API.
      </Text>
      <ButtonCTAGradient text="Get started for free" link={signup} />
      <div>
        <Button
          as={InternalLink}
          to={requestDemo}
          mt={4}
          mb={{ lg: "120px" }}
          variant="ghost"
          rightIcon={<RightArrow />}
          p={0}
          transition="all .3s cubic-bezier(.645,.045,.355,1)"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          sx={{
            span: {
              transition: "all .3s ease-in-out",
            },
            ":hover span": {
              transform: "translateX(3px)",
            },
          }}
        >
          <Text
            transition="all .3s ease-in-out"
            variant="body3medium"
            fontWeight="600"
          >
            Request a Demo
          </Text>
        </Button>
      </div>
    </FeatureSection>
  </Box>
);

export default Hero;
