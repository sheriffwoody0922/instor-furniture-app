import axios from "axios";
import { useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem";
import CreateFurnitureForm from "./CreateFurnitureForm";
import "./FurnitureList.css";
import BackButton from "./BackButton";

const FurnitureList = (props) => {
  const [furniture, setFurniture] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = axios
        .get(`/api/furniture?size=${props.furnituresize}`)
        .then((res) => {
          setFurniture(res.data);
        });
    };
    fetchData();
  }, [refresh]);

  return (
    <div className="furniture-gallery">
      <div>
        <h1>Liste aller Möbel</h1>
      </div>
      <main className="category-container">
        <FurnitureItem data={furniture} />
        <CreateFurnitureForm setRefresh={setRefresh} />
      </main>
    </div>
  );
};

export default FurnitureList;
