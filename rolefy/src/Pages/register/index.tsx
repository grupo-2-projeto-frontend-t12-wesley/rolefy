import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { OnSubmitRegisterProps, RegisterContext } from "../../context/Register";
import { formSchema } from "../../context/Register/validator";
import { RegisterStyle } from "./RegisterStyled";

function Register() {
  const { onSubmitFunction } = useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnSubmitRegisterProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterStyle>
      <form onSubmit={handleSubmit(onSubmitFunction)} className="formCadastro">
        <input
          type="text"
          placeholder="Nome"
          className="Nome"
          {...register("name")}
        /> 
        <span>{errors?.name?.message}</span>
        <input
          type="text"
          placeholder="E-mail"
          className="email"
          {...register("email")}
        />
        <span>{errors?.email?.message}</span>
        <input
          type="text"
          placeholder="Senha"
          className="password"
          {...register("password")}
        />
        <span>{errors?.password?.message}</span>
        <input
          type="text"
          placeholder="Cep"
          className="image"
          {...register("cep")}
        />
        <span>{errors?.cep?.message}</span>
        <input
          type="text"
          placeholder="Url da Foto de perfil"
          className="imagem"
          {...register("image")}
        />
        <span>{errors?.image?.message}</span>
        <button
          type="submit"
          placeholder="botaoSubmitCad"
          className="btnEnviar"
        >
          Submit
        </button>
      </form>
    </RegisterStyle>
  );
}

export default Register;
