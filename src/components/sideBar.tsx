import React from "react";
import { Formik, Form, useFormikContext } from "formik";
import WebFont from "webfontloader";
import CustomTextbox from "./formElements/customTextbox";
import CustomInput from "./formElements/customInput";
import Setting from "../models/setting";
import CustomSelect from "./formElements/customSelect";
import { FontItem } from "../models/font";

type AutoSubmitFormProps = {
  onFormChange: (values: Setting) => void;
};

type SidebarProps = {
  onFormChange: (values: Setting) => void;
  data: Setting;
  fonts: Array<FontItem>;
};

function AutoSubmitForm({ onFormChange }: AutoSubmitFormProps) {
  const { values }: { values: Setting } = useFormikContext();
  React.useEffect(() => {
    if (values.font !== null) {
      const pattern = /'(.*)'/i;
      const result = values.font.match(pattern) || ["unset", "unset"];
      WebFont.load({
        google: {
          families: [result[1]],
        },
      });
    }
    onFormChange(values);
  }, [values]);
  return null;
}

export default function Sidebar({ onFormChange, data, fonts }: SidebarProps) {
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
          <CustomSelect
            id="fontSelector"
            name="font"
            label="Font"
            placeholder="Select Font"
            data={fonts.map((x, index) => ({
              label: x.family,
              value: `'${x.family}', ${x.category}`,
              key: index,
            }))}
          />
          <AutoSubmitForm onFormChange={onFormChange} />
        </Form>
      </Formik>
    </div>
  );
}
