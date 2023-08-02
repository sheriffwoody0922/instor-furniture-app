import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { SignUpedUserId } from "../../context/Context";

import { useContext, useEffect, useState } from "react";

import "./LoadingUserForm.css";

const LoginUserForm = () => {
  const [responseData, setResponseData] = useState([]);
  const { loginUserId, setLoginUserId } = useContext(SignUpedUserId);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post("/api/user/login", formData);
      if (
        response.status == 200 &&
        response.config.loginUserId == loginUserId
      ) {
        setLoginSuccess(true);
        setResponseData(response.data.data);
        setTimeout(() => {
          navigate(`/user/${response.data.data.userHandle}`);
        }, 2000);
      }
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoginUserId(responseData._id);
  }, [responseData, loginSuccess]);

  if (loginSuccess === false) {
    return (
      <>
        <form onSubmit={handleSubmit} className="new-user-form-container">
          <h2 className="add-title">Login</h2>
          <input
            type="email"
            placeholder="Deine Emailadresse"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Dein Password"
            name="password"
            required
          />
          <button className="submit-btn" type="submit">
            Login
          </button>
          <Link to="/register">
            <button className="to-register-btn">
              Noch kein Konto? Konto anlegen
            </button>
          </Link>
        </form>
      </>
    );
  } else if (loginSuccess === true) {
    return (
      <>
        <section className="login-animation">
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>Loading</h1>
        </section>
      </>
    );
  }
};

export default LoginUserForm;
