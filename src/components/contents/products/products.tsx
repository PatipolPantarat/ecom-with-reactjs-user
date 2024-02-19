import { useState, useEffect } from "react";
// import ProductService from "../../../services/productservice";
// import { SearchInput } from "../../searchInput";
import { IProduct } from "../../../utils/interface";
import { Section } from "../../section";
import { Card } from "../../card";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { getProducts } from "../../../Slices/productSlice";

export default function Products() {
  // const { userData } = useAuth();
  const navigate = useNavigate();
  const [toggleFav, setToggleFav] = useState<boolean>(false);
  // const [searchParams, setSearchParams] = useState<string>("");
  // const [productsList, setProductsList] = useState<IProduct[]>([]);
  // const fetchAllProducts = (searchParams: string) => {
  //   ProductService.getProducts(searchParams).then((data) => {
  //     if (Array.isArray(data)) setProductsList(data);
  //   });
  // };

  // test use redux
  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   fetchAllProducts(searchParams);
  // }, [searchParams]);
  const handleFavClick = (
    product: IProduct,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    console.log("fav click: ", product);
    setToggleFav(!toggleFav);
  };
  const handleCardClick = (id: string) => {
    navigate("/detail/" + id);
  };

  // !!userData.userFav.find((item) => product.id === item.id)

  return (
    <Section>
      <div className="flex justify-center py-3 mx-auto w-1/2">
        {/* <SearchInput onChange={(value) => setSearchParams(value)} /> */}
      </div>
      <div className="mt-5 gap-2 grid lg:grid-cols-6">
        {status === "loading" && <p>Loading...</p>}
        {/* Card */}
        {status === "succeeded" &&
          products.map((product, idx) => (
            <Card
              key={idx}
              isFav={true}
              product={product}
              favClick={handleFavClick}
              cardClick={handleCardClick}
            />
          ))}
        {status === "failed" && <p>Error: {error}</p>}
      </div>
    </Section>
  );
}
