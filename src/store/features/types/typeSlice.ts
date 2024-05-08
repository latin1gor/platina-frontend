import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchTypes } from "@/store/services/typeService.ts";

interface ITypes {
  rows: { id: number; name: string }[] | null;
  count: number;
}
interface IType {
  types: ITypes | null;
  selectedType: { id: number } | null;
  loading: boolean;
  error: boolean | string;
}

const initialState: IType = {
  types: null,
  selectedType: null,
  loading: false,
  error: false,
};

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IType>) => {
    builder
      .addCase(fetchTypes.pending, (state) => {
        state.types = null;
        state.selectedType = null;
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.types = null;
        state.selectedType = null;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.types = action.payload.data;
        state.selectedType = null;
        state.loading = false;
        state.error = false;
      });
  },
});

export const { setSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
