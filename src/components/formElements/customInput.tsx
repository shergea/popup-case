/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Field, FieldProps } from "formik";

type CustomInputProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
};

export default function CustomInput({
  id,
  name,
  label,
  placeholder,
}: CustomInputProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps<any>) => (
        <div className="mt-5">
          <label
            htmlFor={id}
            className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
          <input
            id={id}
            type="text"
            {...field}
            placeholder={placeholder}
            className="border border-gray-300 text-gray-900 text-m rounded-lg block w-full p-2.5 outline-0"
          />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
}
