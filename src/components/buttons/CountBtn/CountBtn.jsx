import React from "react";

import styles from "./CountBtn.module.scss";

const CountBtn = ({ onClick, text, title }) => {
  return (
    <button
      onClick={onClick}
      className={styles.countBtn}
      type="button"
      title={title}
    >
      {text}
    </button>
  );
};

export default CountBtn;
