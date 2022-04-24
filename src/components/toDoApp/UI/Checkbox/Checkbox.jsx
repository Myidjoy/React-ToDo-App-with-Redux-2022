import React from "react";
import { checkTask } from "../../../../redux/store/actions";
import attributes from "../../../custom-hooks/attributes";
import useTasks from "../../../custom-hooks/custom-hooks";
import "./Checkbox.css";

export default function Checkbox({ id, completed }) {
  const [todos, dispatch] = useTasks(attributes.todos);

  const toggleTaskStatus = (taskId) => {
    const deepClone = todos.slice();
    const element = deepClone.findIndex((item) => item.id === taskId);

    deepClone[element] = {
      ...deepClone[element],
      completed: !deepClone[element].completed,
    };

    dispatch(checkTask(deepClone));
  };

  return (
    <div className="checkbox">
      <div className={completed ? "checked" : null}>
        <input
          checked={completed}
          onDoubleClick={(e) => {
            e.stopPropagation();
          }}
          onChange={() => {
            toggleTaskStatus(id);
          }}
          type="checkbox"
        />
      </div>
    </div>
  );
}
