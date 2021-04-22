/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { fetchUserData } from "../../Redux/gitUserSlice";
import fetchStatuses from "../../Redux/fetchStatuses";
import SearchLoader from "./SearchLoader";
import { ISearchResultCardRepo, IURLParams } from "./interfaces";
import SearchResultCardRepoCard from "./SearchResultCardRepoCard";
import socialLink from "../../assets/icons/social-link.svg";
import mapPointer from "../../assets/icons/geo-pointer.svg";
import people from "../../assets/icons/people.svg";
import circle from "../../assets/icons/circle-fill.svg";
import "../../assets/css/GitSearch/GitUserPage.css";
import UserNotFoundMsg from "./UserNotFoundMsg";
import ViewGitHubBtn from "./ViewGitGubBtn";

const GitUserPage: React.FC = () => {
  const { login } = useParams<IURLParams>();
  const { user, status } = useAppSelector((state) => state.gitUser);
  const dispatch = useAppDispatch();
  const [repos, setRepos] = useState<ISearchResultCardRepo[]>([]);

  useEffect(() => {
    dispatch(fetchUserData(login));
  }, [dispatch, login]);

  useEffect(() => {
    if (!("message" in user)) {
      fetch(user.repos_url)
        .then((response: Response) => response.json())
        .then((data) => setRepos(data));
    }
  }, [user]);

  if ("message" in user) {
    return <UserNotFoundMsg />;
  }

  return status === fetchStatuses.idle || status === fetchStatuses.loading ? (
    <SearchLoader />
  ) : (
    <div className="git-user-page-conatainer">
      <div className="personal-info">
        <div className="user-avatar">
          <img src={user.avatar_url} alt={user.login} />
        </div>
        <div className="user-names user-info-item">
          <h1>{user.login}</h1>
          <h2>{user.name}</h2>
        </div>
        <div className="user-follows user-info-item">
          <img src={people} alt="People" />
          <h4>{user.followers} followers</h4>
          <img className="dot" src={circle} alt="#" />
          <h4>{user.following} following</h4>
        </div>
        {user.location ? (
          <div className="user-location user-info-item">
            <img src={mapPointer} alt="Poiner" />
            <h4>{user.location}</h4>
          </div>
        ) : (
          <></>
        )}
        {user.blog ? (
          <div className="user-socials user-info-item">
            <h4>
              <img src={socialLink} alt="Social" />
              <a href={user.blog}>{user.blog}</a>
            </h4>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="right-side-wrapper">
        <div className="repos-container">
          {repos.map((repo, idx) =>
            idx < 10 ? (
              <div className="repo-wrapper">
                <SearchResultCardRepoCard repo={repo} />
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        <ViewGitHubBtn url={user.html_url} />
      </div>
    </div>
  );
};

export default GitUserPage;
