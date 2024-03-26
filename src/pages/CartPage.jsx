import React from "react";

import { useSelector } from "react-redux";

import CartItem from "../components/CartItem/CartItem";
import TotalSumBlock from "../components/TotalSumBlock/TotalSumBlock";

const CartPage = () => {
  const { cartList } = useSelector((state) => state.cartList);

  return (
    <div className="container">
      <h2 className="cartTitle">Корзина</h2>
      <div className="cartWrapper">
        <ul className="cartList">
          {cartList.map((el) => (
            <CartItem product={el} key={el.id} />
          ))}
        </ul>
        <TotalSumBlock />
      </div>
    </div>
  );
};

export default CartPage;
