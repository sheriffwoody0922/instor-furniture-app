import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo-copy.png";
import Person from "../../assets/person.png";
import { SignUpedUserId } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const { loginUserId, setLoginUserId } = useContext(SignUpedUserId);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (loginUserId) {
      const fetchData = async () => {
        const { data } = await axios.get(`/api/user/${loginUserId}`);
        console.log(data);
        setUserData(data);
      };
      fetchData();
    }
  }, [loginUserId]);

  if (loginUserId) {
    return (
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="dropdown">
            <span className="dropbtn">SIZES</span>
            <div className="dropdown-content">
              <Link to="/big-stuff">BIG STUFF</Link>
              <Link to="/middle-stuff">NOT SO BIG STUFF</Link>
              <Link to="/small-stuff">SMALL STUFF</Link>
            </div>
          </div>
          <Link to="/allfurnitures">ALL FURNITURES</Link>
          <NavLink to="/user/@Vertigo">
            <button className="login-btn">
              <img
                className="login-img-useravatar"
                src={userData.image?.url}
                alt=""
              />
              <h4>Dashboard</h4>
            </button>
          </NavLink>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="dropdown">
            <span className="dropbtn">SIZES</span>
            <div className="dropdown-content">
              <Link to="/big-stuff">BIG STUFF</Link>
              <Link to="/middle-stuff">NOT SO BIG STUFF</Link>
              <Link to="/small-stuff">SMALL STUFF</Link>
            </div>
          </div>
          <Link to="/allfurnitures">ALL FURNITURES</Link>
          <NavLink to="/login">
            <button className="login-btn">
              <img className="login-img" src={Person} alt="" />
              <h4> Sign Up / Login</h4>
            </button>
          </NavLink>
        </nav>
      </header>
    );
  }
};

// Exportiere die 'Header'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Header;
