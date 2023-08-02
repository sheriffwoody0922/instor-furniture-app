import { useEffect, useState } from "react";
import "./PopularArticlesGrid.css";

import PopularItem from "../PopularItem/PopularItem";

const PopularArticlesGrid = (props) => {
  const [allfurnitures, setAllFurnitures] = useState();

  useEffect(() => {
    setAllFurnitures(props.productData);
  }, [props]);

  return (
    <>
      <section className="popular-furniture-container">
        <h2>Beliebt</h2>
        <div className="popular-furniture-grid">
          {allfurnitures?.map((furniture) => (
            <PopularItem key={furniture._id} furnitureItemData={furniture} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularArticlesGrid;
