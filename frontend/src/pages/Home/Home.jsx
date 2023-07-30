// Importiere die 'NavLink'-Komponente aus dem 'react-router-dom'-Modul
import { NavLink } from "react-router-dom";

// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";

// Importiere die Bilddateien für die Kategorien 'bigStuff', 'middleStuff' und 'smallStuff'
import bigStuff from "../../assets/bigstuff.avif";
import middleStuff from "../../assets/middlestuff.avif";
import smallStuff from "../../assets/smallstuff.avif";

// Importiere die CSS-Datei für das Styling der Komponente
import "./Home.css";

import button from "../../assets/button.png";
// Importiere axios für das erste Fetchen der Daten
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <section className="furniture-home">
          <article className="furniture-header">
            <h1>
              <span>M</span>Y FURNITURE
            </h1>
          </article>
        </section>
        <h2>Categories</h2>
        <section className="furniture-link">
          <NavLink className="home-link" to="/big-stuff">
            <article className="home-stuff">
              <img src={bigStuff} alt="big-stuff" />
              <h6>BIG STUFF</h6>
            </article>
          </NavLink>
          <NavLink className="home-link" to="/middle-stuff">
            <article className="home-stuff">
              <img src={middleStuff} alt="middle-stuff" />
              <h6>NOT SO BIG STUFF</h6>
            </article>
          </NavLink>
          <NavLink className="home-link" to="/small-stuff">
            <article className="home-stuff">
              <img src={smallStuff} alt="small-stuff"></img>
              <h6>SMALL STUFF</h6>
            </article>
          </NavLink>
        </section>
        <h2>Popular</h2>
        <section className="newest-furniture-container">
          {allfurnitures?.map((furniture) => (
            <div key={furniture._id} className="homepage-furniture-item">
              <Link to={`/furniture/${furniture._id}`}>
                <img
                  src={furniture.image.url}
                  className="homepage-furniture-img"
                />
              </Link>
              <div className="homepage-furniture-info-container">
                <div>
                  <h3>{furniture.room}</h3>
                  <h2>{furniture.title}</h2>
                  <h2>{furniture.size}</h2>
                </div>
                <img src={button} alt="" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

// Exportiere die 'Home'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Home;
