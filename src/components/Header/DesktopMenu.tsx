import React from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MetaLink from "components/MetaLink";
import data from "./data";

interface CustomMenuProps {
  children: React.ReactNode;
  menuTitle: string;
  [x: string]: any;
}

const DesktopMenu = () => {
  const CustomMenuItem = ({
    children,
    menuTitle,
    ...other
  }: CustomMenuProps) => (
    <MenuItem
      {...other}
      fontWeight={500}
      fontSize="13px"
      lineHeight={"19.5px"}
      _hover={{
        backgroundColor: "rgba(44,19,56,.04)",
        "[fill=currentColor]": { fill: "url('#gradient')" },
        "[stroke=currentColor]": { stroke: "url('#gradient')" },
      }}
      style={{ transition: "all .3s ease-in-out" }}
    >
      {children}
    </MenuItem>
  );

  return (
    <Flex display={{ base: "none", lg: "flex" }}>
      {data.map((menu) => {
        if (menu.items) {
          return (
            <Menu isLazy key={menu.title}>
              <MenuButton
                as={Text}
                p="0 20px"
                variant="smallbody1"
                fontWeight="500"
                cursor="pointer"
              >
                {menu.title}
                <span style={{ paddingLeft: "4px" }}>
                  <ChevronDownIcon />
                </span>
              </MenuButton>
              <MenuList
                color="secondary.dark"
                minWidth="200px"
                py={3}
                borderRadius="16px"
              >
                {menu.items.map((childMenu: any) => (
                  <MetaLink
                    to={childMenu.link}
                    linkType={
                      childMenu.isExternalLink ? "external" : "internal"
                    }
                    key={childMenu.title}
                  >
                    <CustomMenuItem py={3} menuTitle={childMenu.title}>
                      {childMenu.icon && React.createElement(childMenu.icon)}{" "}
                      &nbsp; {childMenu.title}
                    </CustomMenuItem>
                  </MetaLink>
                ))}
              </MenuList>
            </Menu>
          );
        } else {
          return (
            <MetaLink to={menu.link} linkType={"internal"} key={menu.title}>
              <Text p="0 20px" variant="smallbody1" fontWeight="500">
                {menu.title}
              </Text>
            </MetaLink>
          );
        }
      })}
    </Flex>
  );
};

export default DesktopMenu;
