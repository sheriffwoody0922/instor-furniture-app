import { useNavigate } from "react-router-dom";
import btnImg from "../assets/backbtn.png";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    // <div className="btn-container">
    <>
      <button onClick={goBack} className="BackBtn">
        <img src={btnImg} alt="Back" />
      </button>
    </>
  );
};

export default BackButton;
