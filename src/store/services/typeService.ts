import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/api/axiosInstance.ts";

export const fetchTypes = createAsyncThunk(
  "type/fetchTypes",
  async (_, { rejectWithValue }) => {
    try {
      const types = await instance.get("/api/type");
      return types;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const createType = async (type: string) => {
  try {
    const res = await instance.post("/api/type", { name: type });
    return !!res;
  } catch (error: any) {
    return false;
  }
};
