import { createSlice } from "@reduxjs/toolkit";

interface IBasket {
  id: string;
}

interface IBasketState {
  products: IBasket[];
  count: number;
  total: number;
}

const initialState: IBasketState = {
  products: [],
  count: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
      const existedProduct = state.products?.find(
        (product) => product.id === action.payload,
      );
      if (!existedProduct) {
        state.products?.push({ id: action.payload });
        state.count++;
      }
    },
    setTotal(state, action) {
      state.total = state.total + action.payload;
    },
  },
});

export const { addProduct, setTotal } = basketSlice.actions;
export default basketSlice.reducer;
