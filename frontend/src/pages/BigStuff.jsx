import Header from "../components/Header";
import FurnitureList from "../components/FurnitureList";

const BigStuff = () => {
  return (
    <>
      <section className="header-grau">
        <Header />
      </section>
      <FurnitureList furnituresize={"gross"} />
    </>
  );
};

export default BigStuff;
