import { Box, Heading, Text, Button } from "@chakra-ui/react";
import ButtonCTAGradient from "components/buttons/CTAGradient";
import { signup, requestDemo } from "constants/urls";
import Container from "components/Container";
import CodeBox from "components/common/CodeBox";
import RightArrow from "components/icons/RightArrow";
import codeExamples from "./codeExamples";
import InternalLink from "components/InternalLink";

const Hero = () => (
  <Container
    maxWidth={1240}
    display="flex"
    flexDirection={{ base: "column", lg: "row" }}
    alignItems={{ base: "center", lg: "stretch" }}
    pt={{ base: "100px", lg: "160px" }}
    pb={{ base: 12, lg: undefined }}
    color="white"
  >
    <Box flex="1" py={2}>
      <Heading as="h1" variant="h1">
        API For App-To-User Communication
      </Heading>
      <Text mt="29px" mb="32px" variant="body1">
        Courier's API and Studio enable developers to deliver the right message
        to the right user at the right time.
      </Text>
      <ButtonCTAGradient text="Get started for free" link={signup} />
      <div>
        <Button
          as={InternalLink}
          to={requestDemo}
          mt={4}
          mb={{ base: "32px", lg: "120px" }}
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
    </Box>

    <Box flex="1" minW={0} width={{ base: "100%", lg: undefined }}>
      <Box
        mt={{ lg: -12 }}
        pt={5}
        pl={{ lg: 5 }}
        minH={{ lg: "546px" }}
        display="flex"
      >
        <CodeBox flexGrow={1} minW={0} examples={codeExamples} />
      </Box>
    </Box>
  </Container>
);

export default Hero;
