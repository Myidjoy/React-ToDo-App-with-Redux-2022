import actionsTypes from "./actions-types";

export const request = (data) => ({
  type: actionsTypes.REQUEST,
  data,
});

export const addTask = (data) => ({
  type: actionsTypes.ADD,
  data,
});

export const dellTask = (data) => ({
  type: actionsTypes.DELL,
  data,
});

export const selectAll = (data) => ({
  type: actionsTypes.SELECT_ALL,
  data,
});

export const changeTitleInState = (data) => ({
  type: actionsTypes.CHANGE_TITLE,
  data,
});

export const checkTask = (data) => ({
  type: actionsTypes.CHECKED,
  data,
});

export const createType = (name) => ({
  type: name,
});
