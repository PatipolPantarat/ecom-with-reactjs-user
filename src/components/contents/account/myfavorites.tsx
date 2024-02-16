import { useState, useEffect } from "react";
import { Card } from "../../card";
import { IProduct } from "../../../utils/interface";
import ProductService from "../../../services/productservice";
import { Link, useNavigate } from "react-router-dom";

export default function MyFavorites() {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useState<string>("");
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const fetchAllProducts = () => {
    ProductService.getProducts().then((data) => {
      if (Array.isArray(data)) setProductsList(data);
    });
  };
  // setSearchParams("");
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // const [myFavList, setMyFavList] = useState<IProduct[]>([...testFav]);
  const handleFavClick = (id: string) => {
    setProductsList(
      productsList.map((item) =>
        item.id === id ? { ...item, isFav: !item.isFav } : item
      )
    );
  };
  const handleCardClick = (id: string) => {
    navigate("/detail/" + id);
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
              <Link to={`/detail/${item.id}`} key={item.id}>
                <Card item={item} favClick={() => handleFavClick(item.id)} />
              </Link>
            );
        })}
      </div>
      <hr />
      {/* <div className="p-5 flex justify-between items-center">
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
      </div> */}
    </div>
  );
}
