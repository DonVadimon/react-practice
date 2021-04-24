import { configureStore } from "@reduxjs/toolkit";
import breakingBadReducer from "./breakingBadSlice";
import loaderReducrer from "./loaderSlice";
import searchReducer from "./searchSlice";
import gitUserReducer from "./gitUserSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducrer,
    breakingBad: breakingBadReducer,
    searchGitUsers: searchReducer,
    gitUser: gitUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
