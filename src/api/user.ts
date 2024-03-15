import axios from "axios";
const apiUrl = axios.create({
  baseURL: "http://localhost:3000/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const updateUserAPI = async (
  token: string,
  payload: {
    fullName: string;
    phoneNumber: string;
    imageUrl: string;
  }
) => {
  try {
    const { data } = await apiUrl.patch("/", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
