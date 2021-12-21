import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";

import data from "./data";

const ListTable = ({
  setActiveLogIndex,
}: {
  setActiveLogIndex: (activeIndex: number) => void;
}) => (
  <Table fontSize="14px" fontFamily="monospace">
    <Thead>
      <Tr>
        <Th>Sent</Th>
        <Th>Template</Th>
        <Th>Recipient</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((item, index) => (
        <Tr
          key={item.message.id}
          h="64px"
          _hover={{ bgColor: "#eaf5fb", cursor: "pointer" }}
          onClick={() => setActiveLogIndex(index)}
        >
          <Td>
            <Flex alignItems="center">
              {item.message.status === "ENQUEUED" ? (
                <Box w="16px" h="4px" bgColor="#febd2c" borderRadius="2px" />
              ) : ["SENT", "DELIVERED", "OPENED", "CLICKED"].includes(
                  item.message.status
                ) ? (
                <Box
                  m="2px"
                  borderRadius="50%"
                  boxShadow="0 0 0 2px #00c39a"
                  borderWidth="6px"
                  borderColor={
                    item.message.status === "SENT" ? "transparent" : "#00c39a"
                  }
                  borderRightColor={
                    ["OPENED", "DELIVERED"].includes(item.message.status)
                      ? "transparent"
                      : undefined
                  }
                  borderBottomColor={
                    item.message.status === "DELIVERED"
                      ? "transparent"
                      : undefined
                  }
                  transform="rotate(-45deg)"
                />
              ) : (
                <Box
                  borderRadius="50%"
                  w="16px"
                  h="16px"
                  borderWidth="2px"
                  borderColor="#CED5DE"
                  borderStyle="dotted"
                />
              )}

              <Text ml="16px">
                {dayjs(item.message.enqueued).format("h:mm:ss a MMM D")}
              </Text>
            </Flex>
          </Td>
          <Td>{item.message.event}</Td>
          <Td>{item.message.recipient}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default ListTable;
