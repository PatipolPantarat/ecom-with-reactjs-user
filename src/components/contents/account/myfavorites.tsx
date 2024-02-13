import { useState, useEffect } from "react";
import { Card } from "../../card";
import { IProduct } from "../../../utils/interface";
import ProductService from "../../../services/productservice";

// interface IFavList {
//   id: number;
//   isFav: boolean;
//   name: string;
//   image: string;
//   price: number;
//   sold: number;
// }

// const testFav: IFavList[] = [
//   {
//     id: 1,
//     isFav: true,
//     name: "Acheron",
//     image: "/src/assets/test_image/acheron_01.jpg",
//     price: 1999,
//     sold: 20,
//   },
//   {
//     id: 2,
//     isFav: true,
//     name: "BlackSwan",
//     image: "/src/assets/test_image/blackswan_01.jpg",
//     price: 2199,
//     sold: 20,
//   },
//   {
//     id: 3,
//     isFav: true,
//     name: "Hanabi",
//     image: "/src/assets/test_image/hanabi_01.jpg",
//     price: 2299,
//     sold: 20,
//   },
//   {
//     id: 4,
//     isFav: false,
//     name: "Robin",
//     image: "/src/assets/test_image/robin_01.jpg",
//     price: 3999,
//     sold: 20,
//   },
//   {
//     id: 5,
//     isFav: false,
//     name: "Stelle",
//     image: "/src/assets/test_image/stelle_01.jpg",
//     price: 3999,
//     sold: 20,
//   },
// ];

export default function MyFavorites() {
  const [searchParams, setSearchParams] = useState<string>("");
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const fetchAllProducts = (searchParams: string) => {
    ProductService.getProducts(searchParams).then((data) =>
      setProductsList(data)
    );
  };

  useEffect(() => {
    fetchAllProducts(searchParams);
  }, [searchParams]);

  // const [myFavList, setMyFavList] = useState<IProduct[]>([...testFav]);
  const handleFavClick = (id: number) => {
    setProductsList(
      productsList.map((item) =>
        item.id === id ? { ...item, isFav: !item.isFav } : item
      )
    );
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="p-5 flex justify-between items-center border-b border-dark-300">
        <h1 className="text-lg font-medium text-dark">My Favorites</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {/* Card */}

        {productsList.map((item) => {
          if (item.isFav === true)
            return (
              <Card
                key={item.id}
                item={item}
                onClick={() => handleFavClick(item.id)}
              />
            );
        })}
      </div>
      <hr />
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-lg font-medium text-dark">Test Not Favorites</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {productsList.map((item) => {
          if (item.isFav === false) {
            return (
              <Card
                key={item.id}
                item={item}
                onClick={() => handleFavClick(item.id)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
