import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

interface CardProps {
  item: {
    id: number;
    isFav: boolean;
    name: string;
    image: string;
    price: number;
    sold: number;
    category?: string;
  };
  favClick?: (id: number) => void;
}
export const Card = ({ item, favClick }: CardProps) => {
  return (
    <div className="aspect-[3/4] max-w-[260px] relative bg-white border border-dark-300 rounded-md hover:border-primary hover:shadow-md duration-150">
      <button
        type="button"
        onClick={() => favClick && favClick(item.id)}
        className="absolute top-0 right-0 mt-2 me-2 rounded-lg bg-white"
      >
        {item.isFav ? (
          <HeartSolid className="h-8 w-8 text-rose-500" />
        ) : (
          <HeartOutline className="h-8 w-8 text-rose-500" />
        )}
      </button>
      <div className="flex flex-col h-full">
        <img src={item.image} alt="#" className="w-full rounded-md" />

        <div className="flex flex-col justify-between h-full">
          <p className="truncate max-w-full px-3 py-2">{item.name}</p>
          <div className="flex justify-between items-end px-3 py-2">
            <p>${item.price}</p>
            <p className="text-sm text-dark-400">ขายแล้ว {item.sold} ชิ้น</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SetSpecCardProps extends CardProps {
  detailClick: (id: number) => void;
  setSpecClick: (id: number) => void;
}

export const SetSpecCard = ({
  item,
  detailClick,
  setSpecClick,
}: SetSpecCardProps) => {
  return (
    <div className="max-w-[260px] relative bg-white border border-dark-300 rounded-md hover:shadow-md duration-150">
      <div className="flex flex-col h-full">
        <div className="px-3 py-2">
          <h1 className="font-bold text-danger capitalize">{item.category}</h1>
          <p className="truncate w-full">{item.name}</p>
        </div>
        <div className="px-5 py-2 ">
          <img src={item.image} alt="#" className="w-full rounded-md" />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between px-3 py-2">
            <p className="truncate max-w-full">Price</p>
            <p className="truncate max-w-full text-warning font-medium">
              ${item.price}
            </p>
          </div>
          <div className="grid grid-cols-2 cursor-pointer">
            <button
              type="button"
              onClick={() => setSpecClick(item.id)}
              className="p-1 bg-primary text-white rounded-bl-md"
            >
              Add to spec
            </button>
            <button
              type="button"
              onClick={() => detailClick(item.id)}
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
