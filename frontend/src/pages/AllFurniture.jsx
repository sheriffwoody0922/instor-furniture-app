// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../components/Header";

// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../components/FurnitureList";

// Definiere die React-Komponente 'BigStuff'
const AllFurniture = () => {
  return (
    <>
      {/* Header-Bereich mit grauem Hintergrund */}
      <section className="header-grau">
        {/* Zeige die 'Header'-Komponente an */}
        <Header />
      </section>
      {/* Zeige die 'FurnitureList'-Komponente mit der 'furnituresize' prop 'gross' an */}
      <FurnitureList furnituresize={""} />
    </>
  );
};

// Exportiere die 'BigStuff'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default AllFurniture;
