import { Card } from "../../card";
import { IProduct } from "../../../utils/interface";
export default function Render({ data }: { data: IProduct[] }) {
  return (
    <>
      {data.map((product) => (
        <Card key={product.id}>
          <div className="flex flex-col justify-between h-full">
            <div>
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full"
              />
              <div className="mt-2">
                <p className="truncate max-w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Odio, atque.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <p>${product.id}</p>
              <p className="text-sm text-dark-400">ขายแล้ว {product.id} ชิ้น</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
