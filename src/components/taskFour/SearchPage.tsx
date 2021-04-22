import React, { useState, useEffect } from "react";
import { useHistory, withRouter, useRouteMatch } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import fetchStatuses from "../../Redux/fetchStatuses";
import {
  setQuery as setStoreQuery,
  fetchGitUsers,
} from "../../Redux/searchSlice";
import SearchSuggestion from "./SearchSuggestion";
import SearchLoader from "./SearchLoader";
import "../../assets/css/GitSearch/SearchPage.css";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { users, status } = useAppSelector((state) => state.searchGitUsers);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (
      (query.trim().length > 0 && status === fetchStatuses.idle) ||
      status === fetchStatuses.succeeded
    ) {
      dispatch(fetchGitUsers({ query }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSearch = () => {
    dispatch(setStoreQuery(query));
    history.push(`${url}/result`);
  };

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
          onKeyPress={(e) => {
            if (e.key.toLowerCase() === "enter") {
              handleSearch();
            }
          }}
        />
        <button
          type="button"
          className="search-btn"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      {status === fetchStatuses.succeeded && query.trim().length > 0 ? (
        <div className="suggestions-list">
          {users.map((user) => (
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
