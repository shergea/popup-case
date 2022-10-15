/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Field, FieldProps } from "formik";

type CustomInputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
};

export default function CustomInput({
  id,
  name,
  placeholder,
  type,
}: CustomInputProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps<any>) => (
        <div className="mt-4">
          <input
            id={id}
            type={type}
            {...field}
            placeholder={placeholder}
            className="border border-gray-300 bg-gray-100 text-base font-medium block w-full p-2.5 placeholder:text-black placeholder:text-base placeholder:font-medium outline-0"
          />
          {meta.touched && meta.error && (
            <div className="text-left text-red-500">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
}
