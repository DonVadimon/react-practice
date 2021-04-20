import React from "react";
import { useAppSelector } from "./Redux/hooks";
import TaskLinks from "./components/TaskLinks";
import Carousel from "./components/taskOne/Carousel";
import BackButton from "./components/BackButton";
import Axoops from "./assets/img/Axoops.png";
import "./assets/css/App.css";

const App: React.FC = () => {
  const page = useAppSelector((state) => state.page.number);
  const isLoaded = useAppSelector((state) => state.loader.isLoaded);

  switch (page.toString()) {
    case "1":
      return (
        <div
          style={{
            position: "relative",
            height: !isLoaded ? "100vh" : "auto",
          }}
        >
          <Carousel />
          {isLoaded && <BackButton />}
        </div>
      );

    default:
      return (
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
  }
};

export default App;
