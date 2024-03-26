import React from "react";

import { Link } from "react-router-dom";

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={`${styles.root} link`} to="/">
      QPICK
    </Link>
  );
};

export default Logo;
