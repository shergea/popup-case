import React from "react";
import { Field, ErrorMessage } from "formik";

type PopupSelectProps = {
  id: string;
  name: string;
  placeholder: string;
  data: Array<any>;
};

export default function PopupSelect({
  id,
  name,
  placeholder,
  data,
}: PopupSelectProps) {
  return (
    <div className="mt-4">
      <Field
        as="select"
        name={name}
        id={id}
        className="border border-gray-300 bg-gray-100 text-base block w-full p-2.5 font-medium outline-0"
      >
        <option value="">{placeholder}</option>
        {data.map((item) => (
          <option key={item.key} value={item.label}>
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
