import "./ForgotPasswordForm";
import BackButtonGrey from "../BackButtonGrey/BackButtonGrey";
import { UserContext } from "../../context/UserContext";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";

const ForgotPasswordForm = () => {
  const { refetch, isLoggedIn, user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    try {
      const resp = await axios.post("/api/resetPassword", data);
      // refetch();
      // setTimeout(() => {
      //   nav(`/user/${resp.data.data.userhandle}`);
      // }, 2000);
      setError("Bitte überprüfe dein Email Postfach");

      e.target.reset();
    } catch (e) {
      console.log(e);
      setError("Bitte überprüfe dein Passwort und deine Emailadresse");
      e.target.reset();
    }
  };
  return (
    <>
      <div className="login-user-form-container">
        <div className="login-title-container">
          <BackButtonGrey />
          <h1>Passwort zurücksetzen</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-fields-container">
            <input
              type="email"
              placeholder="Deine Emailadresse"
              name="email"
              required
            />

            {error && <small>{error}</small>}
            <button className="submit-btn" type="submit">
              Abschicken
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
