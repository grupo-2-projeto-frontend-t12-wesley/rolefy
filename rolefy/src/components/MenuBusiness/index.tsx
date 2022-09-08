import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Header } from './MenuBusinessStyle'

function MenuBusiness() {
    const navigate = useNavigate()
    return(
        <Header>
            <button onClick={() => navigate("/configPage")} className="return">
        <AiOutlineArrowLeft />
      </button>
            <figure>
                <span className="ImageM">imagem</span>
            </figure>
            <h2>Empresas</h2>
        </Header>
    )
}


export default MenuBusiness;