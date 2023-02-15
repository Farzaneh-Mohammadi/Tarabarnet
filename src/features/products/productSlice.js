import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "products/fetchAsyncDetails",
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    return response.data;
  }
);

const initialState = {
  products: {},
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },

    deleteProducts: (state, action) => {
      state.products = state.products.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },

  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, products: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, selectedProduct: payload };
    },
  },
});

export const { addProducts, deleteProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getSelectedProduct = (state) => state.products.selectedProduct;
export default productSlice.reducer;
