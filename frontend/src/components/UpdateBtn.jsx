import { useState } from "react";
import axios from "axios";

const UpdateBtn = ({ itemKeyName, setRefresh, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTxt, setNewTxt] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const startUpdating = async () => {
    try {
      if (itemKeyName === "img" && selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);
        await imgUpdating(formData);
      } else if (itemKeyName !== "img") {
        await textUpdating();
      }

      setIsEditing(false);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const imgUpdating = async (formData) => {
    try {
      await axios.put(`/api/updateFurniture/${id}`, formData);
    } catch (error) {
      console.log(error);
    }
  };

  const textUpdating = async () => {
    try {
      const response = await axios.put(`/api/updateFurniture/${id}`, {
        [itemKeyName]: newTxt,
      });

      console.log("Update response:", response.data);
    } catch (error) {
      console.log("Error updating furniture:", error);
    }
  };

  if (isEditing) {
    if (
      itemKeyName === "title" ||
      itemKeyName === "room" ||
      itemKeyName === "size"
    ) {
      return (
        <>
          <input
            type="text"
            name={itemKeyName}
            value={newTxt}
            onChange={(e) => setNewTxt(e.target.value)}
          />
          <button onClick={startUpdating}>Änderungen speichern</button>
          <button onClick={() => setIsEditing(false)}>Abbrechen</button>
        </>
      );
    } else if (itemKeyName === "description") {
      return (
        <>
          <textarea
            name={itemKeyName}
            value={newTxt}
            onChange={(e) => setNewTxt(e.target.value)}
            placeholder="Bitte gebe den neuen Content ein"
          />
          <button onClick={startUpdating}>Änderungen speichern</button>
          <button onClick={() => setIsEditing(false)}>Abbrechen</button>
        </>
      );
    } else if (itemKeyName === "img") {
      return (
        <>
          <div className="update-furniture-form-container">
            <form className="create-post-form-container">
              <input
                type="file"
                placeholder="Image"
                name="image"
                required
                onChange={handleFileInputChange}
              />
              <button type="button" onClick={startUpdating}>
                Änderungen speichern
              </button>
            </form>
            <button onClick={() => setIsEditing(false)}>Abbrechen</button>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
};

export default UpdateBtn;
