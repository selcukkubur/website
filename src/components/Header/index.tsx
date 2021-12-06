import React, { useEffect, useState } from "react";
import { Icon, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import LogoIcon from "components/Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import InternalLink from "components/InternalLink";
import PurpleBgButton from "components/buttons/PurpleBg";
import WhiteBgButton from "components/buttons/WhiteBg";
import { login, signup } from "constants/urls";
import Experiment from "components/Experiment";

interface Props {
  headerPlain?: boolean;
  noHeaderBoxShadow?: boolean;
}

const Header = ({ headerPlain, noHeaderBoxShadow }: Props) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [plainHeader, setPlainHeader] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 60) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  useEffect(() => {
    if (headerPlain) {
      setPlainHeader(true);
    }
    window.addEventListener("scroll", listenScrollEvent);
  });

  const signupLabel = useBreakpointValue({
    base: "Sign Up",
    lg: "Get started for free",
  });
  const loginButton = (
    <Text
      as={InternalLink}
      to={login}
      variant="body3"
      fontWeight={600}
      py={1}
      transition="0.3s box-shadow"
      boxShadow="0 2px transparent"
      _hover={{ boxShadow: "0 2px currentColor" }}
    >
      Log In
    </Text>
  );

  return (
    <Flex
      w={"100%"}
      color={stickyHeader || plainHeader ? "secondary.dark" : "white"}
      justify="center"
      backgroundColor={stickyHeader ? "white" : "transparent"}
      position="fixed"
      top="0"
      p="15px 0 17px"
      align="center"
      zIndex="999"
      boxShadow={
        stickyHeader && !noHeaderBoxShadow ? "0 4px 12px rgb(0 0 0 / 8%)" : ""
      }
    >
      <Flex
        justify="space-between"
        w="100%"
        maxW="1240px"
        align="center"
        p="0 20px"
      >
        <InternalLink to="/" aria-label="Courier Logo">
          <Icon as={LogoIcon} transition="all .3s ease-in-out" />
        </InternalLink>
        <DesktopMenu />

        <Experiment name="Header Sign Up Copy">
          <Experiment.Variant key="a">
            <Flex
              alignItems="center"
              justifyContent="flex-end"
              w={{ lg: "236px" }}
            >
              {loginButton}
              {stickyHeader || plainHeader ? (
                <PurpleBgButton
                  width={{ base: "78px", lg: "88px" }}
                  height={{ base: "32px", lg: "40px" }}
                  link={signup}
                  ml="22px"
                >
                  Sign Up
                </PurpleBgButton>
              ) : (
                <WhiteBgButton
                  width={{ base: "78px", lg: "88px" }}
                  height={{ base: "32px", lg: "40px" }}
                  link={signup}
                  ml="22px"
                >
                  Sign Up
                </WhiteBgButton>
              )}
              <MobileMenu stickyHeader={stickyHeader || plainHeader} />
            </Flex>
          </Experiment.Variant>
          <Experiment.Variant key="b">
            <Flex
              alignItems="center"
              justifyContent="flex-end"
              w={{ lg: "236px" }}
            >
              {loginButton}
              {stickyHeader || plainHeader ? (
                <PurpleBgButton
                  width={{ base: "78px", lg: "172px" }}
                  height={{ base: "32px", lg: "40px" }}
                  link={signup}
                  ml="22px"
                >
                  {signupLabel}
                </PurpleBgButton>
              ) : (
                <WhiteBgButton
                  width={{ base: "78px", lg: "172px" }}
                  height={{ base: "32px", lg: "40px" }}
                  link={signup}
                  ml="22px"
                >
                  {signupLabel}
                </WhiteBgButton>
              )}
              <MobileMenu stickyHeader={stickyHeader || plainHeader} />
            </Flex>
          </Experiment.Variant>
        </Experiment>
      </Flex>
    </Flex>
  );
};

export default Header;
