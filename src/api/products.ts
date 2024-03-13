import axios from "axios";
const apiUrl = axios.create({
  baseURL: "http://localhost:3000/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
export const registerAPI = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await apiUrl.post("/register", { email, password });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const loginAPI = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await apiUrl.post("/login", { email, password });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
