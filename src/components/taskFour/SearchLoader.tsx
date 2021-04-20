import React from "react";
import "../../assets/css/GitSearch/SearchLoader.css";
import searchLoader from "../../assets/img/GitHub-Mark-Light.png";

const SearchLoader: React.FC = () => (
  <div className="search-loader">
    <img src={searchLoader} alt="Loading" />
  </div>
);

export default SearchLoader;
