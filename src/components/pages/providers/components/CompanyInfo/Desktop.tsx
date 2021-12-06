import { Box, Flex, Text, Image } from "@chakra-ui/react";
import ExternalLink from "components/ExternalLink";
import TableHeading from "../../TableHeading";
import React from "react";

const formatCash = (n: any) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

const FeaturesTable = ({
  companyInfo,
  isComparePage,
}: {
  companyInfo: [][];
  isComparePage?: boolean;
}) => {
  const tableMenuItems = [];
  for (let index = 0; index < companyInfo.length; index++) {
    const row: any = companyInfo[index];
    tableMenuItems.push(row[0]);
  }
  const tableMenuItemsClean = tableMenuItems.splice(1, 1000);
  return (
    <Box mt={"92px"} display={{ base: "none", md: "block" }}>
      <TableHeading headingText="Company Info" isComparePage={isComparePage} />
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
          {tableMenuItemsClean.map((menu, tableMenuIndex) => (
            <Box
              p={5}
              borderBottom={
                tableMenuIndex == tableMenuItemsClean.length - 1
                  ? "none"
                  : "1px solid #E2E8F0"
              }
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
            {companyInfo[0].map((provider: any, providerIndex: any) => (
              <ExternalLink to={provider.split(",")[0]}>
                <Flex
                  pl={5}
                  w={"185px"}
                  ml={providerIndex === 0 ? "0" : "10px"}
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

          {companyInfo.slice(1, 1000).map((row, rowIndex) => {
            return (
              <Box
                key={rowIndex}
                borderBottom={
                  rowIndex == companyInfo.length - 2
                    ? "none"
                    : "1px solid #E2E8F0"
                }
                display={isComparePage ? "flex" : "table"}
              >
                <Flex p={5} direction={{ base: "column", md: "row" }}>
                  {row.map((feature: any, index) => (
                    <Box>
                      {index !== 0 && (
                        <Flex
                          w={"185px"}
                          mt={{ base: 2, md: 0 }}
                          height="65px"
                          pt="8px"
                          ml={index === 1 ? "0" : "10px"}
                        >
                          {rowIndex === 0 && feature.toLocaleString()}
                          {rowIndex === 1 && formatCash(feature)}
                          {rowIndex > 1 && feature}
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
