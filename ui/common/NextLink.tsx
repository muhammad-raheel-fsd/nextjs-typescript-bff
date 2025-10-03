import Link, { type LinkProps } from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

type NextLinkProps = React.PropsWithChildren<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> & {
  className?: string;
};

const NextLink: React.FC<NextLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={cn("m-0 text-black capitalize no-underline", className)}
    >
      {children}
    </Link>
  );
};

export default NextLink;
