/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IGitSearchFormState, IGitUserSuggest } from "./interfaces";
import fetchStatuses from "./fetchStatuses";

const initialState: IGitSearchFormState = {
  users: [],
  status: fetchStatuses.idle,
  error: null,
};

export const fetchGitUsers = createAsyncThunk<IGitUserSuggest[], string>(
  "gitSearch/fetchGitUsers",
  (query: string) => {
    const perPage = 7;
    const url = `https://api.github.com/search/users?page=1&per_page=${perPage}&q=${encodeURIComponent(
      `${query} in:login`
    )}`;
    const headers = {
      Authorization: "Token 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",
    };
    return fetch(url, {
      method: "GET",
      headers,
    })
      .then((data: Response) => data.json())
      .then((data) => data.items);
  }
);

/* <https://api.github.com/search/users?page=2&per_page=7&q=Don+in%3Alogin>; rel="next", <https://api.github.com/search/users?page=143&per_page=7&q=Don+in%3Alogin>; rel="last" */

const searchSlice = createSlice({
  name: "searchGitUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGitUsers.pending, (state) => {
      state.status = fetchStatuses.loading;
    });
    builder.addCase(fetchGitUsers.fulfilled, (state, action) => {
      state.status = fetchStatuses.succeeded;
      state.users = action.payload ?? [];
    });
    builder.addCase(fetchGitUsers.rejected, (state, action) => {
      state.status = fetchStatuses.failed;
      state.error = action.payload;
    });
  },
});

export default searchSlice.reducer;
