// Importiere die 'Link'-Komponente aus dem 'react-router-dom'-Modul,
// um Link-ähnliche Komponenten zu erstellen, die bei Klick auf eine andere Seite navigieren
import { Link, NavLink } from "react-router-dom";

// Importiere die CSS-Datei für das Styling der Komponente
import "./Header.css";

// Definiere die React-Komponente 'Header'
const Header = () => {
  return (
    <header>
      <nav>
        {/* Link zur Startseite */}
        <Link to="/">
          <img src="./Logo.png" alt="" />
        </Link>{" "}
        <div class="dropdown">
          <span class="dropbtn">SIZES</span>
          <div class="dropdown-content">
            <Link to="/big-stuff">BIG STUFF</Link>
            <Link to="/middle-stuff">NOT SO BIG STUFF</Link>
            <Link to="/small-stuff">SMALL STUFF</Link>
          </div>
        </div>
        <Link to="/allfurnitures">ALL FURNITURES</Link>
        <NavLink to="/login">
          <button className="login-btn">
            <img className="login-img" src="./person.png" alt="" />
            <p> Sign Up / Login</p>
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

// Exportiere die 'Header'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Header;
