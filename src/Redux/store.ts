import { configureStore } from "@reduxjs/toolkit";
import breakingBadReducer from "./breakingBadSlice";
import loaderReducrer from "./loaderSlice";
import pagesReducer from "./pagesSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducrer,
    breakingBad: breakingBadReducer,
    page: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
