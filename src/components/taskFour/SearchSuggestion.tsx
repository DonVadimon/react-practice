import React from "react";
import { ISearchSuggestionProps } from "./interfaces";
import "../../assets/css/GitSearch/SearchSuggestion.css";

const SearchSuggestion: React.FC<ISearchSuggestionProps> = ({
  user,
}: ISearchSuggestionProps) => (
  <div className="search-suggestion">
    <div className="suggestion-avatar">
      <img src={user.avatar_url} alt={user.login} />
    </div>
    <div className="search-login-container">
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        <h3 className="suggestion-login">{user.login}</h3>
      </a>
    </div>
  </div>
);

export default SearchSuggestion;
