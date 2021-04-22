import { IGitUserSuggest } from "../../Redux/interfaces";

export interface ISearchSuggestionProps {
  user: IGitUserSuggest;
}

export interface ISearchResultCardRepo {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  language: string;
  html_url: string;
}

export interface ISearchResultCardRepoCardProps {
  repo: ISearchResultCardRepo;
}

export interface ISearchResultUserCardProps {
  user: IGitUserSuggest;
}

export interface IPagesControlsProps {
  prevPage: () => void;
  nextPage: () => void;
  setPage: (num: number) => void;
  pageNum: number;
}

export interface IPageBtn {
  position: number;
  btn: JSX.Element;
}

export interface IViewGitHubBtnProps {
  url: string;
}

export interface IURLParams {
  login: string;
}
