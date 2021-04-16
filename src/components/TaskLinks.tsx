import React from "react";
import { IHandleParentProps } from "./interfaces";
import links from "./taskLinks";

const TaskLinks: React.FC<IHandleParentProps> = (props: IHandleParentProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.handleParent(+event.currentTarget.id);
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
