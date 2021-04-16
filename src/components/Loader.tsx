import React from "react";
import loader from "../assets/icons/dash-circle-dotted.svg";
import "../assets/css/Loader.css";

const Loader: React.FC = () => (
  <div className="loader">
    <img src={loader} alt="Loading" />
  </div>
);

export default Loader;
