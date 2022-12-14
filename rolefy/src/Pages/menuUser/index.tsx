import { Conteiner } from "./styled";
import { motion } from "framer-motion";
import ButtonNav from "../../components/ButtonNav";
import { useEffect, useState } from "react";
import { iPlaces, IuserInfo } from "../../context/Login";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function MenuUser() {
  const [userData, SetUserData] = useState({} as iPlaces);

  const navigate = useNavigate();

  useEffect(() => {
    api.get<iPlaces>(`/users/${idUser}`).then((response) => {
      SetUserData(response.data);
    });
  }, []);

  const { register, handleSubmit } = useForm<IuserInfo>();

  const idUser = localStorage.getItem("@idUser");

  function updateUser(newUser: IuserInfo) {
    newUser.name == "" ? (newUser.name = userData.name) : false;
    newUser.image == "" ? (newUser.image = userData.image) : false;

    api
      .patch(`users/${idUser}`, newUser)
      .then((response) => {
        toast.success("Sucesso!!!");
        SetUserData(response.data);
      })
      .catch((err) => toast.error("Erro!!!"));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Conteiner>
      <button className="return" onClick={() => navigate("/configPage")}>
          <AiOutlineArrowLeft />
        </button>
        <form action="" onSubmit={handleSubmit(updateUser)}>
          <label htmlFor="name">Atualizar o seu nome</label>
          <input
            type="text"
            {...register("name")}
            placeholder={userData.name}
            id="name"
          />

          <label htmlFor="image">Atualizar a sua foto de perfil</label>
          <input
            type="text"
            {...register("image")}
            placeholder={userData.image}
            id="image"
          />

          <button className="saveChanges">Concluir</button>
        </form>
        <ButtonNav />
      </Conteiner>
    </motion.div>
  );
}

export default MenuUser;
