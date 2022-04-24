import React from "react";
import DellButton from "../../ui/button/DellButton";
import "./TaskTitle.css";

export default function TaskTitle({ completed, text, id }) {
  const active = completed ? "task_active" : "";

  return (
    <div
      onDoubleClick={(e) => {
        if (completed) {
          e.stopPropagation();
        }
      }}
      className="task__title"
    >
      <span className={active}>{text}</span>
      <DellButton id={id} />
    </div>
  );
}
