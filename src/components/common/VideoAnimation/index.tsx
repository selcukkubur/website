import React from "react";
import { Flex, Box } from "@chakra-ui/react";

interface VideoAnimationProps {
  url: string;
  width: number;
  height: number;
}

const VideoAnimation = ({ url, width, height }: VideoAnimationProps) => (
  <Box maxW={`${width}px`} w="100%" pos="relative" mx="auto">
    <Box pt={`${(height / width) * 100}%`} />
    <Flex direction="column" pos="absolute" top={0} left={0} w="100%" h="100%">
      <video autoPlay loop muted playsInline>
        <source src={url} type="video/mp4" />
      </video>
    </Flex>
  </Box>
);

export default VideoAnimation;
