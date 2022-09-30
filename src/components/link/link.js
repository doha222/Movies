import React from "react";
import {
  Link
} from "react-router-dom"
const NavLink = (props) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={props.data}>{props.content}</Link>
      </li>
    </>
  );
};

export default NavLink;
