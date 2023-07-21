import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Detailpage = () => {
  const params = useParams();
  const idFurniture = params.id;
  const [furniture, setFurniture] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/furniture/${idFurniture}`);
      setFurniture(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <h1>Details</h1>
      <img src={furniture.image?.url} alt="" />
      <h1>{furniture.title}</h1>
      <p>{furniture.room}</p>
      <p>{furniture.description}</p>
      <p>{furniture.size}</p>
    </>
  );
};

export default Detailpage;
