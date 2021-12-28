import React, { useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Search from "./Search";
import InternalLink from "components/InternalLink";

const Desktop = ({ data, slug }: { data: any[]; slug: string }) => {
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <Box
      color="secondary.dark"
      boxShadow="0 10px 30px rgb(0 0 0 / 8%)"
      p={"20px 20px"}
      h="fit-content"
    >
      <Search />
      {data.map((menu, index) => (
        <Box onClick={() => setSelectedMenu(menu.name)} key={menu.name}>
          <InternalLink
            to={menu.slug === "home" ? `/blog` : `/blog/tags/${menu.slug}`}
          >
            <Box
              py="10px"
              bg={slug == menu.slug ? "#F7F6F7" : "#FFF"}
              variant="body3"
              pl={"20px"}
              borderRadius="6px"
            >
              <Text
                as="div"
                sx={{
                  "&":
                    slug == menu.slug
                      ? {
                          background:
                            "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          width: "fit-content",
                        }
                      : {},
                }}
              >
                {menu.name}
                {menu.name === selectedMenu && <Spinner size="xs" ml={2} />}
              </Text>
            </Box>
          </InternalLink>
        </Box>
      ))}
    </Box>
  );
};

export default Desktop;
