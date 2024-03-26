import React from "react";

import { useSelector } from "react-redux";

import styles from "./TotalSumBlock.module.scss";

const TotalSumBlock = () => {
  const { totalPrice } = useSelector((state) => state.cartList);

  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Итого</h3>
      <p className={styles.root__sum}>
        ₽ <span>{totalPrice}</span>
      </p>
      <button className={styles.checkoutBtn}>Перейти к оформлению</button>
    </div>
  );
};

export default TotalSumBlock;
