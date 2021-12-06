import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import TableBooleanIcon from "../TableBooleanIcon";
import ExternalLink from "components/ExternalLink";
import featuresData from "scripts/providers/data/email/features";
import coreData from "scripts/providers/data/email/core";

const FeaturesTableMobile = () => {
  const features = Object.keys(featuresData);
  const providerDetails: any = {};
  for (let index = 0; index < coreData.length; index++) {
    const providerDetail = coreData[index];
    const { id, name, images, website_url } = providerDetail;
    providerDetails[id] = { name, images, website_url };
  }
  return (
    <Box mt={"92px"} display={{ base: "block", md: "none" }}>
      <Heading as="h2" mb="42px">
        Features
      </Heading>
      <Box>
        {features.map((feature) => (
          <Box>
            <Text fontWeight="600" fontSize="lg">
              {feature}
            </Text>
            <Box mt={2} mb={"42px"}>
              {Object.keys(featuresData[feature]).map((provider) => (
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
                  {typeof featuresData[feature][provider] === "boolean" ? (
                    <TableBooleanIcon
                      booleanValue={featuresData[feature][provider]}
                    />
                  ) : (
                    <Text
                      pl={
                        feature.startsWith(
                          "Threshold for free plan and dedicated IP"
                        )
                          ? 6
                          : 0
                      }
                    >
                      {featuresData[feature][provider]}
                    </Text>
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

export default FeaturesTableMobile;
