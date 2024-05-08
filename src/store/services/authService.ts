import { createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";
import { signInSchema, signUpSchema } from "@/types/validation.ts";
import { instance } from "@/api/axiosInstance.ts";
import Cookies from "js-cookie";

export const register = createAsyncThunk(
  "user/register",
  async (
    { email, password }: z.infer<typeof signUpSchema>,
    { rejectWithValue },
  ) => {
    try {
      const response = await instance.post("/api/user/register", {
        email,
        password,
      });
      const data = response.data;
      Cookies.set("token", data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password }: z.infer<typeof signInSchema>,
    { rejectWithValue },
  ) => {
    try {
      const response = await instance.post("/api/user/login", {
        email,
        password,
      });
      const data = response.data;
      Cookies.set("token", data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const checkAuth = createAsyncThunk("user/check", async () => {
  const token = Cookies.get("token");
  if (!token) {
    console.error("No token available.");
    return false;
  }

  try {
    const response = await instance.get("/api/user/auth");
    const newToken = response.data.token;
    Cookies.set("token", newToken);
    instance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
    return true;
  } catch (error) {
    Cookies.remove("token");
    instance.defaults.headers.common["Authorization"] = "";
    console.error("Error while checking authentication:", error);
    return false;
  }
});
