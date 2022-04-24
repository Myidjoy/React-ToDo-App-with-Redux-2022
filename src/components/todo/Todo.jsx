import React, { useEffect } from "react";
import ClearAll from "../clearAll/ClearAll";
import BottomInfo from "../toDoApp/bottomInfo/BottomInfo";
import Header from "../toDoApp/header/Header";
import PagesList from "../toDoApp/pages/PagesList";
import TasksList from "../toDoApp/tasksList/TasksList";
import "./Todo.css";
import ChooseAll from "../toDoApp/ui/button/ChooseAll";
import TasksCount from "../toDoApp/ui/taskCount/TasksCount";
import { request } from "../../redux/store/actions";
import useTasks from "../custom-hooks/custom-hooks";
import attributes from "../custom-hooks/attributes";

export default function Todo() {
  const [todos, dispatch] = useTasks(attributes.todos);

  useEffect(() => {
    const getTasksFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

    dispatch(request(getTasksFromLocalStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <section className="todolist">
      <Header>{todos.length !== 0 ? <ChooseAll /> : null}</Header>
      {todos.length !== 0 ? (
        <>
          <TasksList />
          <BottomInfo>
            <TasksCount />
            <PagesList />
            {todos.some((todo) => todo.completed === true) ? (
              <ClearAll />
            ) : null}
          </BottomInfo>
        </>
      ) : null}
    </section>
  );
}
