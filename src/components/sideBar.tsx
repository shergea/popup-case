/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Formik, Form, useFormikContext } from "formik";
import CustomTextbox from "./formElements/customTextbox";
import CustomInput from "./formElements/customInput";
import Setting from "../models/setting";

type AutoSubmitFormProps = {
  onFormChange: (values: Setting) => void;
};

type SidebarProps = {
  onFormChange: (values: Setting) => void;
  data: Setting;
};

function AutoSubmitForm({ onFormChange }: AutoSubmitFormProps) {
  const { values }: { values: Setting } = useFormikContext();
  React.useEffect(() => {
    onFormChange(values);
  }, [values]);
  return null;
}

export default function Sidebar({ onFormChange, data }: SidebarProps) {
  return (
    <div className="flex flex-col h-screen p-16 bg-white shadow">
      <h1 className="text-2xl font-semibold underline">General Settings</h1>
      <Formik initialValues={data} onSubmit={() => {}}>
        <Form>
          <CustomInput
            id="headline"
            name="headline"
            label="Headline"
            placeholder="NEW STUFF"
          />
          <CustomTextbox
            id="description"
            name="description"
            label="Description"
            placeholder="Description"
          />
          <CustomInput
            id="buttonText"
            name="buttonText"
            label="Button Text"
            placeholder="Button Text"
          />
          <CustomInput
            id="successMessage"
            name="successMessage"
            label="Success Message"
            placeholder="Success"
          />
          <AutoSubmitForm onFormChange={onFormChange} />
        </Form>
      </Formik>
    </div>
  );
}
