import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";

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
  }, []);

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
        <section className="big-stuff-container">
          <h2>BigStuff</h2>
        </section>
        <section className="middle-stuff-container">
          <h2>MiddleStuff</h2>
        </section>
        <section className="small-stuff-container">
          <h2>SmallStuff</h2>
        </section>
      </main>
    </>
  );
};

export default UserProfile;
