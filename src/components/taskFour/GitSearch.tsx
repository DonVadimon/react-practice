import React from "react";
import { Switch, Route, withRouter, useRouteMatch } from "react-router-dom";
import SearchPage from "./SearchPage";
import SearchResult from "./SearchResult";
import BackButton from "../BackButton";
import "../../assets/css/GitSearch/GitSearch.css";
import GitUserPage from "./GitUserPage";

export const GitSearch: React.FC = () => {
  let { path } = useRouteMatch();
  path = path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
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
