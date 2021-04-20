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

export interface IGitUser {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  followers: number;
  following_url: string;
  following: number;
  blog: string;
  repos_url: string;
  public_repos: number;
}

export interface IGitUserSuggest {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
}

export interface IGitSearchFormState {
  users: IGitUserSuggest[];
  status: string;
  error: any;
}
