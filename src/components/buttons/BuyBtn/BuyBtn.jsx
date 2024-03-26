import React from "react";

import styles from "./BuyBtn.module.scss";

const BuyBtn = ({ onClick }) => {
  return (
    <button className={styles.buyBtn} type="button" onClick={onClick}>
      Купить
    </button>
  );
};

export default BuyBtn;
