import React from "react";

import delIcon from "../../../assets/images/icons/del-icon.svg";
import styles from "./DelBtn.module.scss";

const DelBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.delBtn}
      type="button"
      title="Удалить"
    >
      <img src={delIcon} alt="Удалить" />
    </button>
  );
};

export default DelBtn;
