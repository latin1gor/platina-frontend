import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "@/api/axiosInstance.ts";
import { UserRow } from "@/components/admin/users/users-table.tsx";

interface IUsersList {
  loading: boolean;
  users: (UserRow | null)[];
}

const initialState: IUsersList = {
  loading: true,
  users: [],
};

export const getAllUsers = createAsyncThunk("users/get", async () => {
  try {
    const response = await instance.get("api/info");
    return response.data;
  } catch (e) {
    console.error(e);
  }
});

const usersListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.users = [];
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      });
  },
});

export default usersListSlice.reducer;
