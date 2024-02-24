import {
  UserIcon,
  HomeModernIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    text: "My favorites",
    component: null,
    path: "favorites",
  },
  {
    icon: <TruckIcon className="w-8 h-8" />,
    text: "My purchases",
    component: null,
    path: "purchases",
  },
];

export const AccountMenuBar = () => {
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

const tabs = [
  {
    name: "All",
    path: "all",
  },
  {
    name: "Approval",
    path: "approval",
  },
  {
    name: "Delivery",
    path: "delivery",
  },
  {
    name: "Successful",
    path: "successful",
  },
  {
    name: "Cancel",
    path: "cancel",
  },
];

export const TabsBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(0);
  const activeMenu = (index: number, path: string) => {
    setIsMenuActive(index);
    console.log(`${location.pathname}?tab=${path}`);
    navigate(`${location.pathname}?tab=${path}`);
  };
  return (
    <>
      {tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          className={`p-5 border-b-2 hover:bg-dark-100
          ${isMenuActive === index ? "border-primary" : "border-white"}
          `}
          onClick={() => activeMenu(index, tab.path)}
        >
          {tab.name}
        </button>
      ))}
    </>
  );
};

import { PencilIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ISpecMenu } from "../utils/interface";

export const SpecMenuBar = ({
  specMenus,
  handleSpecMenuClick,
  handleRemove,
}: {
  specMenus: ISpecMenu[];
  handleSpecMenuClick: (selectedCate: string) => void;
  handleRemove: (
    menuName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}) => {
  const [isMenuActive, setIsMenuActive] = useState(0);
  const activeMenu = (index: number) => {
    setIsMenuActive(index);
    handleSpecMenuClick(specMenus[index].name);
    console.log("active menu: ", specMenus[index].name);
  };

  return (
    <>
      {specMenus.map((item, index) => (
        <div
          key={index}
          className={`h-20 bg-white grid grid-cols-5 rounded-md place-content-center border border-dark-300 px-2 gap-2 border-l-4 hover:border-primary relative ${
            isMenuActive === index ? "bg-primary-light border-l-primary" : ""
          }`}
          onClick={() => activeMenu(index)}
        >
          <div
            className={`absolute top-0 right-0 p-1 z-10 ${
              !item.product?.image && "hidden"
            }`}
          >
            <button
              type="button"
              onClick={(event) => handleRemove(item.name, event)}
            >
              <XMarkIcon className="h-5 w-5 text-danger cursor-pointer" />
            </button>
          </div>
          {item.product?.image && (
            <div className="col-span-1 flex justify-center items-center">
              <img
                src={item.product?.image}
                alt=""
                className="rounded-md h-14 w-14 object-cover"
              />
            </div>
          )}
          <div className="col-span-3 flex flex-col justify-evenly h-full">
            <span
              className={`text-lg text-nowrap truncate font-medium w-[180px] capitalize ${
                !item.product.image && "ps-5"
              }`}
            >
              {item.product?.name ? item.product.name : item.name}
            </span>
            {item.product?.name && (
              <div className="flex gap-3 text-sm">
                <span className="bg-info px-3 rounded-lg cursor-pointer text-white">
                  detail
                </span>
                <span className="text-danger flex items-center gap-2 hover:underline cursor-pointer">
                  amount x 1 <PencilIcon className="h-3 w-3" />
                </span>
              </div>
            )}
          </div>
          <div className="col-span-1 flex justify-end items-center">
            {item.product?.price && item.product?.price !== 0 ? (
              <span className="text-sm font-medium text-warning text-center w-full">
                ${item.product?.price}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
