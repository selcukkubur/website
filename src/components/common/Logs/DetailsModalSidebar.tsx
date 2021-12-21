import dayjs from "dayjs";
import { startCase } from "lodash";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  ButtonProps,
} from "@chakra-ui/react";

import data from "./data";

const GhostButton = ({
  active,
  ...props
}: ButtonProps & { active: boolean }) => (
  <Button
    variant="ghost"
    isFullWidth
    justifyContent="flex-start"
    fontWeight={400}
    h="36px"
    fontSize="inherit"
    color="#344563"
    px="10px"
    bgColor={active ? "#dbf1ff" : undefined}
    {...props}
  />
);

const DetailsModalSidebar = ({
  activeLogIndex,
  activeTabIndex,
  setActiveTabIndex,
}: {
  activeLogIndex: number;
  activeTabIndex: number;
  setActiveTabIndex: (activeTabIndex: number) => void;
}) => (
  <Flex flexDir="column" w="330px" pl="14px" pr="24px" pt="10px">
    <Text>Log Details</Text>
    <Heading as="h3" color="#9121c2" fontSize="16px" fontWeight={400}>
      {data[activeLogIndex].message.event}
    </Heading>

    <Box pos="relative" mt="10px">
      {activeTabIndex === -1 && (
        <Box
          position="absolute"
          top={0}
          left="-24px"
          bottom={0}
          w="3px"
          bgColor="#1b98e0"
          borderRightRadius="24px"
        />
      )}
      <GhostButton
        px="24px"
        active={activeTabIndex === -1}
        onClick={() => setActiveTabIndex(-1)}
      >
        Summary
      </GhostButton>
    </Box>
    <Box w="40px" borderWidth={1} borderColor="#cbd5e0" mx="auto" my="12px" />
    <Heading as="h4" mb="4px" color="#344563" fontSize="16px">
      Timeline
    </Heading>
    <Text>
      {dayjs(data[activeLogIndex].message.enqueued).format("MMM D h:mm:ss a")}
    </Text>
    <Box overflowY="auto" mt="12px">
      {data[activeLogIndex].logs.map((log, index) => (
        <Flex key={log.id} alignItems="center">
          <Text fontStyle="italic" w="140px">
            {dayjs(log.timestamp).format("h:mm:ss a")}
          </Text>
          <Box
            w="10px"
            m="6px"
            borderWidth="1px"
            borderColor="#cbd5e0"
            flexShrink={0}
          />
          <GhostButton
            ml="6px"
            active={activeTabIndex === index}
            onClick={() => setActiveTabIndex(index)}
          >
            {startCase(log.type.split(":")[1])}
          </GhostButton>
        </Flex>
      ))}
    </Box>
  </Flex>
);

export default DetailsModalSidebar;
