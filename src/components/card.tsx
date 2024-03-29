import { CardProps, FavCardProps, SetSpecCardProps } from "../utils/interface";
import { FavButton } from "./button";

export const Card = ({ product, cardClick }: CardProps) => {
  return (
    <div
      className="aspect-[3/4] max-w-[260px] relative bg-white border border-dark-300 rounded-md shadow-sm hover:shadow-lg duration-150 cursor-pointer"
      onClick={() => cardClick(product._id)}
    >
      <div className="flex flex-col h-full">
        <div className="bg-dark-200 aspect-square">
          <img
            src={product.image}
            alt="#"
            className="w-full rounded-md h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <p className="truncate max-w-full px-3 py-2">{product.name}</p>
          <div className="flex justify-between products-end px-3 py-2">
            <p>${product.price}</p>
            <p className="text-sm text-dark-400 flex items-end">
              sold {product.sold}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FavCard = ({
  product,
  cardClick,
  isFav,
  favClick,
}: FavCardProps) => {
  return (
    <div
      className="aspect-[3/4] max-w-[260px] relative bg-white border border-dark-300 rounded-md shadow-sm hover:shadow-lg duration-150 cursor-pointer"
      onClick={() => cardClick(product._id)}
    >
      <div className="flex flex-col h-full">
        <div className="bg-dark-200 aspect-square">
          <FavButton
            isFav={isFav}
            onClick={(event) => favClick(product._id, event)}
            className="absolute top-3 right-3"
          />
          <img
            src={product.image}
            alt="#"
            className="w-full rounded-md h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <p className="truncate max-w-full px-3 py-2">{product.name}</p>
          <div className="flex justify-between products-end px-3 py-2">
            <p>${product.price}</p>
            <p className="text-sm text-dark-400 flex items-end">
              sold {product.sold}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SetSpecCard = ({
  product,
  detailClick,
  setSpecClick,
}: SetSpecCardProps) => {
  return (
    <div className="max-w-[260px] relative bg-white border border-dark-300 rounded-md hover:shadow-md duration-150">
      <div className="flex flex-col h-full">
        <div className="px-3 py-2">
          <h1 className="font-bold text-danger capitalize">
            {product.category}
          </h1>
          <p className="truncate w-full">{product.name}</p>
        </div>
        <div className="px-5 py-2 ">
          <img src={product.image} alt="#" className="w-full rounded-md" />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between px-3 py-2">
            <p className="truncate max-w-full">Price</p>
            <p className="truncate max-w-full text-warning font-medium">
              ${product.price}
            </p>
          </div>
          <div className="grid grid-cols-2 cursor-pointer">
            <button
              type="button"
              onClick={() => setSpecClick(product._id)}
              className="p-1 bg-primary text-white rounded-bl-md"
            >
              Add to spec
            </button>
            <button
              type="button"
              onClick={() => detailClick(product._id)}
              className="p-1 bg-secondary text-white rounded-br-md"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
