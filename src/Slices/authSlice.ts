import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../utils/api";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (payload: { email: string; password: string }) => {
    const res = await registerAPI(payload);
    localStorage.setItem("token", res.token);
    return res.token;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }) => {
    const res = await loginAPI(payload);
    localStorage.setItem("token", res.token);
    return res.token;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      return { token: null, loading: false, error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.token = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state) => {
        state.token = null;
        state.loading = false;
        state.error = "Registration Failed";
      })
      .addCase(login.pending, (state) => {
        state.token = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.token = null;
        state.loading = false;
        state.error = "Login Failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
