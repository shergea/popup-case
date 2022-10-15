import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FontItem } from "../../models/font";
import Setting from "../../models/setting";
import styles from "./assets/style.module.scss";
import CloseButton from "./components/closeButton";
import CustomButton from "./components/customButton";
import CustomInput from "./components/customInput";
import CustomSelect from "./components/customSelect";

type PopupProps = {
  setting: Setting;
  fonts: Array<FontItem>;
};

export default function Popup({ setting, fonts }: PopupProps) {
  const [status, setStatus] = useState(false);

  const PopupSchema = Yup.object().shape({
    fullName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    font: Yup.string().required("Required"),
  });

  return (
    <div className={styles.boxBackground}>
      <div
        className={`flex flex-col justify-center items-center bg-white text-center m-auto ${styles.box}`}
      >
        {!status && (
          <>
            <CloseButton />
            <h1 className={styles.headline}>{setting.headline}</h1>
            <h2 className={styles.description}>{setting.description}</h2>

            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                // eslint-disable-next-line no-console
                console.log(values);
                setStatus(true);
              }}
              validationSchema={PopupSchema}
            >
              <Form>
                <CustomInput
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your Name"
                />
                <CustomInput
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <CustomSelect
                  id="font"
                  name="font"
                  placeholder="Select Font"
                  data={fonts.map((x, index) => ({
                    label: x.family,
                    value: x.family,
                    key: index,
                  }))}
                />
                <CustomButton type="submit" text={setting.buttonText} />
              </Form>
            </Formik>
          </>
        )}
        {status && (
          <>
            <div className={styles.successIcon}>
              <span>&#10003;</span>
            </div>
            <div>
              <span className={styles.successMessage}>
                {setting.successMessage}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
