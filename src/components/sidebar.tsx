import {
  UserIcon,
  HomeModernIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface IMenu {
  icon: JSX.Element;
  text: string;
  component: JSX.Element | null;
}

const menus: IMenu[] = [
  {
    icon: <UserIcon className="w-8 h-8" />,
    text: "My profile",
    component: null,
  },
  {
    icon: <HomeModernIcon className="w-8 h-8" />,
    text: "My address",
    component: null,
  },
  {
    icon: <HeartIcon className="w-8 h-8" />,
    text: "Favorites",
    component: null,
  },
  {
    icon: <TruckIcon className="w-8 h-8" />,
    text: "My orders",
    component: null,
  },
];

export const Sidebar = () => {
  const [isMenuActive, setIsMenuActive] = useState<number | null>(null);
  const activeMenu = (index: number) => {
    setIsMenuActive(index);
  };
  return (
    <>
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`flex items-center p-4 gap-5 text-dark-400 hover:text-dark bg-white hover:bg-dark-100 duration-150 w-full cursor-pointer ${
            isMenuActive === index
              ? "border-r-4 border-primary text-dark"
              : "border-r-4 border-white"
          }`}
          onClick={() => activeMenu(index)}
        >
          {menu.icon}
          <span className="text-lg font-medium">{menu.text}</span>
        </div>
      ))}
    </>
  );
};
