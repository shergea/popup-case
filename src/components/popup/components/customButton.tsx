/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from "react";
import styles from "../assets/style.module.scss";

type CustomButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
};

export default function CustomButton({
  text,
  type = "button",
}: CustomButtonProps) {
  return (
    <button
      type={type}
      className={`block w-full p-2.5 mt-5 text-base font-medium text-white ${styles.buttonGreen}`}
    >
      {text}
    </button>
  );
}
