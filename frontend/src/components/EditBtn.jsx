import { NavLink } from "react-router-dom";

const EditBtn = (props) => {
  return (
    <>
      <NavLink to={`/furniture/${props.furnitureId}`}>
        <button>Edit</button>
      </NavLink>
    </>
  );
};

export default EditBtn;
