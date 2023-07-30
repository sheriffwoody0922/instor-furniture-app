import { Link } from "react-router-dom";

const LoginUserForm = () => {
  // Definiere die Funktion 'handleSubmit', die aufgerufen wird, wenn das Formular gesendet wird
  const handleSubmit = async (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* Formular für das Erstellen eines neuen Möbelstücks */}
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
