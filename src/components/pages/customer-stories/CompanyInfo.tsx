import { Box, Text, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from "next/image";

import { CustomerStory } from "scripts/GetCustomerStories";

import PurpleBgButton from "components/buttons/PurpleBg";

import { requestDemo } from "constants/urls";

interface CompanyInfoProps {
  customerStory: CustomerStory;
}

const CompanyInfo = ({ customerStory }: CompanyInfoProps) => {
  const { companyLogo } = customerStory.fields;

  return (
    <>
      <Flex
        flexDir="column"
        p="24px"
        borderRadius={10}
        boxShadow="0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)"
      >
        <Box alignSelf="center">
          <Image
            src={`https:${companyLogo.fields.file.url}`}
            width={companyLogo.fields.file.details.image.width}
            height={companyLogo.fields.file.details.image.height}
            alt="Company Logo"
          />
        </Box>

        <Text mt={4}>Features Used</Text>
        <UnorderedList listStyleType="none" ml={6} mb={2}>
          {customerStory.fields.usedFeatures.map((feature, index) => (
            <ListItem key={index} mt={4}>
              <Text variant="body3" as="span">
                {feature}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>

      <Text color="#8C8F95" variant="body3" textAlign="center" mt={10} mb={4}>
        Ready to get started?
      </Text>

      <PurpleBgButton
        width="156px"
        height="48px"
        cursor="pointer"
        mx="auto"
        link={requestDemo}
      >
        Request Demo
      </PurpleBgButton>
    </>
  );
};

export default CompanyInfo;
