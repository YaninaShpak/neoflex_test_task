import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setData } from "../redux/slices/productListSlice";

import CategoryContainer from "../components/CategoryContainer/CategoryContainer";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const jsonData = await res.json();
      dispatch(setData(jsonData));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container catalogWrapper">
      <CategoryContainer title="Наушники" category="0" />
      <CategoryContainer title="Беспроводные наушники" category="1" />
    </div>
  );
};

export default HomePage;
