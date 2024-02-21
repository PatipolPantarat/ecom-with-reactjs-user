import { FavCard } from "../../card";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { removeUserFav } from "../../../Slices/userSlice";

export default function MyFavorites() {
  const navigate = useNavigate();
  const { userFav } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const handleCardClick = (productId: string) => {
    navigate("/detail/" + productId);
  };

  const handleRemoveFav = (
    productId: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    dispatch(removeUserFav(productId));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="p-5 flex justify-between items-center border-b border-dark-300">
        <h1 className="text-lg font-medium text-dark">My Favorites</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {/* Card */}
        {userFav.map((product) => (
          <FavCard
            key={product.id}
            product={product}
            cardClick={handleCardClick}
            isFav={true}
            favClick={handleRemoveFav}
          />
        ))}
      </div>
    </div>
  );
}
