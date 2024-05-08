import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Device } from "@/types/device.ts";
import { fetchDevices } from "@/store/services/deviceService.ts";

interface IDevices {
  rows: Device[] | null;
  count: number;
}
interface IDevice {
  devices: IDevices | null;
  totalCount: number;
  limit: number;
  activePage: number;
}

const initialState: IDevice = {
  devices: null,
  totalCount: 0,
  limit: 12,
  activePage: Number(localStorage.getItem("page")) || 1,
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<number>) {
      localStorage.setItem("page", action.payload.toString());
      state.activePage = action.payload;
    },
    setPreviousPage(state) {
      const page = state.activePage - 1;
      localStorage.setItem("page", page.toString());
      state.activePage = page;
    },
    setNextPage(state) {
      const page = state.activePage + 1;
      localStorage.setItem("page", page.toString());
      state.activePage = page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.devices = null;
      })
      .addCase(fetchDevices.rejected, (state) => {
        state.devices = null;
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.totalCount = action.payload.data.count;
        state.devices = action.payload.data;
      });
  },
});

export const { setActivePage, setPreviousPage, setNextPage } =
  deviceSlice.actions;

export default deviceSlice.reducer;
