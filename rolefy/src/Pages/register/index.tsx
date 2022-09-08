import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { OnSubmitRegisterProps, RegisterContext } from "../../context/Register";
import { formSchema } from "../../context/Register/validator";
import { RegisterStyle } from "./RegisterStyled";
import img from "./logo.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Register() {
  const { onSubmitFunction } = useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnSubmitRegisterProps>({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();
  return (
    <RegisterStyle>
      <div className="header">
        <button onClick={() => navigate("/")} className="voltar">
          <AiOutlineArrowLeft /> Voltar
        </button>
        <div className="logotipo">
          <h1 className="letreiroLogo">Rolê</h1>
          <img src={img} alt="Logotipo" className="fy" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunction)} className="formCadastro">
        <input
          type="text"
          placeholder="Nome"
          className="inpCad"
          {...register("name")}
        />
        <span className="coloqueSeusDados">{errors?.name?.message}</span>
        <input
          type="text"
          placeholder="E-mail"
          className="inpCad"
          {...register("email")}
        />
        <span className="coloqueSeusDados">{errors?.email?.message}</span>
        <input
          type="text"
          placeholder="inpCad"
          className="inpCad"
          {...register("password")}
        />
        <span className="coloqueSeusDados">{errors?.password?.message}</span>
        <input
          type="text"
          placeholder="Cep"
          className="inpCad"
          {...register("cep")}
        />
        <span className="coloqueSeusDados">{errors?.cep?.message}</span>
        <input
          type="text"
          placeholder="Url da Foto de perfil"
          className="inpCad"
          {...register("image")}
        />
        <span className="coloqueSeusDados">{errors?.image?.message}</span>
        <button type="submit" placeholder="botaoSubmitCad" className="btnCad">
          Cadastrar
        </button>
      </form>
    </RegisterStyle>
  );
}

export default Register;
