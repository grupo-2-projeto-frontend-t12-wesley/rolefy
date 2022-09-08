import { IoChatbubbles, IoHomeSharp } from "react-icons/io5";
import { BsGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Conteiner } from "./styled";
import { AiFillStar } from "react-icons/ai";

function ButtonNav() {
  const navigate = useNavigate();

  return (
    <Conteiner>
      <nav>
        <button className="message">
          <AiFillStar className="home" />
        </button>

        <button className="message">
          <IoHomeSharp className="home" onClick={() => navigate(`/isLoged`)} />
        </button>

        <button onClick={() => navigate(`/message`)} className="message">
          <IoChatbubbles />
        </button>

        <button onClick={() => navigate("/configPage")} className="message">
          <BsGearFill />
        </button>
      </nav>
    </Conteiner>
  );
}

export default ButtonNav;
