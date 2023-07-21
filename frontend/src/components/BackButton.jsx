import { useNavigate } from "react-router-dom";
import btnImg from "../assets/backbtn.png"


const BackButton = () => {
    
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }

    return ( 
        <div>
            <button onClick={goBack} className="BackBtn"><img src={btnImg} alt="Back" /></button>
        </div>
     );
}
 
export default BackButton;