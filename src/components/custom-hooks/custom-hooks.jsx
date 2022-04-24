import { useSelector, useDispatch } from "react-redux";
import attributes from "./attributes";

export default function useTasks(attribute) {
  const result = [];
  const dispatch = useDispatch();

  if (attribute === attributes.todos) {
    const todos = useSelector((store) => store.todos.todos);

    result.push(todos);
  }

  if (attribute === attributes.filter) {
    const status = useSelector((store) => store.filterStatus.status);

    result.push(status);
  }

  result.push(dispatch);

  return result;
}
