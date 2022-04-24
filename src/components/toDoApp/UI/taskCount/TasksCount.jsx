import React from "react";
import attributes from "../../../custom-hooks/attributes";
import useTasks from "../../../custom-hooks/custom-hooks";
import "./TasksCount.css";

export default function TasksCount() {
  const [todos] = useTasks(attributes.todos);

  return <div className="tasks__count">{todos.length} items left</div>;
}
