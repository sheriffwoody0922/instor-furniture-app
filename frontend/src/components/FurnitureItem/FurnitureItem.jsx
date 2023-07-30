// Importiere die 'useEffect' und 'useState'-Hooks aus 'react', um den Zustand in der Komponente zu verwalten
import { useEffect, useState } from "react";

// Importiere die Komponenten 'BackButton' und 'EditBtn' aus den entsprechenden Dateien
import BackButton from "../BackButton/BackButton";
import EditBtn from "../EditBtn/EditBtn";

// Importiere die CSS-Datei für das Styling der Komponente
import "./FurnitureItem.css";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import AddBtn from "../AddBtn/AddBtn";

// Definiere die React-Komponente 'FurnitureItem'
const FurnitureItem = ({
  data,
  refresh,
  setRefresh,
  queryKey,
  categoryName,
  setQueryKey,
  setCategoryName,
}) => {
  // Verwende die 'useState'-Hook, um den Zustand 'furnitureData' zu initialisieren
  // mit dem anfänglichen Wert 'props.data', das die Möbelstück-Daten enthält
  const [furnitureData, setFurnitureData] = useState(data);

  const [userId, setUserId] = useState("64c26f431bef911903662774");

  // Verwende die 'useEffect'-Hook, um den Zustand 'furnitureData' zu aktualisieren,
  // wenn sich die Prop 'props.data' ändert
  useEffect(() => {
    setFurnitureData(data);
  }, [data]);

  return (
    <>
      {/* Abschnitt für das Anzeigen eines einzelnen Möbelstücks */}
      <section className="furniture-item-container">
        {furnitureData?.map((furniture) => (
          // Div-Element für ein einzelnes Möbelstück mit der eindeutigen 'key' basierend auf der 'furniture._id'
          <div key={furniture._id} className="furniture-item">
            <div className="item-img-container">
              {/* Bild des Möbelstücks, die URL wird aus 'furniture.image.url' geholt */}
              <img src={furniture.image.url} alt={furniture.name} />
            </div>
            <div className="descr-container">
              <div className="header-container">
                {/* Titel des Möbelstücks */}
                <h2>{furniture.title}</h2>
              </div>
              {/* Raum des Möbelstücks */}
              <h3>{furniture.room}</h3>
              <h3>Beschreibung</h3>
              {/* Beschreibung des Möbelstücks */}
              <p>{furniture.description}</p>
              {/* Größe des Möbelstücks */}
              <p>Größe: {furniture.size}</p>
            </div>
            <div className="button-container">
              {/* Komponente 'EditBtn', die den 'Edit'-Button darstellt, um das Möbelstück zu bearbeiten */}
              <EditBtn furnitureId={furniture._id} />
              {/* Komponente 'DeleteBtn', die den 'Delete'-Button darstellt, um das Möbelstück zu bearbeiten */}

              <DeleteBtn
                furnitureId={furniture._id}
                setRefresh={setRefresh}
                refresh={refresh}
                queryKey={queryKey}
                categoryName={categoryName}
                setQueryKey={setQueryKey}
                setCategoryName={setCategoryName}
              />
              <AddBtn furnitureID={furniture._id} userId={userId} />
            </div>
          </div>
        ))}
        {/* Komponente 'BackButton', die den 'Back'-Button darstellt, um zur vorherigen Seite zurückzukehren */}
        <BackButton />
      </section>
    </>
  );
};

// Exportiere die 'FurnitureItem'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default FurnitureItem;
