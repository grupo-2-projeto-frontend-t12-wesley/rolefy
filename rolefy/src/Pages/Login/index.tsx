import React, { useContext, useEffect } from "react";
import { ButonLogin } from "../../components/buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContext, OnSubmitLoginProps } from "../../context/Login";
import { formSchemaLogin } from "../../context/Login/validator";
import { useNavigate } from "react-router-dom";

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
    <div className="App">
      <h1>RoleFY</h1>
      <p>O match certo para seu rolê!</p>
      <form className="formularioLogin" onSubmit={handleSubmit(onSubmitLogin)}>
        <input
          type="text"
          placeholder="E-mail..."
          className="emailInput"
          {...register("email")}
        />
        <span>{errors.email && errors.email.message}</span>
        <input
          type="password"
          placeholder="Senha..."
          className="senhaInput"
          {...register("password")}
        />
        <span>{errors.password && errors.password.message}</span>
        <ButonLogin classname="botaoLogin" />
      </form>
      <p>ainda não sabe onde achar seu role?</p>
      <button onClick={() => navigate("/register")}>Registre-se</button>
    </div>
  );
}
export default Login;
