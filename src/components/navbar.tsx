import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { logout } from "../Slices/authSlice";

interface INavLink {
  path: string;
  text: string;
}

const NavLinks: INavLink[] = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/setspec",
    text: "Set Spec",
  },
];

export const Navbar = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className="bg-white h-16 shadow-md fixed w-full z-10">
      <div className="h-full grid grid-cols-3 mx-auto max-w-[1440px] place-content-center px-2">
        <div className=" flex items-center">
          <Link to={"/"} className="font-bold text-3xl cursor-pointer">
            LOGO
          </Link>
        </div>
        <div className="flex justify-evenly items-center">
          {NavLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="bg-white hover:bg-dark-100 px-4 py-2 rounded-lg duration-150 cursor-pointer"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center ">
          <Link to={"/cart"}>
            <div className="relative p-3">
              <ShoppingCartIcon className="h-6 w-6 text-dark-400 hover:scale-105 duration-150" />
              <div className="absolute top-0 right-0 text-sm text-primary font-bold rounded-full">
                {cartItems.length}
              </div>
            </div>
          </Link>
          <Link to={"/account/profile"} className=" w-28 flex justify-end">
            {user ? user : "Account"}
          </Link>
          <div className=" w-28 flex justify-end">
            {isAuthenticated ? (
              <Button type="button" onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            ) : (
              <Button type="button" onClick={handleLogin} variant="primary">
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
