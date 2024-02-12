export default function MyOrders() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-dark-300 pl-5">
        <h1 className="text-lg font-medium text-dark">My Orders</h1>
        <div className="grid grid-cols-5 text-dark">
          <button type="button" className="py-5 px-10 border-b border-primary">
            All
          </button>
          <button type="button" className="py-5 px-10 border border-primary">
            Approval
          </button>
          <button type="button" className="py-5 px-10 border border-primary">
            Delivery
          </button>
          <button type="button" className="py-5 px-10 border border-primary">
            Successful
          </button>
          <button type="button" className="py-5 px-10 border border-primary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
