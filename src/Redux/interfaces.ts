import { IEpisode } from "../components/taskOne/interfaces";

export interface ILoaderState {
  isLoaded: boolean;
}

export interface IBreakingBadState {
  episodes: IEpisode[];
  status: string;
  error: any;
  currentEpisode: number;
  currentImg: number;
  images: { image: string }[];
}

export interface IPagesState {
  number: number;
}
