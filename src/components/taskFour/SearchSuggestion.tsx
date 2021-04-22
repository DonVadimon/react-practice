import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ISearchSuggestionProps } from "./interfaces";
import "../../assets/css/GitSearch/SearchSuggestion.css";

const SearchSuggestion: React.FC<ISearchSuggestionProps> = ({
  user,
}: ISearchSuggestionProps) => {
  const { url } = useRouteMatch();

  return (
    <div className="search-suggestion">
      <div className="suggestion-avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="search-login-container">
        <Link to={`${url}/result/${user.login}`}>
          <h3 className="suggestion-login">{user.login}</h3>
        </Link>
      </div>
    </div>
  );
};

export default SearchSuggestion;
