import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/GitSearch/UserNotFoundMsg.css";

const UserNotFoundMsg: React.FC = () => (
  <div className="not-found-msg">
    <h1>User Not Found</h1>
    <Link to="/gitsearch">
      <h2>Back to Search</h2>
    </Link>
  </div>
);

export default UserNotFoundMsg;
