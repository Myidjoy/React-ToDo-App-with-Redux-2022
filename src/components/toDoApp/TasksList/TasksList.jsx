import React from "react";
import { Routes, Route } from "react-router-dom";
import attributes from "../../custom-hooks/attributes";
import useTasks from "../../custom-hooks/custom-hooks";
import Task from "../task/Task";
import "./TasksList.css";

export default function TasksList() {
  const [todos] = useTasks(attributes.todos);

  const allTasks = todos.slice();
  const activeTasks = todos.filter((task) => task.completed === false);
  const completedTasks = todos.filter((task) => task.completed === true);

  return (
    <ul className="tasks__list">
      <Routes>
        <Route
          exact
          path="/"
          element={allTasks.map((task) => (
            <Task
              name="all"
              key={task.id}
              text={task.title}
              id={task.id}
              completed={task.completed}
            />
          ))}
        />
        <Route
          path="/active"
          element={activeTasks.map((task) => (
            <Task
              name="active"
              key={task.id}
              text={task.title}
              id={task.id}
              completed={task.completed}
            />
          ))}
        />
        <Route
          path="/completed"
          element={completedTasks.map((task) => (
            <Task
              name="completed"
              key={task.id}
              text={task.title}
              id={task.id}
              completed={task.completed}
            />
          ))}
        />
      </Routes>
    </ul>
  );
}
