import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IOrder, IAddress } from "../utils/interface";
import { logout } from "./authSlice";
import { getMeAPI } from "../api/auth";
import { updateUserAPI } from "../api/user";

const initialState: IUser = {
  _id: "",
  email: "",
  password: "",
  role: "",
  fullName: "",
  phoneNumber: "",
  imageUrl: "",
  favorites: [] as string[],
  addresses: [] as IAddress[],
  orders: [] as IOrder[],
};

// export const getProductsFav = createAsyncThunk(
//   "user/getProductsFav",
//   async (productId: string[]) => {
// return await Promise.all(
//   productId.map(async (id) => {
//     return await axios(`${apiUrl}/${id}`).then((data) => {
//       return data.data;
//     });
//   })
// );
//   }
// );

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("getCurrentUser: token not found");
      return;
    }
    const res = await getMeAPI(token);
    if (!res) {
      console.error("getCurrentUser: doesn't have a response");
      return;
    }
    return res;
  }
);

export const updateCurrentUser = createAsyncThunk(
  "user/updateUser",
  async (payload: {
    fullName: string;
    phoneNumber: string;
    imageUrl: string;
  }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("updateUser: token not found");
      return;
    }
    const res = await updateUserAPI(token, payload);
    if (!res) {
      console.error("updateUser: doesn't have a response");
      return;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editProfile: (
      state,
      action: PayloadAction<{
        fullName: string;
        phoneNumber: string;
        imageUrl: string;
      }>
    ) => {
      console.log("action.payload: ", action.payload);
      state.fullName = action.payload.fullName;
      state.phoneNumber = action.payload.phoneNumber;
      state.imageUrl = action.payload.imageUrl;
    },
    // addAddress: (
    //   state,
    //   action: PayloadAction<{
    //     name: string;
    //     phone: string;
    //     address: string;
    //   }>
    // ) => {
    //   state.addresses.push({

    //   });
    // },
    editAddress: (
      state,
      action: PayloadAction<{
        _id: string;
        name: string;
        phone: string;
        address: string;
      }>
    ) => {
      state.addresses = state.addresses.map((address) => {
        if (address._id === action.payload._id) {
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
    delAddress: (state, action: PayloadAction<{ _id: string }>) => {
      console.log("id from delAddress: ", action.payload._id);
      state.addresses = state.addresses.filter(
        (address) => address._id !== action.payload._id
      );
    },
    removeUserFav: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
    },
    toggleUserFav: (state, action: PayloadAction<string>) => {
      if (state.favorites.find((item) => item === action.payload)) {
        state.favorites = state.favorites.filter(
          (item) => item !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
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
      // .addCase(getProductsFav.pending, (state) => {
      //   state.favorites = [];
      // })
      // .addCase(getProductsFav.rejected, (state) => {
      //   state.favorites = [];
      // })
      // .addCase(getProductsFav.fulfilled, (state, action) => {
      //   state.favorites = action.payload;
      // })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.fullName = action.payload.fullName;
        state.phoneNumber = action.payload.phoneNumber;
        state.imageUrl = action.payload.imageUrl;
        state.favorites = action.payload.favorites;
        state.addresses = action.payload.addresses;
        state.orders = action.payload.orders;
      })
      .addCase(logout, () => {
        return initialState;
      });
  },
});

export const {
  editProfile,
  // addAddress,
  editAddress,
  delAddress,
  removeUserFav,
  toggleUserFav,
} = userSlice.actions;
export default userSlice.reducer;
