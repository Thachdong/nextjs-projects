import { TBaseInputProps } from "@/types/form";

export function BaseInput({
  id,
  label = '',
  labelProps,
  errorMessage,
  ...inputProps
}: Readonly<TBaseInputProps>) {

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
      <input
        className={`border border-gray-300 p-2`}
        id={id}
        {...restInputProps}
      />
    </label>
  );
}
