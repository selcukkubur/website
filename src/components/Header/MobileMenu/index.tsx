import { useMemo } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  DrawerCloseButton,
  Accordion,
} from "@chakra-ui/react";
import HamburgerButton from "components/buttons/MobileHamburger";
import ColoredLogo from "components/LogoColored";
import SingleItem from "./SingleItem";
import ItemWithChildren from "./ItemWithChildren";
import createItems from "../data";

interface MobileMenuProps {
  stickyHeader: boolean;
}

const MobileMenu = ({ stickyHeader }: MobileMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const items = useMemo(() => createItems(), []);

  return (
    <>
      <Box display={{ base: "block", lg: "none" }}>
        <HamburgerButton
          width="40px"
          height="32px"
          ml={4}
          stickyHeader={stickyHeader}
          onClick={onOpen}
        />
      </Box>
      <Box zIndex="-200">
        <Drawer
          placement={"left"}
          onClose={onClose}
          isOpen={isOpen}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent bg="#FFF">
            <DrawerCloseButton
              verticalAlign="middle"
              bg="linear-gradient(119.01deg,rgba(145,33,194,.15) -91.42%,rgba(253,137,122,0) 124.02%)"
              mt={"12px"}
              mr={"10px"}
              boxSize={"40px"}
              sx={{
                _hover: {
                  opacity: ".8",
                },
              }}
            />
            <DrawerHeader mt={"12px"} ml={"10px"}>
              <ColoredLogo />
            </DrawerHeader>
            <DrawerBody>
              <Accordion w={{ base: "100%" }} mt={"62px"} allowToggle>
                {items.map((item) => {
                  if (item.dropdown) {
                    return (
                      <ItemWithChildren
                        label={item.label}
                        items={[
                          ...(item.dropdown.topHighlight
                            ? [item.dropdown.topHighlight]
                            : []),
                          ...(item.dropdown.items || []),
                          ...(item.dropdown.sidebar?.items || []),
                          ...(item.dropdown.columns?.flatMap(
                            (col) => col.items
                          ) || []),
                          ...(item.dropdown.bottomHighlight
                            ? [item.dropdown.bottomHighlight]
                            : []),
                        ]}
                        key={item.label}
                      />
                    );
                  } else {
                    return (
                      <SingleItem
                        label={item.label}
                        link={item.link || "/"}
                        key={item.label}
                      />
                    );
                  }
                })}
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default MobileMenu;
