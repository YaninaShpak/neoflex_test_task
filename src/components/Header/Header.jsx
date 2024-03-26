import React from "react";

import { useSelector } from "react-redux";

import Logo from "../Logo/Logo";

import styles from "./Header.module.scss";
import cartIcon from "../../assets/images/icons/cart-icon.svg";
import favoriteIcon from "../../assets/images/icons/favorite-icon.svg";
import UserNavItem from "../UserNavigation/UserNavItem/UserNavItem";

const Header = () => {
  const { cartList } = useSelector((state) => state.cartList);

  const countProduct = cartList.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <header className={styles.root}>
      <div className="container">
        <div className={styles.root__wrapper}>
          <h1 className={styles.root__title}>
            <Logo />
          </h1>
          <nav className={styles.navigation}>
            <ul className={`list-reset ${styles.navList}`}>
              <UserNavItem
                title="Избранное"
                icon={favoriteIcon}
                count={2}
                link="#"
              />
              <UserNavItem
                title="Корзина"
                icon={cartIcon}
                count={countProduct}
                link="cart"
              />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
