import React from "react";

import Link, { LinkProps } from "next/link";

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
      className={cn("capitalize no-underline text-black m-0", className)}
    >
      {children}
    </Link>
  );
};

export default NextLink;
