import { createContext, useContext, useState } from "react";
import { IProduct, ICartItem } from "../utils/interface";

interface CartContextType {
  cart: ICartItem;
  addItem: (product: IProduct, amount: number) => void;
  minusItem: (product: IProduct) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICartItem>({
    totalItems: 0,
    eachItem: [],
    totalPrice: 0,
  });
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
  const minusItem = (product: IProduct) => {
    console.log("minus product: ", product);
    const checkItemHasOne = cart.eachItem.find((item) => item.amount === 1);
    if (checkItemHasOne) {
      removeItem(checkItemHasOne.product.id);
    } else {
      setCart({
        totalItems: cart.totalItems,
        eachItem: cart.eachItem.map((item) => {
          if (item.product.id === product.id && item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
        totalPrice:
          cart.totalPrice -
          cart.eachItem
            .map((item) => {
              if (item.product.id === product.id && item.amount > 1) {
                return item.product.price;
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
      });
    }
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

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        minusItem,
        removeItem,
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
