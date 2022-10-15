import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FontItem } from "../../models/font";
import Setting from "../../models/setting";
import styles from "./assets/style.module.scss";
import CloseButton from "./components/closeButton";
import GreenButton from "./components/greenButton";
import PopupInput from "./components/popupInput";
import PopupSelect from "./components/popupSelect";

type PopupProps = {
  setting: Setting;
  fonts: Array<FontItem>;
};

export default function Popup({ setting, fonts }: PopupProps) {
  const [status, setStatus] = useState<boolean | null>(false);

  const PopupSchema = Yup.object().shape({
    fullName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    font: Yup.string().required("Required"),
  });

  const onClose = () => {
    setStatus(null);
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  };

  if (status === null) return <div />;
  return (
    <div
      data-test="popup-1"
      className={styles.boxBackground}
      style={{ fontFamily: setting.font ? setting.font : "unset" }}
    >
      <div
        className={`flex flex-col justify-center items-center bg-white text-center m-auto ${styles.box}`}
      >
        {status === false && (
          <>
            <CloseButton onClick={onClose} />
            <h1 data-test="popup-headline" className={styles.headline}>
              {setting.headline}
            </h1>
            <h2 data-test="popup-description" className={styles.description}>
              {setting.description}
            </h2>

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                font: "",
              }}
              onSubmit={(values) => {
                // eslint-disable-next-line no-console
                localStorage.setItem("data", JSON.stringify(values));
                setStatus(true);
              }}
              validationSchema={PopupSchema}
            >
              <Form className={`w-full ${styles.form}`}>
                <PopupInput
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your Name"
                />
                <PopupInput
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <PopupSelect
                  id="font"
                  name="font"
                  placeholder="Select Font"
                  data={fonts.map((x, index) => ({
                    label: x.family,
                    value: x.family,
                    key: index,
                  }))}
                />
                <GreenButton type="submit" text={setting.buttonText} />
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
              <span
                data-test="popup-successMessage"
                className={styles.successMessage}
              >
                {setting.successMessage}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
