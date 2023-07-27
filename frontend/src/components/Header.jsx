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
        <Link to="/">HOME</Link>
        {/* Link zur Seite mit großen Möbelstücken */}
        <Link to="/big-stuff">BIG STUFF</Link>
        {/* Link zur Seite mit mittelgroßen Möbelstücken */}
        <Link to="/middle-stuff">NOT SO BIG STUFF</Link>
        {/* Link zur Seite mit kleinen Möbelstücken */}
        <Link to="/small-stuff">SMALL STUFF</Link>
        <Link to="/allfurnitures">ALL FURNITURES</Link>
        <NavLink to="/login">
          <button>Sign Up / Login</button>
        </NavLink>
      </nav>
    </header>
  );
};

// Exportiere die 'Header'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Header;
