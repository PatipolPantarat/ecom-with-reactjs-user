import { useState, useEffect } from "react";
import ProductService from "../../../services/productservice";
import { SearchInput } from "../../searchInput";
import Render from "./render";
import { IProduct } from "../../../utils/interface";
import { Section } from "../../section";

export default function Products() {
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
  return (
    <Section>
      <div className="flex justify-center py-3 mx-auto w-1/2">
        <SearchInput onChange={(value) => setSearchParams(value)} />
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        <Render data={productsList} />
      </div>
    </Section>
  );
}
