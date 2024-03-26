import React from "react";

import { Link } from "react-router-dom";

import styles from "./UserNavItem.module.scss";

const UserNavItem = (props) => {
  const { title, icon, count, link } = props;

  const classShow = count > 0;
  
  return (
    <li className={styles.navList__item}>
      <Link
        className={`${styles.navList__link} ${classShow ? styles.show : ""}`}
        to={link}
      >
        <img src={icon} alt={title} />
        <span>{count}</span>
      </Link>
    </li>
  );
};

export default UserNavItem;
