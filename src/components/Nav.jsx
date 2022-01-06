import React from "react";
import { Link } from "react-router-dom";
import { GrHome } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { GrList } from "react-icons/gr";

const Nav = () => (
  <nav className="nav">
    <Link to="/">
      <GrHome />
    </Link>
    <Link to="/add">
      <GrFormAdd />
    </Link>
    <Link to="/list">
      <GrList/>
    </Link>
  </nav>
);
export default Nav;