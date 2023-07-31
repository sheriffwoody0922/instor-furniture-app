// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";
import "./CreateUserForm.css";
// Importiere die CSS-Datei für das Styling der Komponente
import "./CreateFurnitureForm.css";
import { Link } from "react-router-dom";

// Definiere die React-Komponente 'CreateFurnitureForm'
const CreateUserForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await axios.post("/api/user/signup", formData);
    console.log(response);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-user-form-container">
        <h2 className="add-title">ADD NEW User</h2>
        <input
          type="text"
          placeholder="Dein Username beginnend mit einem @"
          name="userHandle"
          required
        />
        <input type="text" placeholder="Dein Name" name="name" required />
        <input type="file" placeholder="Dein Profilbild" name="image" />
        <textarea
          className="add-text-input-field"
          placeholder="Eine kurze Beschreibung über dich"
          name="description"
          required
        />
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
          Registrieren
        </button>
        <Link to="/login">
          <button className="to-login-btn">Zum Login</button>
        </Link>
      </form>
    </>
  );
};

// Exportiere die 'CreateFurnitureForm'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default CreateUserForm;
