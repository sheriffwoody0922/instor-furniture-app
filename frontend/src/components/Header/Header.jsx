import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo-copy.png";
import Person from "../../assets/person.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { isLoggedIn, logout, user } = useContext(UserContext);

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          {!isLoggedIn && (
            <>
              <NavLink to="/login">
                <button className="login-btn">
                  <img className="login-img" src={Person} alt="" />
                  <h4> Sign Up / Login</h4>
                </button>
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <div className="dropdown">
                <span className="dropbtn">SIZES</span>
                <div className="dropdown-content">
                  <Link to="/big-stuff">BIG STUFF</Link>
                  <Link to="/middle-stuff">NOT SO BIG STUFF</Link>
                  <Link to="/small-stuff">SMALL STUFF</Link>
                </div>
              </div>
              <Link to="/allfurnitures">ALL FURNITURES</Link>
              <div className="login-succesfull-container">
                <button type="button" onClick={logout} className="logout-btn">
                  Logout
                </button>
                <NavLink to={`/user/${user.userhandle}`}>
                  <button className="login-btn">
                    <img
                      className="login-img-useravatar"
                      src={user?.imageUrl}
                      alt="user.image._id"
                    />
                    <h4>Dashboard</h4>
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};
export default Header;
