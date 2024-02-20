import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../utils/interface";
import axios from "axios";
interface CartItem {
  amount: number;
  product: IProduct;
}

interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
  totalPrice: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface SetCartParams {
  productId: string;
  amount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
  status: "idle",
  error: null,
};

const apiUrl = "https://65d354c1522627d50108a48c.mockapi.io/products";

export const setCart = createAsyncThunk(
  "cart/setCart",
  async (items: SetCartParams[]) => {
    return await Promise.all(
      items.map(async (item) => {
        return await axios(`${apiUrl}/${item.productId}`).then((data) => {
          return {
            amount: item.amount,
            product: data.data,
          };
        });
      })
    );
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product.id === newItem.product.id
      );
      if (existingItem) {
        const newAmount = existingItem.amount + newItem.amount;
        // check if there is enough stock
        if (newAmount > existingItem.product.stock) {
          // set amount to max stock
          const amountToAdd = existingItem.product.stock - existingItem.amount;
          existingItem.amount += amountToAdd;
          // set total amount & total price
          state.totalPrice += amountToAdd * existingItem.product.price;
        } else {
          existingItem.amount += newItem.amount;
          state.totalPrice += newItem.amount * newItem.product.price;
        }
      } else {
        if (newItem.amount > newItem.product.stock) {
          newItem.amount = newItem.product.stock;
        }
        state.cartItems.push(newItem);
        state.totalPrice += newItem.amount * newItem.product.price;
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.amount;
      }, 0);
    },
    removeItemInCart: (state, action: PayloadAction<string>) => {
      // receive productId as string
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload
      );
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== action.payload
        );
        state.totalAmount -= existingItem.amount;
        state.totalPrice -= existingItem.amount * existingItem.product.price;
      }
    },
    IncrementItem: (state, action: PayloadAction<string>) => {
      //productId: string
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload
      );
      if (item && item.amount < item.product.stock) {
        item.amount += 1;
        state.totalAmount += 1;
        state.totalPrice += +item.product.price; // convert string to number
      }
    },
    DecrementItem: (state, action: PayloadAction<string>) => {
      //productId: string
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload
      );
      if (item && item.amount > 1) {
        item.amount -= 1;
        state.totalAmount -= 1;
        state.totalPrice -= item.product.price;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
        state.totalAmount = action.payload.reduce((total, item) => {
          return total + item.amount;
        }, 0);
        state.totalPrice = action.payload.reduce((total, item) => {
          return total + item.amount * item.product.price;
        }, 0);
      })
      .addCase(setCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { addItemToCart, removeItemInCart, IncrementItem, DecrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
