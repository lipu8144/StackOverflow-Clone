import React,{useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { jwtDecode} from "jwt-decode"

import { FaBarsStaggered, FaX } from "react-icons/fa6";

import logo from '../../assets/black-logo.png'
import icon from "../../../public/logo.png";
import { FaSearch } from "react-icons/fa";
import Avatar from '../Avatar/Avatar';
import Button from "../Button/Button";
import './navbar.css';
import { setCurrentUser } from "../../actions/currentUser";
// import {toggleSidebar} from "../../actions/togglesidebar"


const Navbar = ({ onDataChange }) => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);


  //handle toggle
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    onDataChange(toggle);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        {toggle ? (
          <FaX className="bar" onClick={handleToggle} />
        ) : (
          <FaBarsStaggered className="bar" onClick={handleToggle} />
        )}
        <Link to={"/"} className="nav-item nav-logo">
          <img src={logo} alt="logo" className="logo" />
          <img src={icon} alt="icon" className="icon" />
        </Link>
        <Link to={"/"} className="nav-item nav-btn" id="about">
          About
        </Link>
        <Link to={"/"} className="nav-item nav-btn">
          Products
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <FaSearch className="SearchIcon" />
        </form>
        {User === null ? (
          <Link to={"/Auth"} className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor={"#009dff"}
              px={"10px"}
              py={"7px"}
              borderRadius={"50%"}
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>

            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
