import axios from "axios";
import { useState, useEffect } from "react";
import EditBtn from "./EditBtn";

const FurnitureList = () => {
  const [furniture, setFurniture] = useState([]);
  useEffect(() => {
    axios
      .get(`https://furnituremern.alpayc.repl.co/api/furniture?size=klein`)
      .then((res) => {
        setFurniture(res.data);
      });
  }, []);
  return (
    <>
      <h1>Liste aller Möbel</h1>
      {furniture?.map((furniture) => (
        <div key={furniture._id} className="furniture-item">
          <div className="item-img-container">
            <img src={furniture.image.url} alt={furniture.name} />
          </div>
          <div className="descr-container">
            <h2>{furniture.title}</h2>
            <h3>{furniture.room}</h3>
            <h3>Beschreibung</h3>
            <p>{furniture.description}</p>
            <EditBtn furnitureId={furniture._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default FurnitureList;
