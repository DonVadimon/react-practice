import { configureStore } from "@reduxjs/toolkit";
import breakingBadReducer from "./breakingBadSlice";
import loaderReducrer from "./loaderSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducrer,
    breakingBad: breakingBadReducer,
    searchGitUsers: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
