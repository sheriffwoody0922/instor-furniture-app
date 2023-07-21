import axios from "axios";
import { useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem";

const FurnitureList = (props) => {
  const [furniture, setFurniture] = useState([]);
  useEffect(() => {
    axios.get(`/api/furniture?size=${props.furnituresize}`).then((res) => {
      setFurniture(res.data);
    });
  }, []);

  return (
    <>
      <h1>Liste aller Möbel</h1>
      <FurnitureItem data={furniture} />
    </>
  );
};

export default FurnitureList;
