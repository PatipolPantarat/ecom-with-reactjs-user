import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../utils/interface";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { logout } from "./authSlice";
import { IUser } from "../utils/interface";

const uniqueId = uuidv4();

const apiUrl = "https://65d354c1522627d50108a48c.mockapi.io/products";
// interface UserState {
//   userProfile: {
//     full_name: string;
//     birth_date: string;
//     phone: string;
//     email: string;
//     image: string;
//   };
//   userAddress: {
//     id: string;
//     name: string;
//     phone: string;
//     address: string;
//   }[];
//   userFav: IProduct[];
//   userCart: {
//     productId: string;
//     amount: number;
//   }[];
// }

const initialState: IUser = {
  userProfile: {
    full_name: "testFull_name",
    birth_date: new Date().toISOString().split("T")[0],
    phone: "0123456789",
    email: "test@email.com",
    imageURL: "https://picsum.photos/500",
  },
  userAddress: [
    {
      id: "1",
      name: "testName01",
      phone: "0123456789",
      address: "testAddress01",
    },
    {
      id: "2",
      name: "testName02",
      phone: "0123456789",
      address: "testAddress02",
    },
    {
      id: "3",
      name: "testName03",
      phone: "0123456789",
      address: "testAddress03",
    },
  ],
  userFav: [],
  userCart: [
    {
      amount: 1,
      productId: "2",
    },
    {
      amount: 3,
      productId: "4",
    },
    {
      amount: 5,
      productId: "6",
    },
  ],
  userPurchase: [],
};

export const getProductsFav = createAsyncThunk(
  "user/getProductsFav",
  async (productId: string[]) => {
    return await Promise.all(
      productId.map(async (id) => {
        return await axios(`${apiUrl}/${id}`).then((data) => {
          return data.data;
        });
      })
    );
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editProfile: (state, action: PayloadAction<IUser["userProfile"]>) => {
      state.userProfile = action.payload;
    },
    addAddress: (
      state,
      action: PayloadAction<{
        name: string;
        phone: string;
        address: string;
      }>
    ) => {
      state.userAddress.push({
        id: uniqueId,
        name: action.payload.name,
        phone: action.payload.phone,
        address: action.payload.address,
      });
    },
    editAddress: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        phone: string;
        address: string;
      }>
    ) => {
      state.userAddress = state.userAddress.map((address) => {
        if (address.id === action.payload.id) {
          return {
            ...address,
            name: action.payload.name,
            phone: action.payload.phone,
            address: action.payload.address,
          };
        }
        return address;
      });
    },
    delAddress: (state, action: PayloadAction<{ id: string }>) => {
      console.log("id from delAddress: ", action.payload.id);
      state.userAddress = state.userAddress.filter(
        (address) => address.id !== action.payload.id
      );
    },
    removeUserFav: (state, action: PayloadAction<string>) => {
      state.userFav = state.userFav.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleUserFav: (state, action: PayloadAction<IProduct>) => {
      if (state.userFav.find((item) => item.id === action.payload.id)) {
        state.userFav = state.userFav.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.userFav.push(action.payload);
      }
    },
    // addItemToCart: (
    //   state,
    //   action: PayloadAction<{ productId: string; amount: number }>
    // ) => {
    //   state.userCart.push({
    //     productId: action.payload.productId,
    //     amount: action.payload.amount,
    //   });
    // },
    // removeItemInCart: (state, action: PayloadAction<{ productId: string }>) => {
    //   state.userCart = state.userCart.filter(
    //     (item) => item.productId !== action.payload.productId
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsFav.pending, (state) => {
        state.userFav = [];
      })
      .addCase(getProductsFav.rejected, (state) => {
        state.userFav = [];
      })
      .addCase(getProductsFav.fulfilled, (state, action) => {
        state.userFav = action.payload;
      })
      .addCase(logout, () => {
        return initialState;
      });
  },
});

export const {
  editProfile,
  addAddress,
  editAddress,
  delAddress,
  removeUserFav,
  toggleUserFav,
} = userSlice.actions;
export default userSlice.reducer;
