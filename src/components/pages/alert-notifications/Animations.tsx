import { Flex, Box, Heading } from "@chakra-ui/react";
import Container from "components/Container";
import ButtonCTAColor from "components/buttons/CTAColor";
import ButtonCTASecondary from "components/buttons/CTASecondary";
import VideoAnimation from "components/common/VideoAnimation";
import CodeBox from "components/common/CodeBox";
import { requestDemo, signup } from "constants/urls";

import codeExamples from "./codeExamples";

const Animations = () => (
  <Box bgColor="#fcf1eb" py={{ base: "60px", lg: "100px" }}>
    <Container textAlign="center">
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Flex w={{ lg: "50%" }} flexDirection="column" alignItems="center">
          <Heading as="h3" variant="h3" mb={12} maxW="450px">
            APIs for every use use
          </Heading>
          <Flex
            flexGrow={1}
            flexDir="column"
            justifyContent="center"
            alignSelf="center"
          >
            <CodeBox examples={codeExamples} maxW="580px" />
          </Flex>
        </Flex>
        <Flex
          w={{ lg: "50%" }}
          flexDirection="column"
          alignItems="center"
          mt={{ base: "32px", lg: 0 }}
        >
          <Heading as="h3" variant="h3" mb={12} maxW="450px">
            End-to-end logging and delivery confirmation
          </Heading>
          <Flex
            flexGrow={1}
            flexDir="column"
            justifyContent="center"
            alignSelf="stretch"
          >
            <VideoAnimation
              url="/videos/pages/use-cases/notification-logs.mp4"
              width={632}
              height={529}
            />
          </Flex>
        </Flex>
      </Flex>

      <ButtonCTAColor
        color="primary.violet"
        hoverColor="secondary.violet"
        mt="72px"
        link={requestDemo}
      >
        Request demo
      </ButtonCTAColor>

      <ButtonCTASecondary text="Try free" link={signup} />
    </Container>
  </Box>
);

export default Animations;
