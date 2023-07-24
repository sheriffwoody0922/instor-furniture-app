import axios from "axios";
import { useState } from "react";
import "./CreateFurnitureForm.css";

const CreateFurnitureForm = ({ setRefresh }) => {
  const [creatingNewItem, setCreatingNewItem] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await axios.post("/api/addFurniture", formData);
    setRefresh((prev) => !prev);
    console.log(response);
    e.target.reset();
  };

  if (creatingNewItem) {
    // Ist der Bearbeitungsmodus aktiviert ändert sich das Aussehen der Komponente
    return (
      <>
        <form onSubmit={handleSubmit} className="new-furniture-form-container">
          <h2 className="add-title">ADD NEW ITEM</h2>
          <input type="text" placeholder="TITLE" name="title" required />
          <input type="text" placeholder="ROOM" name="room" required />
          <input type="text" placeholder="SIZE" name="size" required />
          <input type="file" placeholder="IMAGE" name="image" required />
          <textarea
            className="add-text-input-field"
            placeholder="ADD TEXT"
            name="description"
            required
          />
          <button className="submit-btn" type="submit">
            PUBLISH
          </button>
          <button
            className="abort-btn"
            onClick={() => setCreatingNewItem(false)}
            type="button"
          >
            X
          </button>
        </form>
      </>
    );
  } else {
    // Im Anzeigemodus, der standardgemäß geladen wird, wenn die JSX Komponente geladen wurde
    return (
      <>
        <button
          className="add-new-item-btn"
          onClick={() => setCreatingNewItem(true)}
        >
          Add Something
        </button>
      </>
    );
  }
};
export default CreateFurnitureForm;
