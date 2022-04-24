import React from "react";
import "../ui/button/ChooseAll.css";
import HeaderInput from "./input/HeaderInput";

export default function Header({ children }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <HeaderInput />
      {children}
    </header>
  );
}
