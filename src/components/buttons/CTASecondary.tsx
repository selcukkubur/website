import { Text, Button } from "@chakra-ui/react";
import RightArrow from "components/icons/RightArrow";
import InternalLink from "components/InternalLink";

interface CTASecondaryProps {
  text: string;
  link: string;
}

const CTASecondary = ({ text, link }: CTASecondaryProps) => (
  <div>
    <Button
      as={InternalLink}
      to={link}
      mt={4}
      variant="ghost"
      rightIcon={<RightArrow />}
      p={0}
      transition="all .3s cubic-bezier(.645,.045,.355,1)"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      sx={{
        span: {
          transition: "all .3s ease-in-out",
        },
        ":hover span": {
          transform: "translateX(3px)",
        },
      }}
    >
      <Text
        transition="all .3s ease-in-out"
        variant="body3medium"
        fontWeight="600"
      >
        {text}
      </Text>
    </Button>
  </div>
);

export default CTASecondary;
