import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Todo from "./components/todo/Todo";
import store from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    </Provider>
  );
}
