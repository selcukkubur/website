import { Box, Flex, Text, Image } from "@chakra-ui/react";
import TableBooleanIcon from "../TableBooleanIcon";
import ExternalLink from "components/ExternalLink";
import TableHeading from "../../TableHeading";
import React from "react";

const FeaturesTable = ({
  features,
  isComparePage,
}: {
  features: [][];
  isComparePage?: boolean;
}) => {
  const tableMenuItems = [];
  for (let index = 0; index < features.length; index++) {
    const row: any = features[index];
    tableMenuItems.push(row[0]);
  }
  return (
    <Box mt={"92px"} display={{ base: "none", md: "block" }}>
      <TableHeading headingText="Features" isComparePage={isComparePage} />
      <Flex direction={{ base: "column", md: "row" }}>
        <Box borderRight={"1px solid #E2E8F0"}>
          <Flex
            display={{ base: "none", md: "flex" }}
            justify="left"
            align="left"
            bg="tableHeaderBg"
            fontWeight="600"
            borderBottom="1px solid #E2E8F0"
          >
            <Text w={"185px"} height="40px">
              {""}
            </Text>
          </Flex>
          {tableMenuItems.splice(1, 1000).map((menu, tableMenuIndex) => (
            <Box
              p={5}
              borderBottom={tableMenuIndex == 4 ? "none" : "1px solid #E2E8F0"}
            >
              <Text w={"160px"} height="65px" pt="8px">
                {menu}
              </Text>
            </Box>
          ))}
        </Box>
        <Box
          bg="white"
          overflowX={"auto"}
          cursor={isComparePage ? "auto" : "ew-resize"}
        >
          <Flex
            display={{ base: "none", md: "inline-flex" }}
            justify="left"
            align="left"
            bg="tableHeaderBg"
            borderBottom="1px solid #E2E8F0"
          >
            {features[0].map((provider: any, providerIndex: any) => (
              <ExternalLink to={provider.split(",")[0]}>
                <Flex
                  pl={5}
                  w={"185px"}
                  ml={providerIndex === 0 ? "0" : "40px"}
                >
                  <Image
                    src={provider.split(",")[1]}
                    w={"24px"}
                    h={"24px"}
                    mr={2}
                  />
                  <Text height="40px" fontWeight="600">
                    {provider.split(",")[2]}
                  </Text>
                </Flex>
              </ExternalLink>
            ))}
          </Flex>

          {features.slice(1, 1000).map((row, macroIndex: any) => {
            return (
              <Box
                key={macroIndex}
                borderBottom={
                  macroIndex == features.length - 2
                    ? "none"
                    : "1px solid #E2E8F0"
                }
                display={isComparePage ? "flex" : "table"}
              >
                <Flex
                  p={5}
                  direction={{ base: "column", md: "row" }}
                  height={macroIndex == features.length - 2 ? "450px" : "auto"}
                >
                  {row.map((feature, index) => (
                    <Box>
                      {index !== 0 && (
                        <Flex
                          w={"185px"}
                          mt={{ base: 2, md: 0 }}
                          height="65px"
                          pt="8px"
                          ml={index === 1 ? "0" : "40px"}
                        >
                          <Text display={{ base: "block", md: "none" }} mr={4}>
                            Name:{" "}
                          </Text>
                          {typeof feature === "boolean" ? (
                            <TableBooleanIcon booleanValue={feature} />
                          ) : (
                            feature
                          )}
                        </Flex>
                      )}
                    </Box>
                  ))}
                </Flex>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default FeaturesTable;
