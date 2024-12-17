import Link from "next/link";
import React, { ReactNode } from "react";

type LinkAsButtonProps = {
  href: string;
  children: ReactNode;
};

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link
      className="text-primary border border-primary rounded py-1 px-4"
      href={href}
    >
      {children}
    </Link>
  );
};
