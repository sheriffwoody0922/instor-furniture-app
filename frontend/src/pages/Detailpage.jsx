import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateBtn from "../components/UpdateBtn";
import "./DetailPage.css";
import BackButton from "../components/BackButton";
const Detailpage = () => {
  const params = useParams();
  const idFurniture = params.id;
  const [furniture, setFurniture] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/api/furniture/${idFurniture}`);
  //     setFurniture(data);
  //   };
  //   fetchData();
  // }, []);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/furniture/${idFurniture}`);
      setFurniture(data);
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      <Header />
      <h1>Details</h1>
      <section className="details-container">
        <div className="img-outer-container">
          <div
            className="img-with-update-container"
            style={{ backgroundImage: `url(${furniture.image?.url})` }}
          >
            <UpdateBtn
              itemKeyName={"img"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
        </div>
        <div className="text-outer-container">
          <div className="title-with-update-container">
            <h1>{furniture.title}</h1>
            <UpdateBtn
              itemKeyName={"title"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
          <div className="room-with-update-container">
            <p>Zimmer: {furniture.room}</p>
            <UpdateBtn
              itemKeyName={"room"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
          <div className="description-with-update-container">
            <p>Beschreibung: {furniture.description}</p>
            <UpdateBtn
              itemKeyName={"description"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
          <div className="size-with-update-container">
            <p>Größe: {furniture.size}</p>
            <UpdateBtn
              itemKeyName={"size"}
              id={idFurniture}
              setRefresh={setRefresh}
            />
          </div>
        </div>
      </section>
      <BackButton />
    </>
  );
};

export default Detailpage;
