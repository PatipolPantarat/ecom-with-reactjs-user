import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../utils/interface";
import { getProductAPI, getProductsAPI } from "../api/products";

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

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (searchParams: string) => {
    const res = await getProductsAPI(searchParams ? searchParams : "");
    if (!res) {
      throw new Error("Products not found");
    }
    return res;
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string) => {
    const res = await getProductAPI(id);
    if (!res) {
      throw new Error("Product not found");
    }
    return res;
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
      });
  },
});

export default productSlice.reducer;
