import React from "react";
import { withRouter } from "react-router-dom";

const SearchResult: React.FC = () => (
  <div
    style={{
      height: "100vh",
      backgroundColor: "red",
    }}
  >
    <h1>Search result</h1>
  </div>
);

export default withRouter(SearchResult);
