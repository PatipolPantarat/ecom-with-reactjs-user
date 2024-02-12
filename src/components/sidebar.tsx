import {
  UserIcon,
  HomeModernIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IMenu {
  icon: JSX.Element;
  text: string;
  component: JSX.Element | null;
  path: string;
}

const menus: IMenu[] = [
  {
    icon: <UserIcon className="w-8 h-8" />,
    text: "My profile",
    component: null,
    path: "profile",
  },
  {
    icon: <HomeModernIcon className="w-8 h-8" />,
    text: "My address",
    component: null,
    path: "address",
  },
  {
    icon: <HeartIcon className="w-8 h-8" />,
    text: "My Favorites",
    component: null,
    path: "favorites",
  },
  {
    icon: <TruckIcon className="w-8 h-8" />,
    text: "My orders",
    component: null,
    path: "orders",
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(0);
  const activeMenu = (index: number, path: string) => {
    setIsMenuActive(index);
    navigate(`/account/${path}`);
  };
  return (
    <>
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`flex items-center p-4 gap-5 text-dark-400 hover:text-dark bg-white hover:bg-dark-100 duration-150 w-full cursor-pointer ${
            isMenuActive === index
              ? "border-r-4 border-primary text-primary"
              : "border-r-4 border-white"
          }`}
          onClick={() => activeMenu(index, menu.path)}
        >
          {menu.icon}
          <span className="text-lg font-medium">{menu.text}</span>
        </div>
      ))}
    </>
  );
};
