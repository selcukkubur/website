import { forwardRef } from "react";
import { ReactNode } from "react";
import { chakra, LinkProps } from "@chakra-ui/react";

interface ExternalLinkProps extends LinkProps {
  to: string;
}

const ExternalLink = forwardRef(
  (
    { to, children, ...otherProps }: ExternalLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <chakra.a
      ref={ref}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {children}
    </chakra.a>
  )
);

export default ExternalLink;
