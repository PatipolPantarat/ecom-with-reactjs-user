import { Section } from "../components/section";
import { CartItem } from "../components/contents/cartitem";
import { Modal } from "../components/modal";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  IncrementItem,
  DecrementItem,
  removeItemInCart,
} from "../Slices/cartSlice";

export default function CartLayout() {
  const { cartItems, totalAmount, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch: AppDispatch = useDispatch();
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleRemove = (productId: string) => {
    dispatch(removeItemInCart(productId));
    setOpenConfirmModal(false);
  };

  return (
    <Section className="grid grid-cols-3 gap-2">
      <div className="flex flex-col gap-2 col-span-2">
        <div className="bg-white rounded-md border border-dark-300 p-5 flex items-center font-medium">
          <div className="grid grid-cols-10 place-items-center w-full ms-5">
            <div className="col-span-4 w-full">
              <h1>Product</h1>
            </div>
            <div className="col-span-2 w-full text-center">
              <h1>Price</h1>
            </div>
            <div className="col-span-1 w-full text-center">
              <h1>Amount</h1>
            </div>
            <div className="col-span-2 w-full text-center">
              <h1>Total</h1>
            </div>
            <div className="col-span-1 w-full text-center">
              <h1>Remove</h1>
            </div>
          </div>
        </div>

        {/* map CartList */}
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            amount={item.amount}
            product={item.product}
            onRemove={() => (
              setOpenConfirmModal(true), setSelectedItem(item.product.id)
            )}
            onIncrement={() => dispatch(IncrementItem(item.product.id))}
            onDecrement={() => dispatch(DecrementItem(item.product.id))}
          />
        ))}
      </div>

      {/* Payment Box */}
      <div className="flex flex-col gap-2 col-span-1">
        <div className="bg-white rounded-md border border-dark-300 p-5 flex justify-center items-center">
          <span className="font-medium">Order Summary</span>
        </div>
        <div className="bg-white rounded-md border border-dark-300 p-5 flex flex-col gap-5 justify-between items-center">
          <div className="flex flex-col w-full py-3 border-y border-dark-300 gap-4">
            <div className="flex justify-between">
              <span className="text-lg  font-medium">Total items</span>
              <span className="text-dark font-medium">{totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Total price</span>
              <span className="text-danger font-medium">$ {totalPrice}</span>
            </div>
          </div>

          <button className="w-full font-medium cursor-pointer py-2 px-5 text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary rounded-lg duration-150">
            Checkout
          </button>
        </div>
      </div>
      {/* Confirm Del Modal */}
      <Modal
        title="Confirm delete"
        description="Are you sure you want to delete this item?"
        openModal={openConfirmModal}
        onCancel={() => setOpenConfirmModal(false)}
        onSubmit={() => handleRemove(selectedItem)}
        onSubmitText="Confirm"
      />
    </Section>
  );
}
