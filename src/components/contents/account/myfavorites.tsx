import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

interface IFavList {
  isFav: boolean;
  image: string;
  name: string;
  price: number;
  sold: number;
}

const myFavList: IFavList[] = [
  {
    isFav: true,
    image: "/src/assets/test_image/acheron_01.jpg",
    name: "Acheron",
    price: 1999,
    sold: 20,
  },
  {
    isFav: true,
    image: "/src/assets/test_image/blackswan_01.jpg",
    name: "BlackSwan",
    price: 2199,
    sold: 20,
  },
  {
    isFav: true,
    image: "/src/assets/test_image/hanabi_01.jpg",
    name: "Hanabi",
    price: 2299,
    sold: 20,
  },
  {
    isFav: true,
    image: "/src/assets/test_image/robin_01.jpg",
    name: "Robin",
    price: 3999,
    sold: 20,
  },
  {
    isFav: true,
    image: "/src/assets/test_image/stelle_01.jpg",
    name: "Stelle",
    price: 3999,
    sold: 20,
  },
];

export default function MyFavorites() {
  const handleFavClick = (index: number, isFav: boolean) => {
    myFavList[index].isFav = isFav;
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-lg font-medium text-dark">My Favorites</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {/* Card */}

        {myFavList.map((myFav, index) => (
          <div
            key={index}
            className="pb-3 aspect-[3/4] relative border border-dark-300 rounded-md hover:border-primary hover:shadow-md duration-150"
          >
            <button
              type="button"
              onClick={() => handleFavClick(index, myFav.isFav)}
              className="absolute top-0 right-0  mt-2 me-2"
            >
              {myFav.isFav ? (
                <HeartSolid className="h-10 w-10 text-rose-500" />
              ) : (
                <HeartOutline className="h-10 w-10 text-rose-500" />
              )}
            </button>
            <div className="flex flex-col justify-between h-full">
              <img src={myFav.image} alt="#" className="w-full rounded-md" />
              <div className="mt-2 px-3">
                <p className="truncate max-w-full">{myFav.name}</p>
              </div>
              <div className="flex justify-between items-end px-3">
                <p>${myFav.price}</p>
                <p className="text-sm text-dark-400">
                  ขายแล้ว {myFav.sold} ชิ้น
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
