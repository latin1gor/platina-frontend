import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/api/axiosInstance.ts";

export const fetchBrands = createAsyncThunk(
  "brand/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const brands = await instance.get("/api/brand");
      return brands;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const createBrand = async (brand: string) => {
  try {
    const res = await instance.post("/api/brand", { name: brand });
    return !!res;
  } catch (error: any) {
    return false;
  }
};
