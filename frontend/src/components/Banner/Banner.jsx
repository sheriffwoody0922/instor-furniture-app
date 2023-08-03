import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="furniture-home">
        <h2>Unsere Möbel</h2>
        <NavLink to="/furnitures">Mehr entdecken</NavLink>
      </section>
    </>
  );
};

export default Banner;
