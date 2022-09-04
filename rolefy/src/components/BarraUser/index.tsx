import ImageUser from '../../assets/avatar1.png'
import Logo from '../../assets/Component2.png'
import { Header } from './BarUserStyle';



function BarUser(){
    return(
        <Header>
            <figure>
                <img src={ImageUser} alt="userName" />
            </figure>
            <figure>
                <img src={Logo} alt="Rolefy" />
            </figure>
            
        </Header>
    )
};

export default BarUser;