import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/api/axiosInstance.ts";

interface FetchDevicesParams {
  brandId?: number | null;
  typeId?: number | null;
  limit?: number | null;
  page?: number | null;
}

export const fetchDevices = createAsyncThunk<any, FetchDevicesParams>(
  "device/fetchDevices",
  async ({ brandId, typeId, limit, page }, { rejectWithValue }) => {
    try {
      const params: FetchDevicesParams = {};
      if (brandId) params.brandId = brandId;
      if (typeId) params.typeId = typeId;
      if (limit) params.limit = limit;
      if (page) params.page = page;

      const response = await instance.get("api/device", { params });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchOneDevice = async (id: string | undefined) => {
  try {
    const response = await instance.get("api/device/" + id);
    return response;
  } catch (error: any) {
    return error.response.data.message;
  }
};

export const createDevice = async (data: any) => {
  try {
    const res = await instance.post("/api/device", data);
    return !!res;
  } catch (error: any) {
    return false;
  }
};
