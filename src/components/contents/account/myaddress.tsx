import { Button } from "../../button";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface IAddressList {
  name: string;
  address: string;
}

const addressList: IAddressList[] = [
  {
    name: "Patipol Pantarat",
    address:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti esse maxime rerum quisquam! Dicta.",
  },
  {
    name: "Patipol Pantarat",
    address:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti esse maxime rerum quisquam! Dicta.",
  },
  {
    name: "Patipol Pantarat",
    address:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti esse maxime rerum quisquam! Dicta.",
  },
  {
    name: "Patipol Pantarat",
    address:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti esse maxime rerum quisquam! Dicta.",
  },
  {
    name: "Patipol Pantarat",
    address:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti esse maxime rerum quisquam! Dicta.",
  },
];

export default function MyAddress() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className=" p-5 flex justify-between items-center">
        <h1 className="text-lg font-medium text-dark">My Address</h1>
        <Button type="button" variant="primary">
          <PlusIcon className="w-5 h-5" />
          Add
        </Button>
      </div>
      <hr className="text-dark-300" />
      {addressList.map((address, index) => (
        <div
          key={index}
          className=" p-5 flex justify-between gap-5 border-b border-dark-300 relative"
        >
          <div className="">
            <span className="font-medium">{address.name}</span>
            <p className="text-dark-400">{address.address}</p>
          </div>
          <div className="p-2 grid place-items-center me-5">
            <Button type="button" variant="warning">
              Edit
            </Button>
          </div>
          <button
            type="button"
            className="absolute top-0 right-0 text-dark-400 hover:text-white rounded-lg hover:bg-danger duration-150"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      ))}
    </div>
  );
}
