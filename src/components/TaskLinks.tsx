import React from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setPage } from "../Redux/pagesSlice";
import links from "./taskLinks";

const TaskLinks: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setPage(+event.currentTarget.id));
  };

  return (
    <div className="task-links-container">
      {links.map((link) => (
        <button
          type="button"
          key={link.id}
          id={link.id.toString()}
          onClick={handleClick}
          className="task-link"
        >
          {link.text}
        </button>
      ))}
    </div>
  );
};

export default TaskLinks;
