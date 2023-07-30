// Importiere die 'NavLink'-Komponente aus dem 'react-router-dom'-Modul
import { NavLink } from "react-router-dom";

// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";

// Importiere die CSS-Datei für das Styling der Komponente
import "./Home.css";

// Importiere axios für das erste Fetchen der Daten
import axios from "axios";
import { useEffect, useState } from "react";

import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import PopularArticlesGrid from "../../components/PopularArticlesGrid/PopularArticlesGrid";
// Definiere die React-Komponente 'Home'
const Home = () => {
  const [allfurnitures, setAllFurnitures] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/furniture");
      setAllFurnitures(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="furniture-header">
          <h1>
            Verwalte deine Möbel <br></br> Einfach. Digital. Online
          </h1>
        </section>
        <section className="furniture-home">
          <h2>Unsere Möbel</h2>
          <NavLink to="/furnitures">Mehr entdecken</NavLink>
        </section>
        <CategoryBanner />
        <PopularArticlesGrid productData={allfurnitures} />
      </main>
    </>
  );
};

// Exportiere die 'Home'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Home;
