import React from "react";

import { socialLinks } from "../../data/socialLinks";

import styles from "./SocialList.module.scss";

const SocialList = () => {
  return (
    <ul className={`${styles.socialList} list-reset`}>
      {socialLinks.map((el) => (
        <li className={styles.socialList__item} key={el.text}>
          <a className={styles.socialList__link} href={el.link}>
            <span
              className={`${styles.socialList__icons} ${styles[el.className]}`}
            ></span>
            <span className="visually-hidden">{el.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
