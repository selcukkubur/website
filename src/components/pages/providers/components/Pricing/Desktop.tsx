import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import ExternalLink from "components/ExternalLink";
import TableHeading from "../../TableHeading";

const PricingTableDesktop = ({
  pricing,
  isComparePage,
}: {
  pricing: [][];
  isComparePage?: boolean;
}) => {
  const tableMenuItems = [];
  for (let index = 0; index < pricing.length; index++) {
    const row: any = pricing[index];
    tableMenuItems.push(row[0]);
  }
  const tableItemsClean = tableMenuItems.splice(1, 1000);
  return (
    <Box mt={"92px"} display={{ base: "none", md: "block" }}>
      <TableHeading headingText="Pricing" isComparePage={isComparePage} />
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
          {tableItemsClean.map((menu, menuIndex: any) => (
            <Box
              p={5}
              borderBottom={
                menuIndex == tableItemsClean.length - 1
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
            {pricing[0].map((provider: any) => (
              <ExternalLink to={provider.split(",")[0]}>
                <Flex pl={5} w={"185px"}>
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

          {pricing.slice(1, 1000).map((row, index) => {
            return (
              <Box
                key={index}
                borderBottom={
                  index == pricing.length - 2 ? "none" : "1px solid #E2E8F0"
                }
                display={isComparePage ? "flex" : "table"}
              >
                <Flex p={5} direction={{ base: "column", md: "row" }}>
                  {row.map((price, index) => (
                    <Box>
                      {index !== 0 && (
                        <Flex
                          w={"185px"}
                          mt={{ base: 2, md: 0 }}
                          height="65px"
                          pt="8px"
                        >
                          {`$${price}`}
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

export default PricingTableDesktop;
