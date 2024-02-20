import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import authReducer from "./Slices/authSlice";
import userReducer from "./Slices/userSlice";
import cartReducer from "./Slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
