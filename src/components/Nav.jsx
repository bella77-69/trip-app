import React from "react";
import { Link } from "react-router-dom";
import { GrHome } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { GrList } from "react-icons/gr";
import './Nav.scss'

const Nav = () => (
  <nav className="nav">
    <Link to="/" className="nav-home">
      <GrHome />
    </Link>
    <Link to="/add" className="nav-add">
      <GrFormAdd />
    </Link>
    <Link to="/list" className="nav-list">
      <GrList/>
    </Link>
  </nav>
);
export default Nav;