import React from "react";
import { NavLink } from "react-router";
import "./LeftSidebar.css";
import PublicIcon from "@mui/icons-material/Public";
const LeftSidebar = () => {
  return (
    <div className="LeftSidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclass="active">
          <p>home</p>
        </NavLink>
        <div className="side-class-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink to="/Questions" className="side-nav-links">
            <img src={PublicIcon} alt="globe" />
            <p className="question"> Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links">
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links">
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default LeftSidebar;
