import { Button, ButtonProps } from "@chakra-ui/react";
import RightArrow from "components/icons/RightArrow";
import InternalLink from "components/InternalLink";

interface CTAColorProps extends Omit<ButtonProps, "outline"> {
  outline?: boolean;
  link: string;
  color: string;
  hoverColor: string;
}

const CTAColor = ({
  outline,
  link,
  color,
  hoverColor,
  ...props
}: CTAColorProps) => {
  const hoverStyles = {
    borderColor: hoverColor,
    bgColor: outline ? "transparent" : hoverColor,
    color: outline ? hoverColor : "white",
  };

  return (
    <Button
      {...props}
      as={InternalLink}
      to={link}
      bgColor={outline ? "transparent" : color}
      color={outline ? color : "white"}
      fontSize={14}
      borderRadius={8}
      rightIcon={<RightArrow />}
      border="2px solid"
      borderColor={color}
      h="50px"
      px="22px"
      _hover={hoverStyles}
      _active={hoverStyles}
      sx={{
        span: {
          ml: "14px",
          transition: "all .3s ease-in-out",
        },
        ":hover span": {
          transform: "translateX(3px)",
        },
      }}
    />
  );
};

export default CTAColor;
