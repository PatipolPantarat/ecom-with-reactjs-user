import { Box } from "../components/box";
import { Button } from "../components/button";
import { Section } from "../components/section";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import ProductService from "../services/productservice";
import { IProduct } from "../utils/interface";
import { FavButton } from "../components/button";

export default function DetailLayout() {
  const { productId } = useParams();
  console.log("params: ", productId);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { addItem } = useCart();
  const [amount, setAmount] = useState<number>(1);
  const fetchProductById = (id: string) => {
    ProductService.getProductsById(id).then((data) => {
      if (data) setProduct(data);
    });
  };
  const handleFavClick = (id: string) => {
    console.log("detail fav click:", id);
    setProduct({
      ...product,
      isFav: !product.isFav,
    });
  };
  useEffect(() => {
    fetchProductById(productId!);
  }, [productId]);
  return (
    <Section className="flex flex-col gap-2 w-[1024px]">
      {/* Image, Name, Sold, Price, Amount, Quantity, Add to Card */}
      <Box className="grid grid-cols-2 gap-5 place-items-center">
        <div className="max-w-[450px] aspect-square relative">
          <img src={product.image} alt="#" />
          <FavButton
            isFav={product.isFav}
            onClick={() => handleFavClick(product.id)}
          />
        </div>
        <div className="h-full w-full flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-5 p-5">
            <h1 className="text-2xl font-medium line-clamp-2">
              {product.name}
            </h1>
            <p className="text-dark-400">sold {product.sold}</p>
            <p className="text-4xl font-bold">${product.price}</p>
          </div>
          <div className="border border-dark-300 p-5 flex flex-col item-center gap-5 rounded-md">
            <div className="flex justify-between">
              <div className="flex gap-5">
                <p>amount</p>
                <button
                  type="button"
                  onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}
                  className="border p-1 border-danger rounded-md active:scale-95 duration-150 active:bg-danger"
                >
                  <MinusIcon className="h-4 w-4 text-danger" />
                </button>
                <span>{amount}</span>
                <button
                  type="button"
                  onClick={() => setAmount(amount + 1)}
                  className="border p-1 border-success rounded-md active:scale-95 duration-150 active:bg-success"
                >
                  <PlusIcon className="h-4 w-4 text-success" />
                </button>
              </div>
              <p className="text-dark-400">Total quantity 27</p>
            </div>
            <Button
              type="button"
              onClick={() => addItem(product, amount)}
              variant="primary"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </Box>
      {/* Description */}
      <Box className="flex flex-col gap-2">
        <div className="bg-primary-light w-full p-3">
          <h1 className="text-xl font-medium">Description</h1>
        </div>
        <div className="border border-dark-300 w-full p-3">
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum commodi doloribus cupiditate quae modi,
            architecto doloremque autem quam accusamus quod deleniti consequatur
            sint distinctio saepe error aliquid eum aliquam earum expedita. Et
            perferendis aliquid repellat asperiores! Aliquid voluptatum, quae
            repudiandae tempora culpa eius molestias quas repellendus vero,
            laborum laboriosam!
          </p>
        </div>
      </Box>
    </Section>
  );
}
