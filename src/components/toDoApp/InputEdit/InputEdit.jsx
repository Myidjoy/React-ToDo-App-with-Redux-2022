import React, { useEffect, useState } from "react";
import useTasks from "../../custom-hooks/custom-hooks";
import "./InputEdit.css";
import { changeTitleInState } from "../../../redux/store/actions";
import attributes from "../../custom-hooks/attributes";

export default function InputEdit({ text, edit, id }) {
  const [todos, dispatch] = useTasks(attributes.todos);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(value);
  });

  const handlerInput = (event) => {
    setValue(event);
  };

  const changeTitle = (elementId, newValue) => {
    const copieTodos = todos.slice();
    const numberInArray = copieTodos.findIndex((item) => item.id === elementId);

    copieTodos[numberInArray] = {
      ...copieTodos[numberInArray],
      title: newValue,
    };

    dispatch(changeTitleInState(copieTodos));
  };

  return (
    <input
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          changeTitle(id, value);
          edit();
        }
      }}
      onChange={(event) => {
        handlerInput(event.target.value);
      }}
      value={value}
      className="edit"
    />
  );
}
