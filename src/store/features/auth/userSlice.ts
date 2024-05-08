import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/user.ts";
import Cookies from "js-cookie";
import { checkTokenExpired } from "@/store/utils/cookies.ts";
import { login, register } from "@/store/services/authService.ts";

interface IUserState {
  loading: boolean;
  token: string | null | undefined;
  user: User | null;
  error: string | null | undefined;
}

const accessToken = Cookies.get("token");

const initialState: IUserState = {
  loading: false,
  token: accessToken,
  user: checkTokenExpired(accessToken),
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = checkTokenExpired(action.payload.token);
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = checkTokenExpired(action.payload.token);
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload as string;
      });
  },
});
export const { clearError, clearUser } = userSlice.actions;
export default userSlice.reducer;
