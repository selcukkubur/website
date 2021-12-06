import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import TableBooleanIcon from "../TableBooleanIcon";
import ExternalLink from "components/ExternalLink";
import coreData from "scripts/providers/data/email/core";

const formatCash = (n: any) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

const PricingTableMobile = () => {
  let companyDataPointsKV: any = {
    "Alexa Rank": {},
    Funding: {},
    "Employee Count": {},
    "Founded In": {},
    Headquarters: {},
    "Trustpilot Rating": {},
    "G2 Rating": {},
  };
  const companyDataPoints = Object.keys(companyDataPointsKV);
  const providerDetails: any = {};
  for (let index = 0; index < coreData.length; index++) {
    const providerDetail = coreData[index];
    const {
      id,
      alexa_rank,
      total_funding,
      employee_count,
      founded_in,
      headquarter_city,
      headquarter_country,
      ratings,
      website_url,
      images,
    } = providerDetail;
    providerDetails[id] = {
      website_url,
      images,
    };
    companyDataPointsKV["Alexa Rank"][id] = alexa_rank;
    companyDataPointsKV["Funding"][id] = total_funding;
    companyDataPointsKV["Employee Count"][id] = employee_count;
    companyDataPointsKV["Founded In"][id] = founded_in;
    companyDataPointsKV["Headquarters"][
      id
    ] = `${headquarter_city}, ${headquarter_country}`;
    companyDataPointsKV["Trustpilot Rating"][id] = ratings.trustpilot;
    companyDataPointsKV["G2 Rating"][id] = ratings.g2;
  }
  return (
    <Box mt={"92px"} display={{ base: "block", md: "none" }}>
      <Heading as="h2" mb="42px">
        Company Info
      </Heading>
      <Box>
        {companyDataPoints.map((data, rowIndex) => (
          <Box>
            <Text fontWeight="600" fontSize="lg">
              {data}
            </Text>
            <Box mt={2} mb={"42px"}>
              {Object.keys(companyDataPointsKV[data]).map((provider) => (
                <Flex mb={2}>
                  <ExternalLink to={providerDetails[provider].website_url}>
                    <Flex mr={2}>
                      <Image
                        src={providerDetails[provider].images.company_logo}
                        width={"20px"}
                        height={"20px"}
                        mr={1}
                      />
                      <Text>{providerDetails[provider].name}: </Text>
                    </Flex>
                  </ExternalLink>
                  {rowIndex === 0 &&
                    companyDataPointsKV[data][provider].toLocaleString()}
                  {rowIndex === 1 &&
                    formatCash(companyDataPointsKV[data][provider])}
                  {rowIndex > 1 && companyDataPointsKV[data][provider]}
                </Flex>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricingTableMobile;
