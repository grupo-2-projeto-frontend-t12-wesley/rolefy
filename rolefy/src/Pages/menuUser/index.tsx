import { Conteiner } from "./styled";

import ButtonNav from "../../components/ButtonNav";
import { useContext } from "react";
import { IuserInfo, LoginContext } from "../../context/Login";
import { useForm } from "react-hook-form";
import api from "../../services/api";

function MenuUser() {
  const { userData } = useContext(LoginContext);

  let user = userData;

  const { register, handleSubmit } = useForm<IuserInfo>();

  function updateUser(newUser: IuserInfo) {
    newUser.name !== "" ? (user.name = newUser.name) : false;
    newUser.image !== "" ? (user.image = newUser.image) : false;

    api.patch("users/4", user).then((response) => {
      const { name, image } = response.data;

      const userInfo: IuserInfo = { name, image };

      localStorage.setItem("@userInfo", JSON.stringify(userInfo));
    });
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
