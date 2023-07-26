import { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ setFurniture }) => {
  const [input, setInput] = useState();
  const [inputName, setInputName] = useState("size");

  const handeInput = (e) => {
    setInput(e.target.value);
    setInputName(e.target.name);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Sende eine GET-Anfrage mit 'axios' an den Endpunkt '/api/furniture'
      // und füge die Abfrage-Parameter 'size' hinzu, die aus 'props.furnituresize' stammen
      const data = await axios.get(`/api/furniture?${inputName}=${input}`);

      // Aktualisiere den Zustand 'furniture' mit den Daten aus der Antwort
      setFurniture(data.data);
    };
    fetchData();
  }, [input]);

  return (
    <>
      <input
        onChange={handeInput}
        type="text"
        placeholder="Suche nach einem Title"
        name="title"
      />
      <input
        onChange={handeInput}
        type="text"
        placeholder="Suche nach einem Raum"
        name="room"
      />
      <input
        onChange={handeInput}
        type="text"
        placeholder="Suche nach einer Größe"
        name="size"
      />
    </>
  );
};

export default Search;
