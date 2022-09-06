import { Conteiner } from "./styled";

import ButtonNav from "../../components/ButtonNav";
import { useEffect, useState } from "react";
import { iPlaces, IuserInfo } from "../../context/Login";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import toast from "react-hot-toast";

function MenuUser() {
  const [userData, SetUserData] = useState({} as iPlaces);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    api.get<iPlaces>(`/users/${idUser}`).then((response) => {
      SetUserData(response.data);
    });
  }, [update]);

  const { register, handleSubmit } = useForm<IuserInfo>();

  const idUser = localStorage.getItem("@idUser");

  function updateUser(newUser: IuserInfo) {
    newUser.name == "" ? (newUser.name = userData.name) : false;
    newUser.image == "" ? (newUser.image = userData.image) : false;

    api
      .patch(`users/${idUser}`, newUser)
      .then((response) => {
        const { name, image } = response.data;

        const userInfo: IuserInfo = { name, image };

        localStorage.setItem("@userInfo", JSON.stringify(userInfo));
        toast.success("Sucesso!!!");
        setUpdate((resp) => !resp);
      })
      .catch((err) => toast.error("Erro!!!"));
  }

  return (
    <Conteiner>
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

        <button>Concluir</button>
      </form>
      <ButtonNav />
    </Conteiner>
  );
}

export default MenuUser;
