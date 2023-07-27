// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";

// Importiere die 'useState' und 'useEffect'-Hooks aus 'react', um den Zustand in der Komponente zu verwalten
import { useState, useEffect } from "react";

// Importiere die Komponenten 'FurnitureItem', 'CreateFurnitureForm' und 'BackButton' aus den entsprechenden Dateien
import FurnitureItem from "./FurnitureItem";
import CreateFurnitureForm from "./CreateFurnitureForm";
import BackButton from "./BackButton";
import Search from "../components/Search";
// Importiere die CSS-Datei für das Styling der Komponente
import "./FurnitureList.css";

// Definiere die React-Komponente 'FurnitureList'
const FurnitureList = (props) => {
  // Verwende die 'useState'-Hook, um den Zustand 'furniture' mit einem leeren Array zu initialisieren,
  // und den Zustand 'refresh' mit dem anfänglichen Wert 'true'
  const [furniture, setFurniture] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [categoryName, setCategoryName] = useState(props.furnituresize);
  const [queryKey, setQueryKey] = useState("size");
  // Verwende die 'useEffect'-Hook, um Daten von der API zu laden, wenn sich 'refresh' ändert
  useEffect(() => {
    if ((typeof categoryName !== "undefined") | !refresh) {
      const fetchData = async () => {
        console.log(queryKey, categoryName);
        // Sende eine GET-Anfrage mit 'axios' an den Endpunkt '/api/furniture'
        // und füge die Abfrage-Parameter 'size' hinzu, die aus 'props.furnituresize' stammen
        const data = await axios.get("/api/furniture", {
          params: { [queryKey]: categoryName },
        });

        // Aktualisiere den Zustand 'furniture' mit den Daten aus der Antwort
        setFurniture(data.data);
      };
      fetchData();
    }

    console.log("parent-compontent", refresh);
  }, [refresh, categoryName]);

  return (
    <div className="furniture-gallery">
      <Search setCategoryName={setCategoryName} setQueryKey={setQueryKey} />
      <div>
        {/* Überschrift der Möbelliste */}
        <h1>Liste aller Möbel</h1>
      </div>
      <main className="category-container">
        {/* Komponente 'FurnitureItem', um einzelne Möbelstücke anzuzeigen */}
        <FurnitureItem
          data={furniture}
          refresh={refresh}
          setRefresh={setRefresh}
          queryKey={"size"}
          categoryName={props.furnituresize}
          setQueryKey={setQueryKey}
          setCategoryName={setCategoryName}
        />
        {/* Komponente 'CreateFurnitureForm', um ein neues Möbelstück hinzuzufügen */}
        <CreateFurnitureForm
          setRefresh={setRefresh}
          refresh={refresh}
          queryKey={"size"}
          categoryName={props.furnituresize}
          setQueryKey={setQueryKey}
          setCategoryName={setCategoryName}
        />
      </main>
      {/* Komponente 'BackButton', um zur vorherigen Seite zurückzukehren */}
    </div>
  );
};

// Exportiere die 'FurnitureList'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default FurnitureList;
