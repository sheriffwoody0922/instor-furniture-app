// Importiere die Funktion 'useNavigate' aus dem 'react-router-dom'-Modul,
// die für die Navigation in der React-App verwendet wird
import { useNavigate } from "react-router-dom";

// Importiere das Bild für den Zurück-Button und die zugehörige CSS-Datei
import btnImg from "../assets/backbtn.png";
import "./BackButton.css";

// Definiere die React-Komponente 'BackButton'
const BackButton = () => {
  // Verwende die 'useNavigate'-Hook, um die 'navigate'-Funktion für die Navigation zu erhalten
  const navigate = useNavigate();

  // Definiere die Funktion 'goBack', die aufgerufen wird, wenn der Zurück-Button geklickt wird
  const goBack = () => {
    // Navigiere zurück zur vorherigen Seite (eine Stelle in der History zurück)
    navigate(-1);
  };

  // Rückgabe des React-Elements, das den Zurück-Button darstellt
  return (
    <>
      {/* Ein Button-Element, das die 'goBack'-Funktion ausführt, wenn es geklickt wird,
      und die Klasse 'BackBtn' verwendet, um das Erscheinungsbild des Buttons zu definieren */}
      <button onClick={goBack} className="BackBtn">
        {/* Ein Bild-Element, das das Back-Button-Bild aus der 'btnImg'-Quelle anzeigt */}
        <img src={btnImg} alt="Back" />
      </button>
    </>
  );
};

// Exportiere die 'BackButton'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default BackButton;
