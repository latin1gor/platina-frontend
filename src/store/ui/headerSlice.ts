import { createSlice } from "@reduxjs/toolkit";
import { adminTabs, publicTabs, Tabs, userTabs } from "@/router/tabs.ts";

interface IHeader {
  publicTabs: Tabs;
  userTabs: Tabs;
  adminTabs: Tabs;
  selectedTab: { id: number } | null;
}

const initialState: IHeader = {
  publicTabs: publicTabs,
  userTabs: userTabs,
  adminTabs: adminTabs,
  selectedTab: null,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = headerSlice.actions;
export default headerSlice.reducer;
