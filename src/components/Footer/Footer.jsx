import React, { useState } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import SocialList from "../SocialList/SocialList";

import styles from "./Footer.module.scss";

import { languages } from "../../data/languageList";

const Footer = () => {
  const [lang, setLang] = useState("Рус");

  const toggleLang = (nameLang) => {
    setLang(nameLang);
  };

  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.root__wrapper}>
          <div className={styles.root__title}>
            <Logo />
          </div>
          <div className={styles.navWrapper}>
            <Navigation />
            <div className={styles.languagesContainer}>
              {languages.map((el) => (
                <button
                  onClick={() => toggleLang(el)}
                  className={el === lang ? styles.current : ""}
                  type="button"
                  key={el}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.socialContainer}>
            <SocialList />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
