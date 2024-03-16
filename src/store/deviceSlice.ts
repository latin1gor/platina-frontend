import { createSlice } from "@reduxjs/toolkit";
import { Device } from "@/types/device.ts";

interface IDevice {
  types: { id: number; name: string }[] | null;
  selectedType: { id: number } | null;
  brands: { id: number; name: string }[] | null;
  selectedBrand: { id: number } | null;
  devices: Device[] | null;
}

const initialState: IDevice = {
  types: [
    { id: 1, name: "Phones" },
    {
      id: 2,
      name: "Laptops",
    },
    { id: 3, name: "TV's" },
    { id: 4, name: "Fridges" },
    { id: 5, name: "Clothes" },
    {
      id: 6,
      name: "Laptops",
    },
    { id: 7, name: "TV's" },
    { id: 8, name: "Fridges" },
  ],
  selectedType: { id: 1 },
  brands: [
    { id: 1, name: "Apple" },
    {
      id: 2,
      name: "OpenYourSpace",
    },
    { id: 3, name: "OnePlus" },
    { id: 4, name: "Samsung" },
    { id: 4, name: "Samsung" },
    { id: 4, name: "Samsung" },
  ],
  selectedBrand: { id: 1 },
  devices: [
    {
      id: 10,
      name: "Apple iPhone 15 Pro 256GB (Black Titanium)",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 1,
      name: "Apple iPhone 15 Pro 256GB (Black Titanium)",
      price: 990,
      rating: 5,
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678779/Croma%20Assets/Communication/Mobiles/Images/300821_0_jihwxc.png",
    },
    {
      id: 2,
      name: "Apple iPhone 15 Pro 256GB (Black Titanium)",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 3,
      name: "Apple iPhone 15 Pro 256GB (Black Titanium)",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 4,
      name: "Iphone 12 256gb",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 4,
      name: "Apple MacBook Pro 13, 2020 M1 (512GB)",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 4,
      name: "Iphone 12 1TB Space Gray super UlTRA Hyper",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 4,
      name: "Iphone 12",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 4,
      name: "б/у Apple MacBook Pro 13, 2019 (512GB)",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
    {
      id: 4,
      name: "б/у Apple MacBook Pro 13, 2019 (512GB)",
      price: 990,
      rating: 5,
      img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
    },
  ],
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    },
    setSelectedBrand(state, action) {
      state.selectedBrand = action.payload;
    },
  },
});

export const { setSelectedType, setSelectedBrand } = deviceSlice.actions;
export default deviceSlice.reducer;
