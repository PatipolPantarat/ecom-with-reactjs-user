import Render from "./products/render";
import ProductService from "../../services/productservice";
import { useState, useEffect } from "react";
import { IProduct } from "../../utils/interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Section } from "../section";

export default function SetSpec() {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const fetchAllProducts = () => {
    ProductService.getProducts().then((data) => {
      setProductsList(data);
    });
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // const menus: string[] = [
  //   "AMD Ryzen 5 5600X",
  //   "Mainboard",
  //   "VGA Card",
  //   "Memory",
  //   "Harddisk",
  //   "SSD Sata",
  //   "SSD M.2",
  //   "Case",
  //   "Power Supply",
  //   "CPU Cooler",
  // ];
  interface IMenu {
    name: string;
    product: string;
  }
  const menus: IMenu[] = [
    {
      name: "CPU",
      product: "AMD Ryzen 5 5600X",
    },
    {
      name: "Mainboard",
      product: "",
    },
    {
      name: "VGA Card",
      product: "",
    },
    {
      name: "Memory",
      product: "",
    },
    {
      name: "Harddisk",
      product: "WD Blue 1TB",
    },
    {
      name: "SSD Sata",
      product: "",
    },
    {
      name: "SSD M.2",
      product: "",
    },
    {
      name: "Case",
      product: "",
    },
    {
      name: "Power Supply",
      product: "",
    },
    {
      name: "CPU Cooler",
      product: "",
    },
  ];
  return (
    <Section>
      <div className=" flex flex-col justify-center sm:flex-row gap-5">
        <div className="w-[360px] h-fit flex flex-col gap-2">
          <div className="h-20 bg-white grid grid-cols-2 rounded-md place-content-center border border-dark-300 px-5">
            <span className="text-lg text-nowrap truncate font-medium">
              Total
            </span>
            <span className="text-xl font-medium text-warning text-end w-full">
              $1,000
            </span>
          </div>
          {menus.map((item) => (
            <div
              key={item.name}
              className="h-20 bg-white grid grid-cols-5 rounded-md place-content-center border border-dark-300 px-2 gap-2"
            >
              <div className="col-span-1  flex justify-center items-center">
                <img
                  src="https://via.placeholder.com/60x60"
                  alt=""
                  className="rounded-md h-14 w-14 object-cover"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-evenly h-full">
                <span className="text-lg text-nowrap truncate font-medium w-[180px]">
                  {item.product ? item.product : item.name}
                </span>
                {item.product && (
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
                {item.product && (
                  <span className="text-xl font-medium text-warning text-center w-full">
                    $1,000
                  </span>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center gap-5">
            <button className="text-lg bg-secondary text-white p-2 rounded-lg hover:bg-white hover:text-secondary border-2 border-secondary duration-150 font-medium w-1/2">
              Clear
            </button>
            <button className="text-lg bg-primary text-white p-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary duration-150 font-medium w-1/2">
              Create Set Spec
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-20 bg-white flex justify-evenly items-center rounded-md place-content-center border border-dark-300 px-5">
            <span className="text-lg text-nowrap truncate font-medium">
              Filter 1
            </span>
            <span className="text-lg text-nowrap truncate font-medium">
              Filter 2
            </span>
            <span className="text-lg text-nowrap truncate font-medium">
              Filter 3
            </span>
          </div>
          <div className="  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <Render data={productsList} />
          </div>
        </div>
      </div>
    </Section>
  );
}
