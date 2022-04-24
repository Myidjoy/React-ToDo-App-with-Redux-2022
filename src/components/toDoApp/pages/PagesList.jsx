import React from "react";
import attributes from "../../custom-hooks/attributes";
import useTasks from "../../custom-hooks/custom-hooks";
import Page from "./Page";
import "./PagesList.css";

// { selectFilter, status }
export default function pagesList() {
  const [status, dispatch] = useTasks(attributes.filter);

  const pages = [
    ["/", "all", dispatch],
    ["/active", "active", dispatch],
    ["/completed", "completed", dispatch],
  ];

  return (
    <ul className="page-list">
      {pages.map((page) => (
        <Page key={Math.random()} content={page} status={status} />
      ))}
    </ul>
  );
}
