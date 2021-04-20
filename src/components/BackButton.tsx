import React from "react";
import { useAppDispatch } from "../Redux/hooks";
import { loading } from "../Redux/loaderSlice";
import { mainPage } from "../Redux/pagesSlice";

const BackButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(mainPage());
    dispatch(loading());
  };
  return (
    <div className="back-button-container">
      <button type="button" onClick={handleClick} className="back-button">
        Back
      </button>
    </div>
  );
};

export default BackButton;
