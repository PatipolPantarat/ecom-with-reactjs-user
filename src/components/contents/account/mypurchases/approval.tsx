export default function Approval() {
  return (
    <>
      <div className="bg-white rounded-md border-b border-dark-300 p-5 flex items-center font-medium">
        <div className="grid grid-cols-10 place-items-center w-full ms-5">
          <div className="col-span-4 w-full flex items-center gap-5">
            <img
              src="https://via.placeholder.com/100x100"
              alt=""
              className="h-[60px] w-[60px] rounded-md object-cover"
            />
            <span>AMD Ryzen 5 5600X</span>
          </div>
          <div className="col-span-2 w-full text-center h-full flex flex-col justify-between">
            <h1>Price</h1>
            <p>$20</p>
          </div>
          <div className="col-span-1 w-full text-center h-full flex flex-col justify-between items-center">
            <h1>Quantity</h1>
            <p>3</p>
          </div>
          <div className="col-span-2 w-full text-center h-full flex flex-col justify-between">
            <h1>Total</h1>
            <p>$60</p>
          </div>
          <div className="">
            <span className=" text-warning">Waiting</span>
          </div>
        </div>
      </div>
    </>
  );
}
