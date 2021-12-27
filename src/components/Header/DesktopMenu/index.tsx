import React, { useState, useEffect, useRef, useMemo } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import MetaLink from "components/MetaLink";
import type { BlogPost } from "scripts/GetBlogPosts";

import Dropdown, { DropdownProps } from "./Dropdown";

import createItems from "../data";

const DesktopMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownProps | null>(
    null
  );
  const backgroundRef = useRef<HTMLDivElement>(null);
  const activeDropdownRef = useRef<HTMLDivElement>(null);
  const activeMenuItemRef = useRef<HTMLAnchorElement>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const items = useMemo(() => createItems(blogPosts), [blogPosts]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("menu-blog-posts");
    let parsedData = null;
    try {
      parsedData = JSON.parse(storedData || "");
    } catch {}

    if (!parsedData) {
      fetch("/api/menu-blog-posts")
        .then((res) => res.json())
        .then((blogPosts) => {
          sessionStorage.setItem("menu-blog-posts", JSON.stringify(blogPosts));

          setBlogPosts(blogPosts);
        })
        .catch(() => {});
    } else {
      setBlogPosts(parsedData);
    }
  }, []);

  useEffect(() => {
    if (
      !backgroundRef.current ||
      !activeDropdownRef.current ||
      !activeMenuItemRef.current?.parentElement
    )
      return;

    backgroundRef.current.style.width = `${activeDropdownRef.current.offsetWidth}px`;
    backgroundRef.current.style.height = `${activeDropdownRef.current.offsetHeight}px`;
  }, [activeDropdown]);

  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      onMouseLeave={() => {
        setActiveDropdown(null);
      }}
    >
      {items.map((item) => {
        const active = activeDropdown === item.dropdown;
        return (
          <Text
            key={item.label}
            mx="22px"
            variant="body3"
            fontWeight={600}
            onMouseEnter={() => {
              setActiveDropdown(item.dropdown || null);
            }}
            boxShadow={`0 2px ${active ? "currentColor" : "transparent"}`}
            _hover={{ boxShadow: "0 2px currentColor" }}
            transition="0.3s box-shadow"
            pos="relative"
            _after={
              active
                ? {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    left: "-40px",
                    right: "-40px",
                    top: "100%",
                    height: "40px",
                  }
                : {}
            }
          >
            <MetaLink
              as={item.link ? undefined : "span"}
              to={item.link || "/"}
              ref={active ? activeMenuItemRef : undefined}
              cursor="pointer"
              display="block"
              py={1}
            >
              {item.label}
            </MetaLink>
          </Text>
        );
      })}

      <Box
        bgColor="white"
        borderRadius={16}
        pos="absolute"
        top="79px"
        left="50%"
        transform="translateX(-50%)"
        ref={backgroundRef}
        opacity={activeDropdown ? 1 : 0}
        visibility={activeDropdown ? "visible" : "hidden"}
        transition="0.3s"
        overflow="hidden"
        boxShadow="0 4px 12px rgb(0 0 0 / 8%)"
      >
        {items
          .filter((item) => item.dropdown)
          .map((item, index) => {
            const active = activeDropdown === item.dropdown;
            return (
              <Box
                key={index}
                pos="absolute"
                top={0}
                left={0}
                opacity={active ? 1 : 0}
                visibility={active ? "visible" : "hidden"}
                ref={active ? activeDropdownRef : undefined}
                transition="0.2s"
                zIndex={active ? 1 : 0}
              >
                <Dropdown {...item.dropdown} />
              </Box>
            );
          })}
      </Box>
    </Flex>
  );
};

export default DesktopMenu;
