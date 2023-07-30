import React, { useState, useEffect } from "react";
import axios from "axios";

const MyFurnitureSlider = (props) => {
  const userInventory = props.userData.inventory;
  const [smallStuffData, setSmallStuffData] = useState([]);
  const [middleStuffData, setMiddleStuffData] = useState([]);
  const [bigStuffData, setBigStuffData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof userInventory !== "undefined") {
          const promises = userInventory.map(async (element) => {
            const { data } = await axios.get(`/api/furniture/${element}`);
            return data;
          });
          console.log(promises);
          const userFurnitureData = await Promise.all(promises);
          const smallFurniture = userFurnitureData.filter(
            (item) => item.size === "klein"
          );
          const mediumFurniture = userFurnitureData.filter(
            (item) => item.size === "mittel"
          );
          const largeFurniture = userFurnitureData.filter(
            (item) => item.size === "gross"
          );

          setSmallStuffData(smallFurniture);
          setMiddleStuffData(mediumFurniture);
          setBigStuffData(largeFurniture);
          setLoading(false);
        } else {
          return <div>Keine Daten gespeichert</div>;
        }
      } catch (error) {
        console.error("Error fetching furniture data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userInventory]);

  //   NACHEINANDER
  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         if (typeof userInventory !== "undefined") {
  //           const smallFurniture = [];
  //           const mediumFurniture = [];
  //           const largeFurniture = [];

  //           for (const element of userInventory) {
  //             const { data } = await axios.get(`/api/furniture/${element}`);

  //             // Hier werden die Möbelstücke entsprechend ihrer Größe in die jeweiligen Arrays sortiert.
  //             if (data.size === "klein") {
  //               smallFurniture.push(data);
  //             } else if (data.size === "mittel") {
  //               mediumFurniture.push(data);
  //             } else if (data.size === "gross") {
  //               largeFurniture.push(data);
  //             }
  //           }

  //           setSmallStuffData(smallFurniture);
  //           setMiddleStuffData(mediumFurniture);
  //           setBigStuffData(largeFurniture);
  //           setLoading(false);
  //         } else {
  //           return <div>Keine Daten gespeichert</div>;
  //         }
  //       } catch (error) {
  //         console.error("Error fetching furniture data:", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [userInventory]);

  // Check if data is still loading
  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator you prefer
  }

  return (
    <div>
      <div>
        <h2>Small Furniture:</h2>
        {smallStuffData.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            {/* Render other properties of the small furniture item */}
          </div>
        ))}
      </div>
      <div>
        <h2>Medium Furniture:</h2>
        {middleStuffData.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            {/* Render other properties of the medium furniture item */}
          </div>
        ))}
      </div>
      <div>
        <h2>Large Furniture:</h2>
        {bigStuffData.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            {/* Render other properties of the large furniture item */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFurnitureSlider;
