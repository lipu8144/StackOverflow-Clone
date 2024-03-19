import React from "react";
import './leftSidebar.css';
import { FaHome } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { IoMdPricetags } from "react-icons/io";
import { MdPublic } from "react-icons/md";
// import { useSelector } from "react-redux";

import { NavLink } from 'react-router-dom'

const LeftSidebar = ({ sharedData }) => {
  // const isSidebarOpen = useSelector((state) => state.isSidebarOpen);

  return (
    <div className="left-sidebar" id={`${sharedData ? "open" : ""}`}>
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <FaHome />
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <MdPublic />
            <p>PUBLIC</p>
          </div>

          <NavLink
            to="/questions"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <RiQuestionnaireFill />
            <p> Questions </p>
          </NavLink>

          <NavLink
            to="/tags"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <IoMdPricetags />
            <p>Tags</p>
          </NavLink>

          <NavLink
            to={"/users"}
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <HiUsers />
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
