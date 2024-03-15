import axios from "axios";
const apiUrl = axios.create({
  baseURL: "http://localhost:3000/api/v1/products",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProductsAPI = async (searchParams?: string) => {
  try {
    const response = await apiUrl.get(
      searchParams ? `/?name=${searchParams}` : "/"
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getProductAPI = async (id: string) => {
  try {
    const response = await apiUrl.get(`/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
