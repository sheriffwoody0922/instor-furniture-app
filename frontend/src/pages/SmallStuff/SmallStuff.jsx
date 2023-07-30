// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../../components/FurnitureList/FurnitureList";

// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";
import { useState } from "react";
// Definiere die React-Komponente 'SmallStuff'
const SmallStuff = () => {
  const [categoryName, setCategoryName] = useState("klein");
  return (
    <>
      {/* Container für den grauen Header */}
      <section className="header-grau">
        {/* Header-Komponente anzeigen */}
        <Header />
      </section>

      {/* 'FurnitureList'-Komponente anzeigen und die prop 'furnituresize' mit dem Wert "klein" übergeben */}
      <FurnitureList furnituresize={categoryName} />
    </>
  );
};

// Exportiere die 'SmallStuff'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default SmallStuff;
