import { useState } from "react";
import { Card } from "../../card";
import { IProduct } from "../../../utils/interface";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MyFavorites() {
  const navigate = useNavigate();
  const { userData, updateUserFav } = useAuth();
  const [myFavList, setMyFavList] = useState<IProduct[]>([...userData.userFav]);
  const handleFavClick = (
    product: IProduct,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    console.log("handleFavClick: ", product);
    updateUserFav(false, product);
    setMyFavList(myFavList.filter((item) => item.id !== product.id));
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

        {myFavList.map((product) => (
          <Card
            key={product.id}
            isFav={true}
            product={product}
            favClick={handleFavClick}
            cardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}
