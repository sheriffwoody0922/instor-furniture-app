// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";

// Importiere die 'useState'-Hook aus 'react', um den Zustand in der Komponente zu verwalten
import { useState } from "react";

// Importiere die CSS-Datei für das Styling der Komponente
import "./CreateFurnitureForm.css";

// Definiere die React-Komponente 'CreateFurnitureForm'
const CreateFurnitureForm = ({ setRefresh }) => {
  // Verwende die 'useState'-Hook, um den Zustand 'creatingNewItem' und die Zustandsvariablen 'title', 'content' zu initialisieren
  const [creatingNewItem, setCreatingNewItem] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  // Definiere die Funktion 'handleSubmit', die aufgerufen wird, wenn das Formular gesendet wird
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Erstelle ein 'FormData'-Objekt aus dem gesendeten Formular
    const formData = new FormData(e.target);

    // Sende eine POST-Anfrage mit 'axios' an den Endpunkt '/api/addFurniture'
    const response = await axios.post("/api/addFurniture", formData);

    // Aktualisiere die Ansicht, indem der 'setRefresh'-Prop aufgerufen wird
    setRefresh((prev) => !prev);

    // Gib die Antwort in der Konsole aus
    console.log(response);

    // Setze das Formular zurück, um es für weitere Eingaben vorzubereiten
    e.target.reset();
  };

  // Wenn der Bearbeitungsmodus aktiviert ist, wird das Aussehen der Komponente geändert
  if (creatingNewItem) {
    return (
      <>
        {/* Formular für das Erstellen eines neuen Möbelstücks */}
        <form onSubmit={handleSubmit} className="new-furniture-form-container">
          <h2 className="add-title">ADD NEW ITEM</h2>
          <input type="text" placeholder="TITLE" name="title" required />
          <input type="text" placeholder="ROOM" name="room" required />
          <input type="text" placeholder="SIZE" name="size" required />
          <input type="file" placeholder="IMAGE" name="image" required />
          <textarea
            className="add-text-input-field"
            placeholder="ADD TEXT"
            name="description"
            required
          />
          <button className="submit-btn" type="submit">
            PUBLISH
          </button>
          <button
            className="abort-btn"
            onClick={() => setCreatingNewItem(false)}
            type="button"
          >
            X
          </button>
        </form>
      </>
    );
  } else {
    // Im Anzeigemodus, der standardmäßig geladen wird, wenn die JSX-Komponente geladen wird
    return (
      <>
        {/* Button zum Aktivieren des Bearbeitungsmodus */}
        <button
          className="add-new-item-btn"
          onClick={() => setCreatingNewItem(true)}
        >
          Add Something
        </button>
      </>
    );
  }
};

// Exportiere die 'CreateFurnitureForm'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default CreateFurnitureForm;
