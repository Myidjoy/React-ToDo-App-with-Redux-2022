import React, { useRef } from "react";
import "./HeaderInput.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../redux/store/actions";

export default function HeaderInput() {
  const dispatch = useDispatch();
  const addNewTask = (value) => {
    const task = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    dispatch(addTask(task));
  };

  const headerInput = useRef();

  const checkKeyUp = (event) => {
    if (event.key === "Enter" && headerInput.current.value.trim() !== "") {
      addNewTask(headerInput.current.value);
      headerInput.current.value = "";
    }
  };

  return (
    <input
      ref={headerInput}
      onBlur={() => {
        headerInput.current.value = "";
      }}
      onKeyUp={(event) => {
        checkKeyUp(event);
      }}
      className="new__todo"
      placeholder="What needs to be done ?"
    />
  );
}
