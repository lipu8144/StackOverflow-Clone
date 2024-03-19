import React from "react";
import { useLocation } from "react-router-dom";
import './users.css'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ sharedData }) => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSidebar sharedData={sharedData} />
      <div className="home-container-2" style={{ marginTop: "50px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
