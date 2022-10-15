/* eslint-disable react/require-default-props */
import React from "react";
import styles from "../assets/style.module.scss";

type CloseButtonProps = {
  onClick?: () => void;
};

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button type="button" className={styles.buttonClose} onClick={onClick}>
      <span>+</span>
    </button>
  );
}
