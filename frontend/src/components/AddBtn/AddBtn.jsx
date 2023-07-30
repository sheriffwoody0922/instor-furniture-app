import { useEffect, useState } from "react";
import button from "../../assets/button.png";
import "./AddBtn.css";
import axios from "axios";

const AddBtn = (props) => {
  const [furnitureId, setFurnitureId] = useState();
  const [userId, setUserId] = useState();

  const addItemToUser = async () => {
    const furnitureId = props.furnitureID;
    const userId = props.userId;

    const updateUserItems = await axios.put(
      `/api/addFurnitureToUser/${props.userId}`,
      { _id: userId, inventoryId: furnitureId }
    );
  };

  useEffect(() => {
    setFurnitureId(props.furnitureID);
    setUserId(props.userId);
  }, [props]);

  return (
    <>
      <button className="add-to-wishlist-btn" onClick={addItemToUser}>
        <img src={button} alt={furnitureId} />
      </button>
    </>
  );
};

export default AddBtn;
