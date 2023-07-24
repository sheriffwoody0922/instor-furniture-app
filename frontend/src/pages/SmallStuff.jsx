import FurnitureList from "../components/FurnitureList";
import Header from "../components/Header";

const SmallStuff = () => {
  return (
    <>
      <section className="header-grau">
        <Header />
      </section>
      <FurnitureList furnituresize={"klein"} />
    </>
  );
};

export default SmallStuff;
