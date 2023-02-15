import React, { useEffect } from "react";
import ProductList from "./../../components/products/ProductList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../features/products/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div>
      {/* HomePage */}
      <ProductList />
    </div>
  );
};

export default HomePage;
