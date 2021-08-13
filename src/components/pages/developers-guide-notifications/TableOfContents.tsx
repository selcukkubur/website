import { useRouter } from "next/router";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";

import Introduction from "./Introduction";
import EndUserExperience from "./EndUserExperience";
import InternalUserExperience from "./InternalUserExperience";
import TechnicalRequirements from "./TechnicalRequirements";

export const PAGE_COMPONENTS = {
  "": Introduction,
  "end-user-experience-requirements": EndUserExperience,
  "internal-user-experience-requirements": InternalUserExperience,
  "technical-requirements": TechnicalRequirements,
};

export type PAGE_PATH = keyof typeof PAGE_COMPONENTS;

export const PAGE_TITLES: Record<PAGE_PATH, string> = {
  "": "Introduction",
  "end-user-experience-requirements": "End User Experience Requirements",
  "internal-user-experience-requirements":
    "Internal User Experience Requirements",
  "technical-requirements": "Technical Requirements",
};

export const PAGE_DESCRIPTIONS: Record<PAGE_PATH, string> = {
  "": "A complete guide for developers who are building out a notification system for their application. This guide covers the internal user experience, end user experience, and techincal requirements for building a notification system.",
  "end-user-experience-requirements":
    "A complete guide for developers who are building out a notification system for their application. This guide covers the internal user experience, end user experience, and techincal requirements for building a notification system.",
  "internal-user-experience-requirements":
    "A complete guide for developers who are building out a notification system for their application. This guide covers the internal user experience, end user experience, and techincal requirements for building a notification system.",
  "technical-requirements":
    "A complete guide for developers who are building out a notification system for their application. This guide covers the internal user experience, end user experience, and techincal requirements for building a notification system.",
};

const TableOfContents = () => {
  const router = useRouter();
  const slug = router.query.slug?.[0] || "";

  return (
    <Box
      pos={{ lg: "sticky" }}
      top="100px"
      width={{ base: "100%", lg: "250px" }}
      mt={{ base: "60px", lg: "100px" }}
      mr={{ lg: 16 }}
      p="18px 24px"
      borderRadius={10}
      bgColor="white"
      boxShadow="0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)"
    >
      <UnorderedList margin={0} listStyleType="none">
        {Object.entries(PAGE_TITLES).map(([path, title]) => {
          const active = slug === path;

          return (
            <ListItem key={path} my={3}>
              <InternalLink
                to={`${router.pathname.replace("[[...slug]]", path)}#content`}
                color={active ? "secondary.dark" : "rgba(26, 32, 44, 0.5)"}
                _hover={{ color: "secondary.dark" }}
              >
                {active && (
                  <Box
                    display="inline-block"
                    verticalAlign="middle"
                    mr="6px"
                    width={1}
                    height={1}
                    bgColor="secondary.dark"
                    borderRadius={4}
                  />
                )}

                {title}
              </InternalLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default TableOfContents;
