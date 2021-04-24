/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authHeaders from "./authHeaders";
import fetchStatuses from "./fetchStatuses";
import { IGitUser, IGitUserSlice } from "./interfaces";

const initialState: IGitUserSlice = {
  user: {
    avatar_url: "",
    blog: "",
    followers: 0,
    following: 0,
    html_url: "",
    location: "",
    login: "",
    name: "",
    public_repos: 0,
    repos_url: "",
  },
  status: fetchStatuses.idle,
  error: null,
};

export const fetchUserData = createAsyncThunk<IGitUser, string>(
  "gitSearch/fetchUserData",
  async (login: string) => {
    const url = `https://api.github.com/users/${login}`;
    const response = await fetch(url, {
      method: "GET",
      headers: authHeaders,
    });
    const data = await response.json();
    return data;
  }
);

const gitUserSlice = createSlice({
  name: "gitUserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.status = fetchStatuses.loading;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = fetchStatuses.succeeded;
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.status = fetchStatuses.failed;
      state.error = action.payload;
    });
  },
});

export default gitUserSlice.reducer;
