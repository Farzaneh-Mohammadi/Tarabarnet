import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteProducts } from "../../features/products/productSlice";
import styles from "./ProductCards.module.css";


const ProductCards = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  return (
    // /products/:productId
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.cardInfo}>
        <p>
          <b>Title: </b>
          {data.title.substring(0, 12)}
        </p>
        <p>
          <b>Price: </b>
          {data.price}
        </p>
      </div>
      <div className={styles.cardBtns}>
        <button
          className={styles.cardDeleteBtn}
          onClick={() => {
            dispatch(deleteProducts({ id: data.id }));
          }}
        >
          Delete
        </button>
        <Link className={styles.cardDetailBtn} to={`/products/${data.id}`}>
          Detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
