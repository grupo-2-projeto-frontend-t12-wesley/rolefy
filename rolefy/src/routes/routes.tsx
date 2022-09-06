import { Route, Routes } from "react-router-dom";
import ShowFavorites from "../components/Favorites";
import Chat from "../Pages/chat";
import ChatCompany from "../Pages/chatCompany";
import Login from "../Pages/Login";
import MainPage from "../Pages/mainPage";
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
      <Route path="/favourites" element={<ShowFavorites />} />
    </Routes>
  );
}
export default RoutsMap;

// ChatCompany
