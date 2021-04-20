import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useAppDispatch } from "../Redux/hooks";
import { loading } from "../Redux/loaderSlice";

const BackButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(loading());
    history.push("/");
  };

  return (
    <div className="back-button-container">
      <button type="button" onClick={handleClick} className="back-button">
        Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
