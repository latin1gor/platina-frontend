import { createSlice } from "@reduxjs/toolkit";

interface IModal {
  isBrandOpen: boolean;
  isTypeOpen: boolean;
  isDeviceOpen: boolean;
  isDrawerOpen: boolean;
}

const initialState: IModal = {
  isBrandOpen: false,
  isTypeOpen: false,
  isDeviceOpen: false,
  isDrawerOpen: false,
};

const modalSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setBrandOpen(state, action) {
      state.isBrandOpen = action.payload;
    },
    setTypeOpen(state, action) {
      state.isTypeOpen = action.payload;
    },
    setDeviceOpen(state, action) {
      state.isDeviceOpen = action.payload;
    },
    setDrawerOpen(state, action) {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setBrandOpen, setTypeOpen, setDeviceOpen, setDrawerOpen } =
  modalSlice.actions;
export default modalSlice.reducer;
