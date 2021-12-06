import MetaLink from "components/MetaLink";
import { Box, AccordionItem, AccordionButton, Heading } from "@chakra-ui/react";

interface SingleItemProps {
  label: string;
  link: string;
}

const SingleItemMobileMenu = ({ label, link }: SingleItemProps) => (
  <MetaLink to={link}>
    <AccordionItem
      borderBottom={0}
      key={label}
      p={label == "Features" ? "0px 0 20px" : "28px 0 20px"}
    >
      <AccordionButton pt={0} _hover={{ backgroundColor: "#FFFFFF" }}>
        <Box flex="1" textAlign="left">
          <Heading variant="h4" width="fit-content" color="secondary.dark">
            {label}
          </Heading>
        </Box>
      </AccordionButton>
    </AccordionItem>
  </MetaLink>
);

export default SingleItemMobileMenu;
