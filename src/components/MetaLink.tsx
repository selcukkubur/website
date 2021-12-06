import { forwardRef } from "react";
import { LinkProps, chakra } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";
import ExternalLink from "components/ExternalLink";

interface MetaLinkProps extends LinkProps {
  to: string;
}

const MetaLink = forwardRef(
  (
    { to, ...props }: MetaLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ): JSX.Element => {
    // As /docs is a rewrite we need to do full navigation, otherwise it shows an error on dev
    if (to.startsWith("/docs")) {
      return <chakra.a href={to} ref={ref} {...props} />;
    }
    if (/^https?:\/\//i.test(to)) {
      return <ExternalLink to={to} ref={ref} {...props} />;
    }
    return <InternalLink to={to} ref={ref} {...props} />;
  }
);

export default MetaLink;
