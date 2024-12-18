import { TBaseSelectProps } from "@/types/form";

export function BaseSelect({
  id,
  label = "",
  labelProps,
  errorMessage,
  ...inputProps
}: Readonly<TBaseSelectProps>) {
  const { className: inputClassName = "", ...restInputProps } = inputProps;

  return (
    <label
      className={`flex flex-col gap-2 ${inputClassName}`}
      htmlFor={id}
      {...labelProps}
    >
      <span>
        {label}
        <span className="text-red-400">{errorMessage}</span>
      </span>
      <select
        className={`border border-gray-300 p-2`}
        id={id}
        {...restInputProps}
      />
    </label>
  );
}
