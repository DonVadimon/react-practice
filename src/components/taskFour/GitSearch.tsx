import React from "react";
import { Switch, Route, withRouter, useRouteMatch } from "react-router-dom";
import SearchPage from "./SearchPage";
import SearchResult from "./SearchResult";
import BackButton from "../BackButton";
import GitUserPage from "./GitUserPage";
import removeEndSlashIfContains from "./removeEndSlashIfContains";
import "../../assets/css/GitSearch/GitSearch.css";

export const GitSearch: React.FC = () => {
  const path = removeEndSlashIfContains(useRouteMatch().path);
  return (
    <>
      <div className="search-main-container">
        <Switch>
          <Route exact path={path}>
            <SearchPage />
          </Route>
          <Route path={`${path}/result`}>
            <Switch>
              <Route exact path={`${path}/result`}>
                <SearchResult />
              </Route>
              <Route path={`${path}/result/:login`}>
                <GitUserPage />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
      <BackButton />
    </>
  );
};

export default withRouter(GitSearch);
