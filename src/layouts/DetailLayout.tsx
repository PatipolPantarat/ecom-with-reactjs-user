import { Box } from "../components/box";
import { Button } from "../components/button";
import { Section } from "../components/section";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FavButton } from "../components/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { getProduct } from "../Slices/productSlice";
import { addItemToCart } from "../Slices/cartSlice";
import { Modal } from "../components/modal";
import { useNavigate } from "react-router-dom";
import { DetailLoader } from "../components/loader";
import { toggleUserFav } from "../Slices/userSlice";
import { IProduct } from "../utils/interface";

export default function DetailLayout() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { currentProduct, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { userFav } = useSelector((state: RootState) => state.user);
  const { productId } = useParams();
  const [amount, setAmount] = useState<number>(1);
  const [alertModal, setAlertModal] = useState<boolean>(false);

  const handleFavClick = (product: IProduct) => {
    isAuthenticated ? dispatch(toggleUserFav(product)) : setAlertModal(true);
  };
  useEffect(() => {
    dispatch(getProduct(productId as string));
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    isAuthenticated
      ? dispatch(addItemToCart({ amount, product: currentProduct }))
      : setAlertModal(true);
  };

  return (
    <Section className="flex flex-col gap-2 w-[1024px]">
      {status === "loading" && <DetailLoader />}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <>
          {/* Image, Name, Sold, Price, Amount, Quantity, Add to Card */}
          <Box className="grid grid-cols-2 gap-5 place-items-center">
            <div className="max-w-[450px] min-h-[450px] border rounded-md border-dark-300 aspect-square">
              <img
                src={currentProduct.image}
                alt="#"
                className="rounded-md w-full h-full object-cover"
              />
            </div>
            <div className="h-full w-full flex flex-col gap-5 justify-between">
              <div className="flex flex-col gap-5 p-5">
                <h1 className="text-2xl font-medium line-clamp-2">
                  {currentProduct.name}
                </h1>
                <p className="text-dark-400">sold {currentProduct.sold}</p>
                <p className="text-4xl font-bold flex items-center justify-between">
                  ${currentProduct.price}{" "}
                  <FavButton
                    isFav={userFav.some(
                      (product) => product.id === currentProduct.id
                    )}
                    onClick={() => handleFavClick(currentProduct)}
                  />
                </p>
              </div>

              <div className="border border-dark-300 p-5 flex flex-col item-center gap-5 rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <p>amount</p>
                    <button
                      type="button"
                      onClick={() =>
                        setAmount(amount > 1 ? amount - 1 : amount)
                      }
                      className="border p-1 border-danger rounded-md active:scale-95 duration-150 active:bg-danger"
                    >
                      <MinusIcon className="h-4 w-4 text-danger" />
                    </button>
                    <span>{amount}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setAmount(
                          amount < currentProduct.stock ? amount + 1 : amount
                        )
                      }
                      className="border p-1 border-success rounded-md active:scale-95 duration-150 active:bg-success"
                    >
                      <PlusIcon className="h-4 w-4 text-success" />
                    </button>
                  </div>
                  <p className="text-dark-400">
                    Total quantity {currentProduct.stock}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </Box>
          <Box className="flex flex-col gap-2">
            <div className="bg-primary-light w-full p-3">
              <h1 className="text-xl font-medium">Description</h1>
            </div>
            <div className="border border-dark-300 w-full p-3">
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur harum commodi doloribus cupiditate quae modi,
                architecto doloremque autem quam accusamus quod deleniti
                consequatur sint distinctio saepe error aliquid eum aliquam
                earum expedita. Et perferendis aliquid repellat asperiores!
                Aliquid voluptatum, quae repudiandae tempora culpa eius
                molestias quas repellendus vero, laborum laboriosam!
              </p>
            </div>
          </Box>
        </>
      )}
      <Modal
        title="Alert"
        description="You need to login first"
        onCancel={() => setAlertModal(false)}
        onSubmit={() => navigate("/login")}
        onSubmitText="Login"
        openModal={alertModal}
      />
    </Section>
  );
}
