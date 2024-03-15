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

export const getMeAPI = async (token: string) => {
  try {
    const response = await apiUrl.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const changePasswordAPI = async ({
  oldPassword,
  newPassword,
}: {
  oldPassword: string;
  newPassword: string;
}) => {
  const token = localStorage.getItem("token");
  if (!token) return console.error("changePassword: token not found");
  try {
    const response = await apiUrl.put(
      "/change-password",
      { oldPassword, newPassword },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
