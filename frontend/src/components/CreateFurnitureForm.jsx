import axios from "axios";
import { useState } from "react";

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
          <input type="text" placeholder="Title" name="title" required />
          <input type="text" placeholder="Room" name="room" required />
          <input type="text" placeholder="Size" name="size" required />
          <input type="file" placeholder="Image" name="image" required />
          <textarea
            rows="4"
            cols="50"
            placeholder="Content"
            name="description"
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setCreatingNewItem(false)}>Cancel</button>
      </>
    );
  } else {
    // Im Anzeigemodus, der standardgemäß geladen wird, wenn die JSX Komponente geladen wurde
    return (
      <>
        <button onClick={() => setCreatingNewItem(true)}>Add new Item</button>
      </>
    );
  }
};
export default CreateFurnitureForm;
