import { useEffect, useState, useContext } from "react";
import addbutton from "../../assets/addbtn.svg";
import "./AddBtn.css";
import axios from "axios";
import { SignUpedUserId } from "../../context/Context";

const AddBtn = (props) => {
  const [furnitureId, setFurnitureId] = useState();
  const [userId, setUserId] = useState();
  const { loginUserId, setLoginUserId } = useContext(SignUpedUserId);

  const addItemToUser = async () => {
    const furnitureId = props.furnitureID;
    const userId = props.userId;

    const updateUserItems = await axios.put(
      `/api/addFurnitureToUser/${loginUserId}`,
      { _id: loginUserId, inventoryId: furnitureId }
    );
  };

  useEffect(() => {
    setFurnitureId(props.furnitureID);
  }, [props]);

  return (
    <>
      <button className="add-to-wishlist-btn" onClick={addItemToUser}>
        <img src={addbutton} alt={furnitureId} />
      </button>
    </>
  );
};

export default AddBtn;
