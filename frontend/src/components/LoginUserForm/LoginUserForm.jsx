import axios from "axios";
import "./LoginUserForm.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import BackButtonGrey from "../BackButtonGrey/BackButtonGrey";

export default function Login() {
  const { refetch, isLoggedIn, user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    try {
      const resp = await axios.post("/api/login", data);
      refetch();
      setTimeout(() => {
        nav(`/user/${resp.data.data.userhandle}`);
      }, 2000);
      e.target.reset();
    } catch (e) {
      console.log(e);
      setError("Bitte überprüfe deine Eingabe");
      e.target.reset();
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <div className="login-user-form-container">
          <div className="login-title-container">
            <BackButtonGrey />
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-fields-container">
              <input
                type="email"
                placeholder="Deine Emailadresse"
                name="email"
                required
              />
              <input
                type="password"
                placeholder="Dein Passwort"
                name="password"
                required
              />
              {error && <small>{error}</small>}
              <button className="submit-btn" type="submit">
                Login
              </button>
              <Link to="/register">
                <button className="to-register-btn">
                  Noch kein Konto? Konto anlegen
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
      {isLoggedIn && (
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
          <h1>Loading...</h1>
        </section>
      )}
    </>
  );
}
