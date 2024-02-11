import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Section } from "../section";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem: number = 90;
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
              <h1>Quantity</h1>
            </div>
            <div className="col-span-2 w-full text-center">
              <h1>Total</h1>
            </div>
            <div className="col-span-1 w-full text-center">
              <h1>Remove</h1>
            </div>
          </div>
        </div>

        {/* Cart List */}
        <div className="bg-white rounded-md border border-dark-300 p-5 flex items-center font-medium">
          <div className="grid grid-cols-10 place-items-center w-full ms-5">
            <div className="col-span-4 w-full flex items-center gap-5">
              <img
                src="https://via.placeholder.com/100x100"
                alt=""
                className="h-[60px] w-[60px] rounded-md object-cover"
              />
              <span>AMD Ryzen 5 5600X</span>
            </div>
            <div className="col-span-2 w-full text-center">
              <h1>${pricePerItem}</h1>
            </div>
            <div className="col-span-1 w-full text-center flex items-center justify-center gap-5">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="bg-danger text-white p-1 rounded-lg"
              >
                <MinusIcon className="w-5 h-5" />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-success text-white p-1 rounded-lg"
              >
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="col-span-2 w-full text-center">
              <h1>${pricePerItem * quantity}</h1>
            </div>
            <div className="col-span-1 w-full text-center">
              <button className="cursor-pointer p-2 text-white bg-danger border-2 border-danger hover:bg-white hover:text-danger rounded-lg duration-150">
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Box */}
      <div className="flex flex-col gap-2 col-span-1">
        <div className="bg-white rounded-md border border-dark-300 p-5 flex justify-center items-center">
          <span className="font-medium">Order Summary</span>
        </div>
        <div className="bg-white rounded-md border border-dark-300 p-5 flex flex-col gap-5 justify-between items-center">
          <div className="flex justify-between items-center w-full border-y border-dark-300 py-3">
            <span className="text-lg">Total Amount</span>
            <span className="text-danger font-medium">
              $ {pricePerItem * quantity}
            </span>
          </div>
          <button className="w-full font-medium cursor-pointer py-2 px-5 text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary rounded-lg duration-150">
            Checkout
          </button>
        </div>
      </div>
    </Section>
  );
}
