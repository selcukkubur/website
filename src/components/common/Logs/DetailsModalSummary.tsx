import dayjs from "dayjs";
import { Box, Text, Heading, SimpleGrid } from "@chakra-ui/react";

import data from "./data";

const DetailsModalSummary = ({
  activeLogIndex,
}: {
  activeLogIndex: number;
}) => (
  <Box p="24px" bgColor="#f8f8f8" flex={1} borderRadius="20px" overflowY="auto">
    <Heading as="h4" fontSize="16px" color="#344563" mb="28px">
      Summary
    </Heading>
    <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
      <Box>
        <Text>Message Id</Text>
        <Text color="#344563">{data[activeLogIndex].message.id}</Text>
      </Box>
      <Box>
        <Text>Recipient</Text>
        <Text color="#344563">
          {data[activeLogIndex].message.recipient || "—"}
        </Text>
      </Box>
      <Box>
        <Text>Enqueued</Text>
        <Text color="#344563">
          {dayjs(data[activeLogIndex].message.enqueued).format(
            "MMM D h:mm:ss a"
          )}
        </Text>
      </Box>
      <Box>
        <Text>Sent</Text>
        <Text color="#344563">
          {data[activeLogIndex].message.sent
            ? dayjs(data[activeLogIndex].message.sent).format("MMM D h:mm:ss a")
            : "—"}
        </Text>
      </Box>
      <Box>
        <Text>First Delivery</Text>
        <Text color="#344563">
          {/* {data[activeLogIndex].message.delivered
        ? dayjs(data[activeLogIndex].message.delivered).format("MMM D h:mm:ss a")
        : "—"} */}
          —
        </Text>
      </Box>
      <Box>
        <Text>Opened</Text>
        <Text color="#344563">
          {/* {data[activeLogIndex].message.opened
        ? dayjs(data[activeLogIndex].message.opened).format("MMM D h:mm:ss a")
        : "—"} */}
          —
        </Text>
      </Box>
      <Box>
        <Text>Clicked</Text>
        <Text color="#344563">
          {/* {data[activeLogIndex].message.clicked
        ? dayjs(data[activeLogIndex].message.clicked).format("MMM D h:mm:ss a")
        : "—"} */}
          —
        </Text>
      </Box>
      <Box>
        <Text>Status</Text>
        <Text color="#344563">
          {data[activeLogIndex].message.status || "—"}
        </Text>
      </Box>
      <Box>
        <Text>Routed To</Text>
        <Text color="#344563">
          {data[activeLogIndex].message.providers
            .map((provider) => provider.provider)
            .join(", ") || "—"}
        </Text>
      </Box>
      <Box>
        <Text>Error Count</Text>
        <Text color="#344563">—</Text>
      </Box>
    </SimpleGrid>
    <Heading as="h4" fontSize="16px" color="#344563" mt="40px" mb="8px">
      List Details
    </Heading>
    <Text color="#4c4c4c">
      The properties below are included when the message was sent using a List
      or Pattern.
    </Text>
    <SimpleGrid columns={2} spacingX="10px" spacingY="20px" mt="20px">
      <Box>
        <Text>List Id</Text>
        <Text color="#344563">{/* {message.listId || "—"} */}—</Text>
      </Box>
      <Box>
        <Text>List Message Id</Text>
        <Text color="#344563">{/* {message.listMessageId || "—"} */}—</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default DetailsModalSummary;
