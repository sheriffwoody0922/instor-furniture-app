import FurnitureList from "../components/FurnitureList";
import Header from "../components/Header";

const SmallStuff = () => {
  return (
    <>
      <Header />
      <FurnitureList furnituresize={"klein"} />
    </>
  );
};

export default SmallStuff;
