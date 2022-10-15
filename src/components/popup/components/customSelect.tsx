/* eslint-disable no-empty-pattern */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Field } from "formik";

type CustomSelectProps = {
  id: string;
  name: string;
  placeholder: string;
  data: Array<any>;
};

export default function CustomSelect({
  id,
  name,
  placeholder,
  data,
}: CustomSelectProps) {
  return (
    <div className="mt-4">
      <Field
        as="select"
        name={name}
        id={id}
        className="border border-gray-300 bg-gray-100 text-base block w-full p-2.5 font-medium outline-0"
      >
        <option>{placeholder}</option>
        {data.map((item) => (
          <option key={item.key} value={item.label}>
            {item.label}
          </option>
        ))}
      </Field>
    </div>
  );
}
