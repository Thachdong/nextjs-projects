import React from "react";

import "./index.scss";

export type TButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant:
    | "outline"
    | "transparent"
    | "primary"
    | "secondary"
    | "white"
    | "rounded"
    | "outline-primary"
    | "outline-secondary";
};

export const Button: React.FC<TButtonProps> = ({
  variant,
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`button-base button-base__${variant} ${className ?? ""}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
