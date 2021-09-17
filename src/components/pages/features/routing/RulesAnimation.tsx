import { useState, useEffect } from "react";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import Image from "next/image";

const TRANSITION = "0.2s";

const AddChannelLink = ({ shown, ...props }: { shown: boolean } & BoxProps) => (
  <Box
    {...props}
    my="16px"
    fontWeight={500}
    fontSize={9}
    bgGradient="linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)"
    bgClip="text"
    textAlign="center"
    transform={`translateY(${shown ? 0 : -10}px)`}
    opacity={shown ? 1 : 0}
    transition={TRANSITION}
  >
    + Add Channel
  </Box>
);

const Channel = ({
  label,
  image,
  active,
}: {
  label: string;
  image: React.ReactNode;
  active: boolean;
}) => (
  <Flex
    alignItems="center"
    height="30px"
    mt="8px"
    px="10px"
    borderRadius={6}
    bgColor={active ? "#9121C2" : "rgba(44, 19, 56, 0.4)"}
    color="white"
    fontSize={9}
    fontWeight={500}
    transition={TRANSITION}
  >
    <Flex width="16px" mr="6px" alignItems="center" justifyContent="center">
      {image}
    </Flex>
    {label}
  </Flex>
);

const Toggle = ({ active, ...props }: { active: boolean } & BoxProps) => (
  <Box
    {...props}
    width="48px"
    height="28px"
    borderRadius={14}
    boxShadow={active ? undefined : "inset 0 0 0 2px #FCEDE3"}
    transition={TRANSITION}
    overflow="hidden"
  >
    <Box
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgGradient="linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)"
      opacity={active ? 1 : 0}
      transition={TRANSITION}
    />
    <Box
      width="28px"
      height="28px"
      p="2px"
      borderRadius="100%"
      bg={
        active ? "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)" : "#FCEDE3"
      }
      transform={`translateX(${active ? 20 : 0}px)`}
      transition={TRANSITION}
    >
      <Box width="100%" h="100%" bgColor="white" borderRadius="100%" />
    </Box>
  </Box>
);

const RulesAnimation = () => {
  const [toggleEnabled, setToggleEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setToggleEnabled((enabled) => !enabled),
      3000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="960px" position="relative">
      <Image
        src={require("../../../../../public/images/pages/features/routing/animation-bg.png")}
        alt="Template Samples"
        quality={100}
      />

      <Box
        pos="absolute"
        top="28%"
        left="9.1%"
        w="15%"
        pointerEvents="none"
        userSelect="none"
      >
        <AddChannelLink shown={toggleEnabled} />

        <Box
          color="rgba(44, 19, 56, 0.56)"
          fontSize={8}
          mt="15px"
          transform={`translateY(${toggleEnabled ? 0 : -10}px)`}
          opacity={toggleEnabled ? 1 : 0}
          transition="0.2s"
        >
          Send notification to the best of
        </Box>

        <Box
          transform={`translateY(${toggleEnabled ? 0 : "-56px"})`}
          transition="0.2s"
        >
          <Channel
            label="Twilio"
            active={!toggleEnabled}
            image={
              <Image
                src={require("../../../../../public/images/pages/features/routing/twilio.svg")}
              />
            }
          />

          <Channel
            label="Postmark"
            active={!toggleEnabled}
            image={
              <Image
                src={require("../../../../../public/images/pages/features/routing/postmark.svg")}
              />
            }
          />

          <AddChannelLink shown={!toggleEnabled} />
        </Box>
      </Box>

      <Toggle active={toggleEnabled} pos="absolute" top="37%" left="39%" />
    </Box>
  );
};

export default RulesAnimation;
