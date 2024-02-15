import { createContext, useContext, useState } from "react";
import { IProduct } from "../utils/interface";

interface ICartItem {
  totalItems: number;
  eachItem: {
    amount: number;
    product: IProduct;
  }[];
  totalPrice: number;
}
interface CartContextType {
  cart: ICartItem;
  addItem: (item: IProduct, amount: number) => void;
  removeItem: (id: string) => void;
  testAddCart: () => void;
  testRemoveCart: () => void;
  testCart: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICartItem>({
    totalItems: 0,
    eachItem: [],
    totalPrice: 0,
  });
  const [testCart, setTestCart] = useState<number>(0);
  const addItem = (product: IProduct, amount: number) => {
    const alreadyInCart = cart.eachItem.find(
      (item) => item.product.id === product.id
    );
    if (alreadyInCart) {
      setCart({
        totalItems: cart.totalItems,
        eachItem: cart.eachItem.map((item) =>
          item.product.id === product.id
            ? { ...item, amount: item.amount + amount }
            : item
        ),
        totalPrice: cart.totalPrice + product.price * amount,
      });
    } else {
      setCart({
        totalItems: cart.totalItems + 1,
        eachItem: [
          ...cart.eachItem,
          {
            amount: amount,
            product: product,
          },
        ],
        totalPrice: cart.totalPrice + product.price * amount,
      });
    }
    console.log(
      `add item: ${product.name}\ntotal: ${
        cart.eachItem.find((item) => item.product.id === product.id)?.amount
      }`
    );
  };
  const removeItem = (productId: string) => {
    const item = cart.eachItem.find((item) => item.product.id === productId);
    setCart({
      totalItems: cart.totalItems - 1,
      eachItem: cart.eachItem.filter((item) => item.product.id !== productId),
      totalPrice:
        cart.totalPrice - (item ? item?.amount * item?.product.price : 0),
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
      value={{
        cart,
        addItem,
        removeItem,
        testAddCart,
        testRemoveCart,
        testCart,
      }}
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
