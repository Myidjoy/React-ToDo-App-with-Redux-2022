import React from "react";
import useTasks from "../../../custom-hooks/custom-hooks";
import "./DellButton.css";
import { dellTask } from "../../../../redux/store/actions";
import attributes from "../../../custom-hooks/attributes";

export default function DellButton({ id }) {
  const [todos, dispatch] = useTasks(attributes.todos);

  const handlerButton = (numberTask) => {
    const newTodos = todos.filter((todo) => todo.id !== numberTask);

    dispatch(dellTask(newTodos));
  };
  return (
    <button
      onClick={() => handlerButton(id)}
      type="button"
      className="dell__button"
    >
      X
    </button>
  );
}
