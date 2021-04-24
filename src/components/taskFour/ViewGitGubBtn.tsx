import React from "react";
import "../../assets/css/GitSearch/ViewGitHubBtn.css";
import { IViewGitHubBtnProps } from "./interfaces";

const ViewGitHubBtn: React.FC<IViewGitHubBtnProps> = React.memo(
  ({ url }: IViewGitHubBtnProps) => (
    <div className="view-github-btn-container">
      <a href={url}>
        <button className="view-github-btn" type="button">
          View GitHub
        </button>
      </a>
    </div>
  )
);

export default ViewGitHubBtn;
