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
  followers: number;
  following: number;
  blog: string;
  repos_url: string;
  public_repos: number;
}

export interface IGitUserSlice {
  user: IGitUser;
  status: string;
  error: any;
}

export interface IGitUserSuggest {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
}
export interface IPageLink {
  link: string;
  relation: string;
}

export interface IGitSearchFormState {
  query: string;
  users: IGitUserSuggest[];
  status: string;
  error: any;
  pageLinks: IPageLink[];
}

export interface IResponseData {
  total_count: number;
  items: IGitUserSuggest[];
}

export interface IfetchGitUsersResult {
  items: IGitUserSuggest[];
  pageLinks: IPageLink[];
}

export interface IfetchGitUsersProps {
  query: string;
  pageNum?: number;
}
