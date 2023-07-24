import { NavLink } from "react-router-dom";

const EditBtn = (props) => {
  return (
    <>
      <NavLink to={`/furniture/${props.furnitureId}`}>
        <button className="edit-btn">Edit</button>
      </NavLink>
    </>
  );
};

export default EditBtn;
