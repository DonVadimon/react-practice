import React, { useState, useEffect } from "react";
import { useHistory, withRouter, useRouteMatch } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import fetchStatuses from "../../Redux/fetchStatuses";
import { fetchGitUsers } from "../../Redux/searchSlice";
import SearchSuggestion from "./SearchSuggestion";
import SearchLoader from "./SearchLoader";
import "../../assets/css/GitSearch/SearchPage.css";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const fetchUsersStatus = useAppSelector(
    (state) => state.searchGitUsers.status
  );
  const usersSuggestions = useAppSelector(
    (state) => state.searchGitUsers.users
  );
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (
      (query.trim().length > 0 && fetchUsersStatus === fetchStatuses.idle) ||
      fetchUsersStatus === fetchStatuses.succeeded
    ) {
      dispatch(fetchGitUsers(query));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="search-form">
      <div className="input-btn-wrapper">
        <input
          type="text"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button
          type="button"
          className="search-btn"
          onClick={(e) => {
            e.preventDefault();
            history.push(`${url}/result`);
          }}
        >
          Search
        </button>
      </div>
      {fetchUsersStatus === fetchStatuses.succeeded &&
      query.trim().length > 0 ? (
        <div className="suggestions-list">
          {usersSuggestions.map((user) => (
            <SearchSuggestion key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <SearchLoader />
      )}
    </div>
  );
};

export default withRouter(SearchPage);
