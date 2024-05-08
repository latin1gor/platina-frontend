import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "@/store/services/brandService.ts";

interface IBrands {
  rows: { id: number; name: string }[] | null;
  count: number;
}
interface IBrand {
  brands: IBrands | null;
  selectedBrand: { id: number } | null;
  loading: boolean;
  error: boolean | string;
}

const initialState: IBrand = {
  brands: null,
  selectedBrand: null,
  loading: false,
  error: false,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setSelectedBrand(state, action) {
      state.selectedBrand = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IBrand>) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.brands = [];
        state.selectedBrand = null;
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.brands = [];
        state.selectedBrand = null;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload.data;
        state.selectedBrand = null;
        state.loading = false;
        state.error = false;
      });
  },
});

export const { setSelectedBrand } = brandSlice.actions;
export default brandSlice.reducer;
