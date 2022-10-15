import React from "react";
import { Field, FieldProps, ErrorMessage } from "formik";

type PopupInputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
};

export default function PopupInput({
  id,
  name,
  placeholder,
  type,
}: PopupInputProps) {
  return (
    <div className="mt-4">
      <Field name={name}>
        {({ field }: FieldProps<any>) => (
          <input
            id={id}
            type={type}
            {...field}
            placeholder={placeholder}
            className="border border-gray-300 bg-gray-100 text-base font-medium block w-full p-2.5 placeholder:text-black placeholder:text-base placeholder:font-medium outline-0"
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-left text-red-500"
      />
    </div>
  );
}
