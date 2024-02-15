import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IProduct } from "../../utils/interface";

export const CartItem = ({
  amount,
  product,
  handleAdd,
  handleRemove,
}: {
  amount: number;
  product: IProduct;
  handleAdd: (product: IProduct, amount: number) => void;
  handleRemove: (productId: string) => void;
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
            <h1>${product.price}</h1>
          </div>
          <div className="col-span-1 w-full text-center flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => {}}
              className="bg-danger text-white p-1 rounded-lg z-10 active:scale-95 duration-150"
            >
              <MinusIcon className="w-5 h-5" />
            </button>
            <span>{amount}</span>
            <button
              type="button"
              onClick={() => (
                handleAdd(product, (amount = +1)), console.log("add")
              )}
              className="bg-success text-white p-1 rounded-lg z-10 active:scale-95 duration-150"
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="col-span-2 w-full text-center">
            <h1>${product.price * amount}</h1>
          </div>
          <div className="col-span-1 w-full text-center">
            <button
              className="cursor-pointer p-2 text-white bg-danger border-2 border-danger hover:bg-white hover:text-danger rounded-lg duration-150"
              type="button"
              onClick={() => (handleRemove(product.id), console.log("remove"))}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
