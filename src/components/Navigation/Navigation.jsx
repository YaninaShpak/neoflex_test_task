import React from "react";

import { Link } from "react-router-dom";

import { navLinks } from "../../data/navLinks";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <ul className={`list-reset ${styles.navList}`}>
      {navLinks.map((el) => (
        <li className={styles.navList__item} key={el.text}>
          <Link className={styles.navList__link} to={el.link}>
            {el.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
