// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../components/FurnitureList";

// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../components/Header";

// Definiere die React-Komponente 'SmallStuff'
const SmallStuff = () => {
  return (
    <>
      {/* Container für den grauen Header */}
      <section className="header-grau">
        {/* Header-Komponente anzeigen */}
        <Header />
      </section>

      {/* 'FurnitureList'-Komponente anzeigen und die Requisit 'furnituresize' mit dem Wert "klein" übergeben */}
      <FurnitureList furnituresize={"klein"} />
    </>
  );
};

// Exportiere die 'SmallStuff'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default SmallStuff;
