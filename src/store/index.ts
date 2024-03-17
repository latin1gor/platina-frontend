import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.ts";
import deviceReducer from "./deviceSlice.ts";
import headerReducer from "./ui/headerSlice.ts";
import drawerSlice from "@/store/ui/drawerSlice.ts";
import usersListSlice from "@/store/admin/usersListSlice.ts";
export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
    header: headerReducer,
    drawer: drawerSlice,
    usersList: usersListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
