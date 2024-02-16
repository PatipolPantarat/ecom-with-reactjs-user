import { IUser } from "../interface";

export const User: IUser = {
  userProfile: {
    username: "user01",
    fullname: "userFullname",
    email: "user01@gmail.com",
    phone: "0123456789",
    imageURL: "https://picsum.photos/510",
  },
  userAddress: [
    {
      name: "user01",
      address: "address01",
    },
    {
      name: "user02",
      address: "address02",
    },
    {
      name: "user03",
      address: "address03",
    },
  ],
  userFav: [
    {
      id: "1",
      name: "Acheron",
      image: "https://picsum.photos/500",
      price: 100,
      sold: 20,
      category: "cpu",
    },
    {
      id: "3",
      name: "Hanabi",
      image: "https://picsum.photos/502",
      price: 300,
      sold: 20,
      category: "cpu",
    },
    {
      id: "5",
      name: "Stelle",
      image: "https://picsum.photos/504",
      price: 20,
      sold: 20,
      category: "cpu",
    },
  ],
  userPurchase: ["1", "2", "3"],
  userCart: {
    totalItems: 3,
    eachItem: [
      {
        amount: 3,
        product: {
          id: "8",
          name: "Hanabi",
          image: "https://picsum.photos/507",
          price: 2299,
          sold: 20,
          category: "mainboard",
        },
      },
      {
        amount: 1,
        product: {
          id: "9",
          name: "Robin",
          image: "https://picsum.photos/508",
          price: 3999,
          sold: 20,
          category: "cpu",
        },
      },
    ],
    totalPrice: 7000,
  },
};
