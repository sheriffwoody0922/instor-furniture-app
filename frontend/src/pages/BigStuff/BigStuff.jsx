// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";

// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../../components/FurnitureList/FurnitureList";
import { useState } from "react";

// Definiere die React-Komponente 'BigStuff'
const BigStuff = () => {
  const [categoryName, setCategoryName] = useState("gross");
  return (
    <>
      {/* Header-Bereich mit grauem Hintergrund */}
      <section className="header-grau">
        {/* Zeige die 'Header'-Komponente an */}
        <Header />
      </section>
      {/* Zeige die 'FurnitureList'-Komponente mit der 'furnituresize' prop 'gross' an */}
      <FurnitureList furnituresize={categoryName} />
    </>
  );
};

// Exportiere die 'BigStuff'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default BigStuff;
