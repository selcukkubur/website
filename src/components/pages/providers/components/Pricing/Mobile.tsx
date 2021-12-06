import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import TableBooleanIcon from "../TableBooleanIcon";
import ExternalLink from "components/ExternalLink";
import pricingData from "scripts/providers/data/email/pricing";
import coreData from "scripts/providers/data/email/core";

const pricingDataAny: any = pricingData;
const PricingTableMobile = () => {
  const providers = Object.keys(pricingData);
  const tiers = Object.keys(pricingData.postmark!.tiers);
  const tiersData: any = {};
  for (let index = 0; index < tiers.length; index++) {
    const tierForProviders: any = {};
    const tier = tiers[index];
    for (let index = 0; index < providers.length; index++) {
      const provider: any = providers[index];
      pricingData;
      tierForProviders[provider] = pricingDataAny[provider]["tiers"][tier];
    }
    tiersData[tier] = tierForProviders;
  }
  const providerDetails: any = {};
  for (let index = 0; index < coreData.length; index++) {
    const providerDetail = coreData[index];
    const { id, name, images, website_url } = providerDetail;
    providerDetails[id] = { name, images, website_url };
  }
  return (
    <Box mt={"92px"} display={{ base: "block", md: "none" }}>
      <Heading as="h2" mb="42px">
        Pricing
      </Heading>
      <Box>
        {tiers.map((tier) => (
          <Box>
            <Text fontWeight="600" fontSize="lg">
              {tier}
            </Text>
            <Box mt={2} mb={"42px"}>
              {Object.keys(tiersData[tier]).map((provider) => (
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
                  {typeof tiersData[tier][provider] === "boolean" ? (
                    <TableBooleanIcon
                      booleanValue={tiersData[tier][provider]}
                    />
                  ) : (
                    <Text>${tiersData[tier][provider]}</Text>
                  )}
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
