export default function MyPurchases() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-dark-300 pl-5">
        <h1 className="text-lg font-medium text-dark">My Orders</h1>
        <div className="grid grid-cols-5 text-dark">
          <button
            type="button"
            className="py-5 px-10 border-b-2 border-primary hover:bg-dark-100"
          >
            All
          </button>
          <button
            type="button"
            className="py-5 px-10 border-b-2 border-white hover:bg-dark-100"
          >
            Approval
          </button>
          <button
            type="button"
            className="py-5 px-10 border-b-2 border-white hover:bg-dark-100"
          >
            Delivery
          </button>
          <button
            type="button"
            className="py-5 px-10 border-b-2 border-white hover:bg-dark-100"
          >
            Successful
          </button>
          <button
            type="button"
            className="py-5 px-10 border-b-2 border-white hover:bg-dark-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
