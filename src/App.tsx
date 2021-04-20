import React from "react";
import { withRouter } from "react-router-dom";
import TaskLinks from "./components/TaskLinks";
import Axoops from "./assets/img/Axoops.png";
import "./assets/css/App.css";

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={Axoops} className="App-logo" alt="logo" />
      <TaskLinks />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Documentation
      </a>
    </header>
  </div>
);

export default withRouter(App);
