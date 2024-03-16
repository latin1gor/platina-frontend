import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.ts";
import deviceReducer from "./deviceSlice.ts";
import headerReducer from "./ui/headerSlice.ts";
import drawerSlice from "@/store/ui/drawerSlice.ts";
export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
    header: headerReducer,
    drawer: drawerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
