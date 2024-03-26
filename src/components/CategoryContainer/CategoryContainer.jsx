import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

import styles from "./CategoryContainer.module.scss";

const CategoryContainer = ({ title, category }) => {
  const { data } = useSelector((state) => state.products);

  const filterCategoryData = (array, cat) => {
    return array.filter((el) => el.category === cat.toString());
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.root__title}>{title}</h2>
      <ul className={styles.categoryList}>
        {data &&
          filterCategoryData(data, category).map((el) => (
            <Card product={el} key={el.id} />
          ))}
      </ul>
    </div>
  );
};

export default CategoryContainer;
