import React from "react";
import { Link } from "react-router-dom";
import { createType } from "../../../redux/store/actions";
import "./Page.css";

export default function Page({ content, status }) {
  const [link, name, dispatch] = content;
  const classes =
    status === name
      ? `page-list__content page-list__content_${status}`
      : "page-list__content";

  return (
    <li className={classes}>
      <Link
        className="page-list__link"
        onClick={() => {
          dispatch(createType(name));
        }}
        to={link}
      >
        {name}
      </Link>
    </li>
  );
}
