import { createSlice } from "@reduxjs/toolkit";

type IDrawer = {
  isOpen: boolean;
};

const initialState: IDrawer = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
