import { RootState } from "./store";

export const selectEpisodeByIndex = (state: RootState, idx: number) =>
  state.breakingBad.episodes[idx];
export const selectImageByIndex = (state: RootState, idx: number) =>
  state.breakingBad.images[idx].image;
