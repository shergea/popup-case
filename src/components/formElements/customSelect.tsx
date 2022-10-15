import React from "react";
import { Field, ErrorMessage } from "formik";

type CustomSelectProps = {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  data: Array<any>;
};

export default function CustomSelect({
  id,
  name,
  placeholder,
  label,
  data,
}: CustomSelectProps) {
  return (
    <div className="mt-4">
      <label
        htmlFor={id}
        className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <Field
        as="select"
        name={name}
        id={id}
        className="border border-gray-300 text-gray-900 text-m rounded-lg block w-full p-2.5 outline-0"
      >
        <option value="">{placeholder}</option>
        {data.map((item) => (
          <option key={item.key} value={item.value}>
            {item.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-left text-red-500"
      />
    </div>
  );
}
