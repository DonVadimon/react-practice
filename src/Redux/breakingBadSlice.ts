/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IBreakingBadState } from "./interfaces";
import carouselImages from "../components/taskOne/carouselImages";

const initialState: IBreakingBadState = {
  episodes: [],
  status: "idle",
  error: null,
  currentEpisode: 0,
  currentImg: 0,
  images: carouselImages,
};

export const fetchEpisodes = createAsyncThunk("episodes/fetchEpisodes", () =>
  fetch("https://breakingbadapi.com/api/episodes").then((data: Response) =>
    data.json()
  )
);

const breakingBadSlice = createSlice({
  name: "breakingBad",
  initialState,
  reducers: {
    prevSlide: (state) => {
      const epsLength = state.episodes.length;
      const imgLength = state.images.length;
      state.currentImg = (state.currentImg + imgLength - 1) % imgLength;
      state.currentEpisode = (state.currentEpisode + epsLength - 1) % epsLength;
    },
    nextSlide: (state) => {
      const epsLength = state.episodes.length;
      const imgLength = state.images.length;
      state.currentImg = (state.currentImg + 1) % imgLength;
      state.currentEpisode = (state.currentEpisode + 1) % epsLength;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.episodes = state.episodes.concat(action.payload);
    });
    builder.addCase(fetchEpisodes.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const { prevSlide, nextSlide } = breakingBadSlice.actions;
export default breakingBadSlice.reducer;
