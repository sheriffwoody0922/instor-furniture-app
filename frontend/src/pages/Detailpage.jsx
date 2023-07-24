// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../components/Header";

// Importiere die 'useParams'-Hook aus 'react-router-dom', um die URL-Parameter zu erhalten
import { useParams } from "react-router-dom";

// Importiere die 'useEffect' und 'useState'-Hooks aus 'react', um den Zustand in der Komponente zu verwalten
import { useEffect, useState } from "react";

// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";

// Importiere die 'UpdateBtn'-Komponente aus dem '../components/UpdateBtn'-Modul
import UpdateBtn from "../components/UpdateBtn";

// Importiere die CSS-Datei für das Styling der Komponente
import "./DetailPage.css";

// Importiere die 'BackButton'-Komponente aus dem '../components/BackButton'-Modul
import BackButton from "../components/BackButton";

// Definiere die React-Komponente 'Detailpage'
const Detailpage = () => {
  // Verwende die 'useParams'-Hook, um die URL-Parameter zu erhalten
  const params = useParams();
  const idFurniture = params.id;

  // Verwende die 'useState'-Hook, um den Zustand 'furniture' mit dem anfänglichen Wert '[]'
  // und den Zustand 'refresh' mit dem anfänglichen Wert 'true' zu initialisieren
  const [furniture, setFurniture] = useState([]);
  const [refresh, setRefresh] = useState(true);

  // Verwende die 'useEffect'-Hook, um die Daten des Möbelstücks mit der angegebenen 'idFurniture' aus der API abzurufen
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/furniture/${idFurniture}`);
      setFurniture(data);
    };
    fetchData();
  }, [refresh]);

  // Zeige die Komponente an
  return (
    <>
      {/* Header-Komponente anzeigen */}
      <Header />

      {/* Titel "Details" */}
      <h1>Details</h1>

      {/* Container für die Möbelstück-Detailansicht */}
      <section className="details-container">
        {/* Container für das Möbelstück-Bild */}
        <div className="img-outer-container">
          <div
            className="img-with-update-container"
            style={{ backgroundImage: `url(${furniture.image?.url})` }}
          >
            {/* 'UpdateBtn'-Komponente für das Aktualisieren des Bildes */}
            <UpdateBtn
              itemKeyName={"img"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
        </div>

        {/* Container für die Möbelstück-Textdetails */}
        <div className="text-outer-container">
          {/* Container für den Möbelstück-Titel */}
          <div className="title-with-update-container">
            <h1>{furniture.title}</h1>
            {/* 'UpdateBtn'-Komponente für das Aktualisieren des Titels */}
            <UpdateBtn
              itemKeyName={"title"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>

          {/* Container für den Möbelstück-Raum */}
          <div className="room-with-update-container">
            <p>Zimmer: {furniture.room}</p>
            {/* 'UpdateBtn'-Komponente für das Aktualisieren des Raums */}
            <UpdateBtn
              itemKeyName={"room"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>

          {/* Container für die Möbelstück-Beschreibung */}
          <div className="description-with-update-container">
            <p>Beschreibung: {furniture.description}</p>
            {/* 'UpdateBtn'-Komponente für das Aktualisieren der Beschreibung */}
            <UpdateBtn
              itemKeyName={"description"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>

          {/* Container für die Möbelstück-Größe */}
          <div className="size-with-update-container">
            <p>Größe: {furniture.size}</p>
            {/* 'UpdateBtn'-Komponente für das Aktualisieren der Größe */}
            <UpdateBtn
              itemKeyName={"size"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
        </div>
      </section>

      {/* 'BackButton'-Komponente für das Zurücknavigieren */}
      <BackButton />
    </>
  );
};

// Exportiere die 'Detailpage'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Detailpage;
