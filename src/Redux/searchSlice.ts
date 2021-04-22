/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  IGitSearchFormState,
  IfetchGitUsersProps,
  IfetchGitUsersResult,
  IResponseData,
  IPageLink,
} from "./interfaces";
import fetchStatuses from "./fetchStatuses";
import authHeaders from "./authHeaders";

const initialState: IGitSearchFormState = {
  query: "",
  users: [],
  status: fetchStatuses.idle,
  error: null,
  pageLinks: [],
};

const parseLinkHeader: (header: string) => IPageLink[] = (header: string) => {
  try {
    return header
      .split(", ")
      .map((item) =>
        item.split(" ").map((subStr) => subStr.replace(/[<>;]/g, ""))
      )
      .map(([link, rel]) => ({
        link,
        relation: rel.replace(/((rel=")|")/g, ""),
      }));
  } catch (error) {
    return [];
  }
};

const fetchGitUsersByURLHandler = async (url: string) => {
  const response: Response = await fetch(url, {
    method: "GET",
    headers: authHeaders,
  });
  const { headers } = response;
  const pageLinks = parseLinkHeader(headers.get("link") ?? "");
  const data: IResponseData = await response.json();
  return {
    items: data.items,
    pageLinks,
  } as IfetchGitUsersResult;
};

export const fetchGitUsersByURL = createAsyncThunk<
  IfetchGitUsersResult,
  string
>("gitSearch/fetchGitUsersByURL", async (url: string) => {
  const data = await fetchGitUsersByURLHandler(url);
  return data;
});

export const fetchGitUsers = createAsyncThunk<
  IfetchGitUsersResult,
  IfetchGitUsersProps
>("gitSearch/fetchGitUsers", async ({ query, pageNum = 1 }) => {
  const perPage = 7;
  const url = `https://api.github.com/search/users?page=${pageNum}&per_page=${perPage}&q=${encodeURIComponent(
    `${query} in:login`
  )}`;
  const data = await fetchGitUsersByURLHandler(url);
  return data;
});

const searchSlice = createSlice({
  name: "searchGitUsers",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGitUsers.pending, (state) => {
      state.status = fetchStatuses.loading;
    });
    builder.addCase(fetchGitUsers.fulfilled, (state, action) => {
      state.status = fetchStatuses.succeeded;
      state.users = action.payload.items ?? [];
      state.pageLinks = action.payload.pageLinks;
    });
    builder.addCase(fetchGitUsers.rejected, (state, action) => {
      state.status = fetchStatuses.failed;
      state.error = action.payload;
    });
    builder.addCase(fetchGitUsersByURL.pending, (state) => {
      state.status = fetchStatuses.loading;
    });
    builder.addCase(fetchGitUsersByURL.fulfilled, (state, action) => {
      state.status = fetchStatuses.succeeded;
      state.users = action.payload.items ?? [];
      state.pageLinks = action.payload.pageLinks;
    });
    builder.addCase(fetchGitUsersByURL.rejected, (state, action) => {
      state.status = fetchStatuses.failed;
      state.error = action.payload;
    });
  },
});

export default searchSlice.reducer;
export const { setQuery } = searchSlice.actions;
