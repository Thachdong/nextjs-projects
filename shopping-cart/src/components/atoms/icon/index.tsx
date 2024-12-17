"use client";

import React, { useMemo } from "react";
import { ReactSVG } from "react-svg";

export type TSvgName =
  | "caret-right"
  | "menu"
  | "shopping-bag"
  | "user"
  | "truck"
  | "support"
  | "arrow-circle"
  | "fingerprint"
  | "quote";

export type TSvgIcon = Omit<
  React.ComponentPropsWithoutRef<typeof ReactSVG>,
  "src"
> & {
  name: TSvgName;
};

export const SvgIcon: React.FC<TSvgIcon> = ({ name, width, ...restProps }) => {
  const path = useMemo(() => `/assets/svg-icons/${name}.svg`, []);

  return (
    <ReactSVG
      src={path}
      wrapper="span"
      beforeInjection={(svg) => {
        svg.setAttribute(
          "style",
          `width: ${width}px; cursor: pointer; user-select: none`
        );
      }}
      {...restProps}
    />
  );
};
