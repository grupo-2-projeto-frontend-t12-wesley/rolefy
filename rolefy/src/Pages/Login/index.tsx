import { useContext, useEffect } from "react";
import { ButonLogin } from "../../components/buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContext, OnSubmitLoginProps } from "../../context/Login";
import { formSchemaLogin } from "../../context/Login/validator";
import { useNavigate } from "react-router-dom";
import { LoginStyle } from "./login";
import img from "./logo.png";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnSubmitLoginProps>({
    resolver: yupResolver(formSchemaLogin),
  });
  const { onSubmitLogin } = useContext(LoginContext);
  useEffect(() => {
    if (localStorage.getItem("@token")) {
      navigate("/isLoged");
    }
  }, []);
  return (
    <LoginStyle>
      <div className="logotipo">
        <h1 className="letreiroLogo">Rolê</h1>
        <img src={img} alt="Logotipo" className="fy" />
      </div>
      <p className="menssagem">O match certo para seu rolê!</p>
      <form className="formularioLogin" onSubmit={handleSubmit(onSubmitLogin)}>
        <h2 className="tipoDeFormulario">Login</h2>

        <input
          type="text"
          placeholder="E-mail..."
          className="emailInput"
          {...register("email")}
        />

        <span className="coloqueSeusDados">
          {errors.email && errors.email.message}
        </span>

        <input
          type="password"
          placeholder="Senha..."
          className="senhaInput"
          {...register("password")}
        />

        <span className="coloqueSeusDados">
          {errors.password && errors.password.message}
        </span>
        <ButonLogin classname="botaoLogin" />
      </form>
      <p className="menssagemDeCadastresse">
        ainda não sabe onde achar seu role?
      </p>
      <button onClick={() => navigate("/register")} className="registrese">
        Registre-se
      </button>
    </LoginStyle>
  );
}
export default Login;
