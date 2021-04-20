import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import App from "./App";
import CarouselContainer from "./components/taskOne/CarouselContainer";
import { GitSearch } from "./components/taskFour/GitSearch";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/carousel">
            <CarouselContainer />
          </Route>
          <Route path="/gitsearch">
            <GitSearch />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
