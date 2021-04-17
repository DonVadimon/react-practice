/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IPagesState } from "./interfaces";

const initialState: IPagesState = {
  number: 0,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.number = action.payload;
    },
    mainPage: (state) => {
      state.number = 0;
    },
  },
});

export const { setPage, mainPage } = pagesSlice.actions;
export default pagesSlice.reducer;
