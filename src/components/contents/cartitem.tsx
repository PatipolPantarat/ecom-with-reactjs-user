import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IProduct } from "../../utils/interface";
import commaNumber from "comma-number";

export const CartItem = ({
  amount,
  product,
  onRemove,
  onIncrement,
  onDecrement,
}: {
  amount: number;
  product: IProduct;
  onRemove: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <>
      {/* Cart List */}
      <div className="bg-white rounded-md border border-dark-300 p-5 flex items-center font-medium">
        <div className="grid grid-cols-10 place-items-center w-full ms-5">
          <div className="col-span-4 w-full flex items-center gap-5">
            <img
              src={product.image}
              alt=""
              className="h-[60px] w-[60px] rounded-md object-cover"
            />
            <span>{product.name}</span>
          </div>
          <div className="col-span-2 w-full text-center">
            <h1>${commaNumber(product.price)}</h1>
          </div>
          <div className="col-span-1 w-full flex flex-col gap-2">
            <div className="text-center flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={onDecrement}
                className="border p-1 border-danger rounded-md active:scale-95 duration-150 active:bg-danger"
              >
                <MinusIcon className="h-4 w-4 text-danger" />
              </button>
              <span>{amount}</span>
              <button
                type="button"
                onClick={onIncrement}
                className="border p-1 border-success rounded-md active:scale-95 duration-150 active:bg-success"
              >
                <PlusIcon className="h-4 w-4 text-success" />
              </button>
            </div>
            <div className="text-center">
              <span className="text-dark-400">stock {product.stock}</span>
            </div>
          </div>
          <div className="col-span-2 w-full text-center">
            <h1>${commaNumber(product.price * amount)}</h1>
          </div>
          <div className="col-span-1 w-full text-center">
            <button
              className="cursor-pointer p-2 text-white bg-danger border-2 border-danger hover:bg-white hover:text-danger rounded-lg duration-150"
              type="button"
              onClick={onRemove}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
