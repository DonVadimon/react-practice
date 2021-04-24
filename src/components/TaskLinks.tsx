import React from "react";
import { withRouter, Link } from "react-router-dom";
import links from "./taskLinks";

const TaskLinks: React.FC = () => (
  <div className="task-links-container">
    {links.map((link) => (
      <Link to={link.href} key={link.id}>
        <button type="button" id={link.id.toString()} className="task-link">
          {link.text}
        </button>
      </Link>
    ))}
  </div>
);
export default withRouter(TaskLinks);
