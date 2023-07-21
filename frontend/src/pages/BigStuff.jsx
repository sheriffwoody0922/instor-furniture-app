import Header from "../components/Header";
import FurnitureList from "../components/FurnitureList";

const BigStuff = () => {
  return (
    <>
      <Header />
      <FurnitureList furnituresize={"gross"} />
    </>
  );
};

export default BigStuff;
