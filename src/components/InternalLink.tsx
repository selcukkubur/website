import { chakra, LinkProps } from "@chakra-ui/react";
import Link from "next/link";

interface InternalLinkProps extends LinkProps {
  to: string;
}

const InternalLink = ({ to, children, ...otherProps }: InternalLinkProps) => {
  return (
    <Link href={to} passHref>
      <chakra.a {...otherProps}>{children}</chakra.a>
    </Link>
  );
};

export default InternalLink;
