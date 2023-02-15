import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductList from "./../../components/products/ProductList";
import { fetchAsyncProducts } from "../../features/products/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default HomePage;
