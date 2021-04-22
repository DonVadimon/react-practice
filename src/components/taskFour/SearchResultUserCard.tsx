import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  ISearchResultCardRepo,
  ISearchResultUserCardProps,
} from "./interfaces";
import SearchResultCardRepoCard from "./SearchResultCardRepoCard";
import "../../assets/css/GitSearch/SearchResultUserCard.css";

const SearchResultUserCard: React.FC<ISearchResultUserCardProps> = ({
  user,
}: ISearchResultUserCardProps) => {
  const [repos, setRepos] = useState<ISearchResultCardRepo[]>([]);
  let { url } = useRouteMatch();
  url = url.charAt(url.length - 1) === "/" ? url.slice(0, -1) : url;

  useEffect(() => {
    fetch(user.repos_url)
      .then((data: Response) => data.json())
      .then((data: ISearchResultCardRepo[]) => setRepos(data ?? []))
      .catch(() => {
        setRepos([]);
      });
  }, [user.repos_url]);

  return (
    <div className="search-result-user-card">
      <div className="search-result-repo-owner-avatar">
        <Link to={`${url}/${user.login}`}>
          <img src={user.avatar_url} alt={user.login} />
        </Link>
      </div>
      <div
        className="search-result-repo-card-content"
        style={repos.length < 3 ? { width: "950px" } : {}}
      >
        <div className="search-result-repo-card-owner-login">
          <Link to={`${url}/${user.login}`}>
            <h3>{user.login}</h3>
          </Link>
        </div>
        <div className="search-result-repos-container">
          {repos.length !== 0 ? (
            repos.map((repo, idx) =>
              idx < 3 ? (
                <SearchResultCardRepoCard key={repo.id} repo={repo} />
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultUserCard;
