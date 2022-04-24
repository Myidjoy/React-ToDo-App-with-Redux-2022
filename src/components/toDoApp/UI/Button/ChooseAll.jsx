import React from "react";
import useTasks from "../../../custom-hooks/custom-hooks";
import { selectAll } from "../../../../redux/store/actions";
import attributes from "../../../custom-hooks/attributes";

export default function ChooseAll() {
  const [todos, dispatch] = useTasks(attributes.todos);

  const chooseAll = () => {
    const copyState = todos.map((element) => ({
      ...element,
      completed: true,
    }));

    dispatch(selectAll(copyState));
  };

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      className="choose-all"
      onClick={() => {
        chooseAll();
      }}
    />
  );
}
