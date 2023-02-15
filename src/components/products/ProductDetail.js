import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getSelectedProduct,
} from "../../features/products/productSlice";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedProduct);
  console.log("dataaaa:", data);

  useEffect(() => {
    dispatch(fetchAsyncDetails(productId));
  }, [dispatch, productId]);

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailInfo}>
        <p>
          <b>Title: </b>
          {data.title}
        </p>
        <br />
        <p>
          <b>Category: </b>
          {data.category}
        </p>
        <br />
        <p>
          <b>Description: </b>
          {data.description}
        </p>
        <br />
        <p>
          <b>Price: </b>
          {data.price}
        </p>
      </div>
      <div className={styles.productDetailImg}>
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  );
};

export default ProductDetail;
