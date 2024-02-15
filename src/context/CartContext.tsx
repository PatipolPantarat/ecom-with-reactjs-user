import { createContext, useContext, useState } from "react";
import { IProduct } from "../utils/interface";

interface ICartItem {
  totalItem: number;
  eachItem: {
    amount: number;
    product: IProduct;
  }[];
  totalPrice: number;
}
interface CartContextType {
  addItem: (item: IProduct, amount: number) => void;
  removeItem: (id: string) => void;
  testAddCart: () => void;
  testRemoveCart: () => void;
  testCart: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICartItem>({
    totalItem: 0,
    eachItem: [],
    totalPrice: 0,
  });
  const [testCart, setTestCart] = useState<number>(0);
  const addItem = (product: IProduct, amount: number) => {
    setCart({
      totalItem: cart.totalItem + 1,
      eachItem: [
        ...cart.eachItem,
        {
          amount: amount,
          product: product,
        },
      ],
      totalPrice: cart.totalPrice + product.price,
    });
    console.log("add item: ", cart);
  };
  const removeItem = (id: string) => {
    setCart({
      totalItem: cart.totalItem - 1,
      eachItem: cart.eachItem.filter((item) => item.product.id !== id),
      totalPrice: cart.totalPrice - cart.eachItem[id - 1].product.price,
    });
    console.log("remove item: ");
  };
  const testAddCart = () => {
    setTestCart(testCart + 1);
  };
  const testRemoveCart = () => {
    setTestCart(testCart >= 1 ? testCart - 1 : testCart);
  };
  return (
    <CartContext.Provider
      value={{ addItem, removeItem, testAddCart, testRemoveCart, testCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
