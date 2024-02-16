import { useState, useEffect } from "react";
import ProductService from "../../../services/productservice";
import { SearchInput } from "../../searchInput";
import { IProduct } from "../../../utils/interface";
import { Section } from "../../section";
import { Card } from "../../card";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState<string>("");
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const fetchAllProducts = (searchParams: string) => {
    ProductService.getProducts(searchParams).then((data) => {
      if (Array.isArray(data)) setProductsList(data);
    });
  };

  useEffect(() => {
    fetchAllProducts(searchParams);
  }, [searchParams]);
  const handleFavClick = (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    console.log("fav click: ", id);
    setProductsList(
      productsList?.map((item) =>
        item.id === id ? { ...item, isFav: !item.isFav } : item
      )
    );
  };
  const handleCardClick = (id: string) => {
    navigate("/detail/" + id);
  };
  return (
    <Section>
      <div className="flex justify-center py-3 mx-auto w-1/2">
        <SearchInput onChange={(value) => setSearchParams(value)} />
      </div>
      <div className="mt-5 gap-2 grid lg:grid-cols-6">
        {/* Card */}
        {productsList.map((item) => (
          <Card
            key={item.id}
            item={item}
            favClick={handleFavClick}
            cardClick={handleCardClick}
          />
        ))}
      </div>
    </Section>
  );
}
