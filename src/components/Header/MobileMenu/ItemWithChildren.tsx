import React from "react";
import Image, { ImageProps } from "next/image";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import MetaLink from "components/MetaLink";

interface ItemWithChildrenProps {
  label: string;
  items: { link: string; label: string; icon?: ImageProps["src"] }[];
}

interface CustomMenuProps {
  children: React.ReactNode;
  [x: string]: any;
}

const CustomMenuItem = ({ children, ...other }: CustomMenuProps) => (
  <Text
    as="div"
    {...other}
    fontWeight={500}
    fontSize="13px"
    lineHeight={"19.5px"}
    _hover={{
      backgroundColor: "rgba(44,19,56,.04)",
      borderRadius: "8px",
    }}
    style={{ transition: "all .3s ease-in-out" }}
    display="flex"
    alignItems="center"
    py={2}
  >
    {children}
  </Text>
);

const ItemWithChildren = ({ label, items }: ItemWithChildrenProps) => (
  <AccordionItem p="28px 0 20px" borderBottom={0} _first={{ borderTop: 0 }}>
    <AccordionButton pt={0} _hover={{ backgroundColor: "#FFFFFF" }}>
      <Box flex="1" textAlign="left">
        <Heading variant="h4" width="fit-content" color="secondary.dark">
          {label}
        </Heading>
      </Box>
      <AccordionIcon fontSize="2rem" />
    </AccordionButton>
    <AccordionPanel pb={0} pt={6}>
      {items.map((childMenu, index) => (
        <MetaLink to={childMenu.link} key={index}>
          <CustomMenuItem>
            <Flex
              w={8}
              h={8}
              alignItems="center"
              justifyContent="center"
              mr={2}
            >
              {childMenu.icon && <Image src={childMenu.icon} />}
            </Flex>
            {childMenu.label}
          </CustomMenuItem>
        </MetaLink>
      ))}
    </AccordionPanel>
  </AccordionItem>
);

export default ItemWithChildren;
