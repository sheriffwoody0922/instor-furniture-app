// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../components/Header";

// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../components/FurnitureList";
import { useState } from "react";
// Definiere die React-Komponente 'MiddleStuff'
const MiddleStuff = () => {
  const [categoryName, setCategoryName] = useState("mittel");
  return (
    <>
      {/* Container für den grauen Header */}
      <section className="header-grau">
        {/* Header-Komponente anzeigen */}
        <Header />
      </section>

      {/* 'FurnitureList'-Komponente anzeigen und die Requisit 'furnituresize' mit dem Wert "mittel" übergeben */}
      <FurnitureList furnituresize={categoryName} />
    </>
  );
};

// Exportiere die 'MiddleStuff'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default MiddleStuff;
