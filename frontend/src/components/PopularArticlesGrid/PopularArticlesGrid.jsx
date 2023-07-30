import { useEffect, useState } from "react";
import "./PopularArticlesGrid.css";
import { Link } from "react-router-dom";
import button from "../../assets/button.png";
import AddBtn from "../AddBtn/AddBtn";

const PopularArticlesGrid = (props) => {
  const [allfurnitures, setAllFurnitures] = useState();
  const [userId, setUserId] = useState("64c26f431bef911903662774");

  useEffect(() => {
    setAllFurnitures(props.productData);
  }, [props]);

  return (
    <>
      <section className="popular-furniture-container">
        <h2>Beliebt</h2>
        <div className="popular-furniture">
          {allfurnitures?.map((furniture) => (
            <div key={furniture._id} className="popular-furniture-item">
              <Link to={`/furniture/${furniture._id}`}>
                <img
                  src={furniture.image.url}
                  className="popular-furniture-img"
                />
              </Link>
              <div className="popular-furniture-info-container">
                <div>
                  <p>{furniture.room}</p>
                  <p>{furniture.title}</p>
                  <p>Größe: {furniture.size}</p>
                </div>
                <AddBtn furnitureID={furniture._id} userId={userId} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularArticlesGrid;
