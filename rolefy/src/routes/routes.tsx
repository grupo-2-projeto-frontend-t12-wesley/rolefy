import { Route, Routes } from "react-router-dom";
import Chat from "../Pages/chat";
import ChatCompany from "../Pages/chatCompany";
import Favorite from "../Pages/favorite";
import Login from "../Pages/Login";
import MainPage from "../Pages/mainPage";
import MenuConfig from "../Pages/menuConfig";
import MenuEmpresa from "../Pages/menuEmpresa";
import MenuUser from "../Pages/menuUser";
import Message from "../Pages/message";
import Register from "../Pages/register";


function RoutsMap() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/isLoged" element={<MainPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/message" element={<Message />} />
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="/chatCompany/:id" element={<ChatCompany />} />
      <Route path="/configPage" element={<MenuConfig />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/empresa" element={<MenuEmpresa />} />
<<<<<<< HEAD


      
=======
      <Route path="/editUser" element={<MenuUser />} />
>>>>>>> 483e6bb5e8779ba31ded19e000924731d7688355
    </Routes>
  );
}
export default RoutsMap;


