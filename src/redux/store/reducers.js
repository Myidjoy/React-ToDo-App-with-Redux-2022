import { combineReducers } from "redux";
import actionsTypes from "./actions-types";

const initialState = {
  todos: [],
};
const filterStatus = {
  status: "all",
};

const changeTodos = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.REQUEST:
      return {
        todos: action.data,
      };
    case actionsTypes.ADD:
      return {
        todos: [...state.todos, action.data],
      };
    case actionsTypes.DELL:
      return {
        todos: action.data,
      };
    case actionsTypes.SELECT_ALL:
      return {
        todos: action.data,
      };
    case actionsTypes.CHANGE_TITLE:
      return {
        todos: action.data,
      };
    case actionsTypes.CHECKED:
      return {
        todos: action.data,
      };
    default:
      return state;
  }
};

const changeFilterStatus = (state = filterStatus, action) => {
  switch (action.type) {
    case "all":
      return {
        status: action.type,
      };
    case "active":
      return {
        status: action.type,
      };
    case "completed":
      return {
        status: action.type,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  todos: changeTodos,
  filterStatus: changeFilterStatus,
});

export default reducers;
