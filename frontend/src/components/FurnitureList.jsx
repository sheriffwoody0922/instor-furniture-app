import axios from "axios";
import { useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem";
import CreateFurnitureForm from "./CreateFurnitureForm";
import "./FurnitureList.css";

const FurnitureList = (props) => {
  const [furniture, setFurniture] = useState([]);
  const [refresh, setRefresh] = useState(true);

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
    <>
      <h1>Liste aller Möbel</h1>
      <main className="category-container">
        <FurnitureItem data={furniture} />
        <CreateFurnitureForm setRefresh={setRefresh} />
      </main>
    </>
  );
};

export default FurnitureList;
