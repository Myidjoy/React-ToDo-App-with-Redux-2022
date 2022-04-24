import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import InputEdit from "../inputEdit/InputEdit";
import Checkbox from "../ui/checkbox/Checkbox";
import TaskTitle from "./task-title/TaskTitle";
import "./Task.css";
import { createType } from "../../../redux/store/actions";

export default function Task({ text, id, completed, name }) {
  const [editStatus, setEditStatus] = useState(false);
  const dispatch = useDispatch();

  const edit = () => {
    const status = !editStatus;

    setEditStatus(status);
  };

  useEffect(() => {
    dispatch(createType(name));
  });

  return (
    <li
      onDoubleClick={() => {
        edit();
      }}
      className="task"
    >
      <TaskTitle text={text} id={id} completed={completed} />
      <Checkbox completed={completed} id={id} />
      {editStatus ? <InputEdit id={id} text={text} edit={edit} /> : null}
    </li>
  );
}
