import { Section } from "../components/section";
import { CartItem } from "../components/contents/cartitem";
import { useCart } from "../context/CartContext";

export default function CartLayout() {
  const { cart, addItem, minusItem, removeItem } = useCart();

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
        {cart.eachItem.map((item, index) => (
          <CartItem
            key={index}
            amount={item.amount}
            product={item.product}
            handleAdd={addItem}
            handleMinus={minusItem}
            handleRemove={removeItem}
          />
        ))}
      </div>

      {/* Payment Box */}
      <div className="flex flex-col gap-2 col-span-1">
        <div className="bg-white rounded-md border border-dark-300 p-5 flex justify-center items-center">
          <span className="font-medium">Order Summary</span>
        </div>
        <div className="bg-white rounded-md border border-dark-300 p-5 flex flex-col gap-5 justify-between items-center">
          <div className="flex flex-col w-full py-3 border-y border-dark-300 gap-2">
            {/* <div className="flex justify-between">
              <span className="text-lg">Total items</span>
              <span className="text-dark font-medium">{cart.totalItems}</span>
            </div> */}
            <div className="flex justify-between">
              <span className="text-lg">Total price</span>
              <span className="text-danger font-medium">
                $ {cart.totalPrice}
              </span>
            </div>
          </div>

          <button className="w-full font-medium cursor-pointer py-2 px-5 text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary rounded-lg duration-150">
            Checkout
          </button>
        </div>
      </div>
    </Section>
  );
}
