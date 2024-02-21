import { Box } from "./box";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center size-full">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export const CardLoader = () => {
  return (
    <div className="aspect-[3/4] max-w-[260px] relative bg-white border border-dark-300 rounded-md hover:border-primary hover:shadow-md duration-150">
      <div className="flex flex-col h-full">
        <div className="bg-dark-300 aspect-square animate-pulse"></div>
        <div className="flex flex-col justify-between">
          <div className="h-5 w-3/4 animate-pulse bg-dark-300 my-2 mx-3"></div>
          <div className="flex justify-between products-end px-3 py-2">
            <div className="h-5 w-1/4 animate-pulse bg-dark-300"></div>
            <div className="h-5 w-1/4 animate-pulse bg-dark-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductsLoader = () => {
  return (
    <div className="mt-5 gap-2 grid lg:grid-cols-6">
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </div>
  );
};

export const DetailLoader = () => {
  return (
    <>
      <Box className="grid grid-cols-2 gap-5 place-items-center">
        <div className="max-w-[450px] min-h-[450px] border rounded-md border-dark-300 aspect-square bg-dark-300 animate-pulse"></div>
        <div className="h-full w-full flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-5 p-5">
            <div className="h-10 w-3/4 animate-pulse bg-dark-300"></div>
            <p className="h-5 bg-dark-300 w-1/6"></p>
            <p className="h-8 bg-dark-300 w-1/4"></p>
          </div>

          <div className="border border-dark-300 p-5 flex flex-col item-center gap-5 rounded-md">
            <div className="flex justify-between">
              <div className="h-5 w-1/4 animate-pulse bg-dark-300"></div>
              <div className="h-5 w-1/4 animate-pulse bg-dark-300"></div>
            </div>
            <div className="h-10 w-full animate-pulse bg-dark-300"></div>
          </div>
        </div>
      </Box>
      {/* Description */}
      <Box className="flex flex-col gap-2">
        <div className=" w-full p-3">
          <h1 className="h-10 w-1/6 bg-dark-300"></h1>
        </div>
        <div className="border border-dark-300 w-full p-3 flex flex-col gap-2">
          <p className="h-5 w-full bg-dark-300"></p>
          <p className="h-5 w-full bg-dark-300"></p>
          <p className="h-5 w-full bg-dark-300"></p>
          <p className="h-5 w-full bg-dark-300"></p>
        </div>
      </Box>
    </>
  );
};
