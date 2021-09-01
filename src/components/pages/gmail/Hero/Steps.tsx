import { Flex, Box, Text } from "@chakra-ui/react";
import GoogleButton from "components/buttons/Google";

const ExpandedStep = ({
  step,
  title,
  message,
  children,
}: {
  step: number;
  title: string;
  message: string;
  children: React.ReactNode;
}) => (
  <Flex
    px={{ base: "17px", md: "34px" }}
    bgColor="#F9FAFB"
    borderRadius={6}
    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
  >
    <Box
      fontSize={{ base: 48, md: 64 }}
      fontWeight={800}
      bgClip="text"
      bgGradient="linear-gradient(90deg, #FF5E5E 0%, #9121C2 100%)"
      mr={8}
      ml={{ base: "6px", md: 0 }}
    >
      {step}
    </Box>

    <Box py="23px">
      <Box fontSize={18} fontWeight={700} color="#24324B">
        {title}
      </Box>

      <Text color="#2C1338" variant="body3" mt={2} mb={4} maxWidth="350px">
        {message}
      </Text>

      {children}
    </Box>
  </Flex>
);

const CollapsedStep = ({ step, title }: { step: number; title: string }) => (
  <Flex
    py="11px"
    px={{ base: "17px", md: "34px" }}
    bgColor="#F9FAFB"
    borderRadius={6}
    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
    alignItems="baseline"
    mt="9px"
  >
    <Flex
      w={8}
      h={8}
      borderRadius={16}
      bgColor="#EAE7EB"
      alignItems="center"
      justifyContent="center"
      mr={6}
      flexShrink={0}
    >
      <Box
        fontSize={18}
        fontWeight={800}
        bgClip="text"
        bgGradient="linear-gradient(90deg, #FF5E5E 0%, #9121C2 100%)"
      >
        {step}
      </Box>
    </Flex>
    <Box fontSize={18} fontWeight={700} color="#24324B">
      {title}
    </Box>
  </Flex>
);

const Steps = () => {
  return (
    <Box
      borderRadius={24}
      boxShadow={{ md: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
      bgColor={{ md: "rgba(249, 250, 251, 0.16)" }}
      px={{ md: "32px" }}
      pt={{ base: 4, md: "38px" }}
      pb={{ md: "38px" }}
      maxW="560px"
      mx="auto"
    >
      <ExpandedStep
        step={1}
        title="Create a free Courier account"
        message="Send 10,000 messages per month for free, no credit card required."
      >
        <GoogleButton />
      </ExpandedStep>

      <CollapsedStep step={2} title="Connect your Gmail" />

      <CollapsedStep step={3} title="Make an API call" />
    </Box>
  );
};

export default Steps;
