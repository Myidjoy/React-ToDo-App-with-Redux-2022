import React from "react";
import useTasks from "../custom-hooks/custom-hooks";
import "./ClearAll.css";
import { dellTask } from "../../redux/store/actions";
import attributes from "../custom-hooks/attributes";

export default function ClearAll() {
  const [todos, dispatch] = useTasks(attributes.todos);
  const handlerButton = () => {
    const newTodos = todos.filter((todo) => todo.completed !== true);

    dispatch(dellTask(newTodos));
  };
  return (
    <div className="clear-all">
      <button
        onClick={() => {
          handlerButton();
        }}
        type="button"
      >
        Clear completed
      </button>
    </div>
  );
}
