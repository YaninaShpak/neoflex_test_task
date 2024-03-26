import React from "react";

import { useDispatch } from "react-redux";
import { addCartList, removeCartList, clearCartList } from "../../redux/slices/cartSlice";

import DelBtn from "../buttons/DelBtn/DelBtn";
import CountBtn from "../buttons/CountBtn/CountBtn";

import styles from "./CartItem.module.scss";

const CartItem = ({ product }) => {
  const { title, img, price, count } = product;

  const dispatch = useDispatch();

  const handleClickDec = () => {
    if (count > 0) {
      dispatch(removeCartList(product));
    }
  }

  const handleClickInc = () => {
    dispatch(addCartList(product));
  }

  const handleClickClear = () => {
    dispatch(clearCartList(product));
  }

  return (
    <li className={styles.root}>
      <div className={styles.root__wrapper}>
        <div className={styles.img}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>
            <span>{price}</span> ₽
          </p>
        </div>
        <DelBtn onClick={handleClickClear}/>
      </div>
      <div className={`${styles.root__wrapper} ${styles.root__wrapper_bottom}`}>
        <div className={styles.counter}>
          <CountBtn onClick={handleClickDec} text="-" title="Убрать"/>
          <p>{count}</p>
          <CountBtn onClick={handleClickInc} text="+" title="Добавить"/>
        </div>
        <div className={styles.amount}>
          <span>{Number(price) * count}</span> ₽
        </div>
      </div>
    </li>
  );
};

export default CartItem;
