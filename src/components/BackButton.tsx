import React from "react";
import { IHandleParentProps } from "./interfaces";

const BackButton: React.FC<IHandleParentProps> = (
  props: IHandleParentProps
) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.handleParent(+event.currentTarget.id);
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
