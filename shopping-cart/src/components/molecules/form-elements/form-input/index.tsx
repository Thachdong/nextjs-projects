import { BaseInput } from "@/components/atoms/form-base-elements/input";
import { TControllerProps, TFormINputProps } from "@/types/form";
import React from "react";
import { Controller } from "react-hook-form";

export const FormInput: React.FC<TFormINputProps> = ({
  name,
  control,
  ...inputProps
}) => {
  const render: TControllerProps["render"] = ({
    field,
    fieldState: { error },
  }) => {
    return (
      <BaseInput
        id={name}
        label={name}
        errorMessage={error?.message}
        {...field}
        {...inputProps}
      />
    );
  };
  return <Controller name={name} control={control} render={render} />;
};
