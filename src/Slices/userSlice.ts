import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userProfile: {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    image: string;
  };
  userAddress: {
    id: string;
    name: string;
    phone: string;
    address: string;
  }[];
  userFav: {
    productId: string;
  }[];
  userCart: {
    productId: string;
    amount: number;
  }[];
}

const initialState: UserState = {
  userProfile: {
    username: "testUsername",
    fullname: "testFullname",
    email: "test@email.com",
    phone: "0123456789",
    image: "https://picsum.photos/500",
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
  userFav: [
    {
      productId: "1",
    },
    {
      productId: "3",
    },
    {
      productId: "5",
    },
  ],
  userCart: [
    {
      productId: "2",
      amount: 1,
    },
    {
      productId: "4",
      amount: 3,
    },
    {
      productId: "6",
      amount: 5,
    },
  ]
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editProfile: (state, action: PayloadAction<UserState["userProfile"]>) => {
      state.userProfile = action.payload;
    },
    addAddress: (
      state,
      action: PayloadAction<UserState["userAddress"][number]>
    ) => {
      state.userAddress.push(action.payload);
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
    addItemToCart: (state, action: PayloadAction<{ productId: string, amount: number }>) => {
      state.userCart.push({
        productId: action.payload.productId,
        amount: action.payload.amount,
      });
    },
    removeItemInCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.userCart = state.userCart.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
  },
});

export const { editProfile, addAddress, editAddress, delAddress, addItemToCart, removeItemInCart } =
  userSlice.actions;
export default userSlice.reducer;
