import Header from "../components/Header";
import FurnitureList from "../components/FurnitureList";

const MiddleStuff = () => {
  return (
    <>
      <section className="header-grau">
        <Header />
      </section>
      <FurnitureList furnituresize={"mittel"} />
    </>
  );
};

export default MiddleStuff;
