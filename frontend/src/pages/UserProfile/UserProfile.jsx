import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import MyFurnitureSlider from "../../components/MyFurnitureSlider/MyFurnitureSlider";

const UserProfile = () => {
  const params = useParams();
  const userHandle = params.userHandle;
  const [userData, setUserData] = useState([]);

  // Verwende die 'useEffect'-Hook, um die Daten des Möbelstücks mit der angegebenen 'idFurniture' aus der API abzurufen
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/user/${userHandle}`);
      setUserData(data);
    };
    fetchData();
  }, [userHandle]);
  return (
    <>
      <Header />
      <section className="header-container-user">
        <div
          className="user-img-container"
          style={{ backgroundImage: `url(${userData.image?.url})` }}
        ></div>

        <div className="user-txt-container">
          <h1>{userData.userHandle}</h1>
          <p>{userData.description}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      </section>
      <main>
        <MyFurnitureSlider userData={userData} />
      </main>
    </>
  );
};

export default UserProfile;
