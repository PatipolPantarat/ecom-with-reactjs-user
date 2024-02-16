import { useState, useEffect } from "react";
import ProductService from "../services/productservice";
import { IProduct } from "../utils/interface";
import { Section } from "../components/section";
// import Selection from "../../selection";
import { SearchInput } from "../components/searchInput";
import { SetSpecCard } from "../components/card";
import { SpecMenuBar } from "../components/menubar";
import { ISpecMenu } from "../utils/interface";

export default function SetSpecLayout() {
  const [searchParams, setSearchParams] = useState<string>("");
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [selectedCate, setSelectedCate] = useState<string>("cpu");

  const [specMenus, setSpecMenus] = useState<ISpecMenu[]>([
    {
      id: 1,
      name: "cpu",
      product: {
        name: "",
      },
    },
    {
      id: 2,
      name: "mainboard",
      product: {
        name: "",
      },
    },
    {
      id: 3,
      name: "vga card",
      product: {
        name: "",
      },
    },
    {
      id: 4,
      name: "memory",
      product: {
        name: "",
      },
    },
    {
      id: 5,
      name: "harddisk",
      product: {
        name: "",
      },
    },
    {
      id: 6,
      name: "ssd sata",
      product: {
        name: "",
      },
    },
    {
      id: 7,
      name: "ssd m.2",
      product: {
        name: "",
      },
    },
    {
      id: 8,
      name: "case",
      product: {
        name: "",
      },
    },
    {
      id: 9,
      name: "power supply",
      product: {
        name: "",
      },
    },
    {
      id: 10,
      name: "cpu cooler",
      product: {
        name: "",
      },
    },
  ]);

  const fetchProductsByCategory = (category: string, searchParams?: string) => {
    ProductService.getProductsByCategory(category, searchParams).then(
      (data) => {
        if (Array.isArray(data)) setProductsList(data);
        else return setProductsList([]);
      }
    );
  };
  useEffect(() => {
    fetchProductsByCategory(selectedCate, searchParams);
  }, [selectedCate, searchParams]);

  const handleDetailClick = (id: string) => {
    alert("detail click: " + id);
  };

  const handleSpecMenuClick = (selectedCate: string) => {
    fetchProductsByCategory(selectedCate.toLowerCase());
    setSelectedCate(selectedCate);
  };

  const handleSetSpecClick = (product: IProduct) => {
    console.log(
      `menu name: ${selectedCate}\nchange p.name to : ${product.name}`
    );
    updateItem(selectedCate.toLowerCase(), product);
  };

  const updateItem = (menuName: string, product: IProduct) => {
    // console.log(`menu name: ${name}\nchange p.name to : ${productName}`);
    setSpecMenus(
      specMenus.map((item) =>
        item.name === menuName
          ? {
              ...item,
              product: {
                name: product.name,
                image: product.image,
                price: product.price,
              },
            }
          : item
      )
    );
  };

  const clearItem = () => {
    setSpecMenus(
      specMenus.map((item) => ({
        ...item,
        product: {
          name: "",
          image: "",
          price: 0,
        },
      }))
    );
  };

  const handleRemove = (
    menuName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    console.log("handleRemove Clicked");
    setSpecMenus(
      specMenus.map((item) =>
        item.name === menuName
          ? {
              ...item,
              product: {
                name: "",
                image: "",
                price: 0,
              },
            }
          : item
      )
    );
  };

  return (
    <Section>
      <div className=" flex flex-col justify-center sm:flex-row gap-5">
        <div className="min-w-[390px] h-fit flex flex-col gap-2">
          <div className="h-20 bg-white grid grid-cols-2 rounded-md place-content-center border border-dark-300 px-5">
            <span className="text-lg text-nowrap truncate font-medium">
              Total
            </span>
            <span className="text-2xl font-medium text-warning text-end w-full">
              ${specMenus.reduce((a, b) => a + (b.product.price ?? 0), 0)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <SpecMenuBar
              handleSpecMenuClick={handleSpecMenuClick}
              specMenus={specMenus}
              handleRemove={handleRemove}
            />
          </div>

          <div className="flex justify-between items-center gap-5">
            <button
              className="text-lg bg-secondary text-white p-2 rounded-lg hover:bg-white hover:text-secondary border-2 border-secondary duration-150 font-medium w-1/2"
              onClick={() => clearItem()}
            >
              Clear
            </button>
            <button className="text-lg bg-primary text-white p-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary duration-150 font-medium w-1/2">
              Create Set Spec
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="h-20 bg-white flex justify-evenly items-center rounded-md border border-dark-300 px-5 gap-5">
            <div className="w-full">
              <SearchInput onChange={(value) => setSearchParams(value)} />
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            {productsList.map((product) => (
              <SetSpecCard
                key={product.id}
                product={product}
                detailClick={() => handleDetailClick(product.id)}
                setSpecClick={() => handleSetSpecClick(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
