import { BaseSelect } from "@/components/atoms/form-base-elements/select";
import { TControllerProps, TFormINputProps, TFormSelectProps } from "@/types/form";
import { Controller } from "react-hook-form";

const withController = (Component: React.ComponentType<any>) => {
  const WrappedComponent = ({ name, control, ...inputProps }: TFormINputProps) => {
    const render: TControllerProps["render"] = ({
      field,
      fieldState: { error },
    }) => {
      return (
        <Component
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

  WrappedComponent.displayName = `withController(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export const FormSelect: React.FC<TFormSelectProps> = ({
  name,
  control,
  ...inputProps
}: TFormSelectProps) => {
  const render: TControllerProps["render"] = ({
    field,
    fieldState: { error },
  }) => {
    return (
      <BaseSelect
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
