import { useEffect } from "react";
import axios from "axios";

const AddBtn = (props) => {
  const addItemToUser = async () => {
    const furnitureId = props.furnitureID;
    const userId = props.userId;

    const updateUserItems = await axios.put(
      `/api/addFurnitureToUser/${props.userId}`,
      { _id: userId, inventoryId: furnitureId }
    );
  };
  return (
    <>
      <button onClick={addItemToUser}>Wishlist</button>
    </>
  );
};

export default AddBtn;
