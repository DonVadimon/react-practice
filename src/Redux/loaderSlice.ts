/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ILoaderState } from "./interfaces";

const initialState: ILoaderState = {
  isLoaded: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loaded: (state) => {
      state.isLoaded = true;
    },
    loading: (state) => {
      state.isLoaded = false;
    },
  },
});

export const { loaded, loading } = loaderSlice.actions;
export default loaderSlice.reducer;
