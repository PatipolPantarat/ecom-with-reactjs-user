import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
