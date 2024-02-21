import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../utils/interface";
import { logout } from "./authSlice";

interface ProductState {
  products: IProduct[];
  currentProduct: IProduct;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  currentProduct: {} as IProduct,
  status: "idle",
  error: null,
};

const apiUrl = "https://65d354c1522627d50108a48c.mockapi.io/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (searchParams: string) => {
    if (searchParams) {
      const res = await axios.get(`${apiUrl}?name=${searchParams}`);
      return res.data;
    }
    const res = await axios.get(`${apiUrl}`);
    return res.data;
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (productId: string) => {
    const res = await axios.get(`${apiUrl}/${productId}`);
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentProduct = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(logout, () => {
        return initialState;
      });
  },
});

export default productSlice.reducer;
