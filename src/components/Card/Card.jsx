import React from "react";

import { useDispatch } from "react-redux";
import { addCartList } from "../../redux/slices/cartSlice";

import styles from "./Card.module.scss";
import BuyBtn from "../buttons/BuyBtn/BuyBtn";

const Card = ({ product }) => {
  const { title, img, price, oldPrice, rating } = product;

  const dispatch = useDispatch();

  const handleClickBuyBtn = () => {
    dispatch(addCartList(product));
  };

  return (
    <li className={styles.root}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <div className={styles.info__wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.price}>
            <p className={styles.price__new}>
              <span>{price}</span> ₽
            </p>
            {oldPrice && (
              <p className={styles.price__old}>
                <span>{oldPrice}</span> ₽
              </p>
            )}
          </div>
        </div>
        <div className={styles.info__wrapper}>
          <p className={styles.rating}>{rating}</p>
          <BuyBtn onClick={handleClickBuyBtn} />
        </div>
      </div>
    </li>
  );
};

export default Card;
