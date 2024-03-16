import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { User } from "@/types/user.ts";
import { z } from "zod";
import { signInSchema, signUpSchema } from "@/types/validation.ts";
import { instance } from "@/services";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface IUserState {
  loading: boolean;
  token: string | null | undefined;
  user: User | null;
  error: string | null | undefined;
}

const accessToken = Cookies.get("token");
const checkTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const expireTime = decodedToken.exp;
  if (expireTime) {
    const currentTime = Date.now() / 1000;
    if (expireTime < currentTime) {
      return null;
    } else {
      return decodedToken;
    }
  }
};

const initialState: IUserState = {
  loading: false,
  token: accessToken,
  user: accessToken ? checkTokenExpired(accessToken) : null,
  error: null,
};
export const register = createAsyncThunk(
  "user/register",
  async (
    { email, password }: z.infer<typeof signUpSchema>,
    { rejectWithValue },
  ) => {
    try {
      const response = await instance.post("/api/user/register", {
        email,
        password,
      });
      const data = response.data;
      Cookies.set("token", data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password }: z.infer<typeof signInSchema>,
    { rejectWithValue },
  ) => {
    try {
      const response = await instance.post("/api/user/login", {
        email,
        password,
      });
      const data = response.data;
      Cookies.set("token", data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const checkAuth = createAsyncThunk("user/check", async () => {
  try {
    const response = await instance.get("/api/user/auth");
    const token = response.data.token;
    Cookies.set("token", token);
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return true;
  } catch (error) {
    console.error("Error while checking authentication:", error);
    return false;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
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
