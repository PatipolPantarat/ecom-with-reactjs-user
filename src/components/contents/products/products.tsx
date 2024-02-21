import { useState, useEffect } from "react";
import { SearchInput } from "../../searchInput";
import { Section } from "../../section";
import { Card } from "../../card";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { getProducts } from "../../../Slices/productSlice";
import { useDebouncedCallback } from "use-debounce";
import { ProductsLoader } from "../../loader";

export default function Products() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(getProducts(searchParams));
  }, [dispatch, searchParams]);

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("searchParams : ", searchParams);
      setSearchParams(event.target.value);
    },
    500
  );

  const handleCardClick = (id: string) => {
    navigate("detail/" + id);
  };

  return (
    <Section>
      <div className="flex justify-center py-3 mx-auto w-1/2">
        <SearchInput onChange={(e) => handleSearch(e)} />
      </div>
      {status === "loading" && <ProductsLoader />}
      <div className="mt-5 gap-2 grid lg:grid-cols-6">
        {status === "failed" && <p>Error: {error}</p>}
        {/* Card */}
        {status === "succeeded" &&
          products.map((product, idx) => (
            <Card key={idx} product={product} cardClick={handleCardClick} />
          ))}
      </div>
    </Section>
  );
}
