import React from "react";
import "../../assets/css/GitSearch/ViewGitHubBtn.css";

interface IViewGitHubBtnProps {
  url: string;
}

const ViewGitHubBtn: React.FC<IViewGitHubBtnProps> = ({
  url,
}: IViewGitHubBtnProps) => (
  <div className="view-github-btn-container">
    <a href={url}>
      <button className="view-github-btn" type="button">
        View GitHub
      </button>
    </a>
  </div>
);

export default ViewGitHubBtn;
