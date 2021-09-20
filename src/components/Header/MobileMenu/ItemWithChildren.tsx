import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import MetaLink from "components/MetaLink";

interface ItemWithChildrenProps {
  title: string;
  items: any[];
  key: string;
}

interface CustomMenuProps {
  children: React.ReactNode;
  [x: string]: any;
}

const CustomMenuItem = ({ children, ...other }: CustomMenuProps) => (
  <Text
    {...other}
    fontWeight={500}
    fontSize="13px"
    lineHeight={"19.5px"}
    _hover={{
      backgroundColor: "rgba(44,19,56,.04)",
      borderRadius: "8px",
      "[fill=currentColor]": { fill: "url('#gradient')" },
      "[stroke=currentColor]": { stroke: "url('#gradient')" },
    }}
    style={{ transition: "all .3s ease-in-out" }}
  >
    {children}
  </Text>
);

const ItemWithChildren = ({ title, items, key }: ItemWithChildrenProps) => (
  <AccordionItem key={title} p="28px 0 20px">
    <AccordionButton pt={0} _hover={{ backgroundColor: "#FFFFFF" }}>
      <Box flex="1" textAlign="left">
        <Heading variant="h4" width="fit-content" color="secondary.dark">
          {title}
        </Heading>
      </Box>
      <AccordionIcon fontSize="2rem" />
    </AccordionButton>
    <AccordionPanel pb={0} pt={6}>
      {items.map((childMenu) => (
        <MetaLink
          to={childMenu.link}
          linkType={childMenu.isExternalLink ? "external" : "internal"}
        >
          <CustomMenuItem p={"11px 12px"}>
            <Box display="inline-block" verticalAlign="middle">
              {childMenu.icon && React.createElement(childMenu.icon)}
            </Box>{" "}
            &nbsp; {childMenu.title}
          </CustomMenuItem>
        </MetaLink>
      ))}
    </AccordionPanel>
  </AccordionItem>
);

export default ItemWithChildren;
