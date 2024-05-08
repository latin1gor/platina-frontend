import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/features/auth/userSlice.ts";
import deviceReducer from "./features/devices/deviceSlice.ts";
import brandReducer from "@/store/features/brands/brandSlice.ts";
import typeReducer from "@/store/features/types/typeSlice.ts";
import headerReducer from "./ui/headerSlice.ts";
import usersListSlice from "@/store/features/admin/usersListSlice.ts";
import basketSlice from "@/store/features/navbar/basketSlice.ts";
import modalSlice from "@/store/ui/modalSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
    brand: brandReducer,
    type: typeReducer,
    header: headerReducer,
    modal: modalSlice,
    usersList: usersListSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
