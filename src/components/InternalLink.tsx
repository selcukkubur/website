import { forwardRef } from "react";
import { chakra, LinkProps } from "@chakra-ui/react";
import Link from "next/link";

interface InternalLinkProps extends LinkProps {
  to: string;
}

const InternalLink = forwardRef(
  (
    { to, children, ...otherProps }: InternalLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <Link href={to} passHref>
        <chakra.a {...otherProps} ref={ref}>
          {children}
        </chakra.a>
      </Link>
    );
  }
);

export default InternalLink;
