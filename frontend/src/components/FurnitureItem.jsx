import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import EditBtn from "./EditBtn";
import "./FurnitureItem.css";

const FurnitureItem = (props) => {
  const [furnitureData, setFurnitureData] = useState(props.data);
  useEffect(() => {
    setFurnitureData(props.data);
  }, [props.data]);

  return (
    <>
      <section className="furniture-item-container">
        {furnitureData?.map((furniture) => (
          <div key={furniture._id} className="furniture-item">
            <div className="item-img-container">
              <img src={furniture.image.url} alt={furniture.name} />
            </div>
            <div className="descr-container">
              <div className="header-container">
              <h2>{furniture.title}</h2>

              </div>
              <h3>{furniture.room}</h3>
              <h3>Beschreibung</h3>
              <p>{furniture.description}</p>
              <p>Größe: {furniture.size}</p>
            </div>
              <EditBtn furnitureId={furniture._id} />
          </div>
        ))}
      <BackButton/>
      </section>
    </>
  );
};

export default FurnitureItem;
