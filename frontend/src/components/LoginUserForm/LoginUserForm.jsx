import { Link } from "react-router-dom";
import axios from "axios";

const LoginUserForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post("/api/user/login", formData);

      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

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
};

export default LoginUserForm;
