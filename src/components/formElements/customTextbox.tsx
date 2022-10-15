import React from "react";
import { Field, FieldProps } from "formik";

type CustomTextboxProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
};

export default function CustomTextbox({
  id,
  name,
  label,
  placeholder,
}: CustomTextboxProps) {
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
          <textarea
            id={id}
            {...field}
            className="border border-gray-300 text-gray-900 text-m rounded-lg block w-full p-2.5 resize-none outline-0"
            placeholder={placeholder}
            rows={5}
          />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
}
