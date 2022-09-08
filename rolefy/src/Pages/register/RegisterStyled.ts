import styled from "styled-components";

export const RegisterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-image: linear-gradient(
    180deg,
    #0a0202 0%,
    rgba(90, 31, 91, 0.697917) 50%,
    #000000 100%
  );
  height: 100vh;
  .formCadastro {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
  .logotipo {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .fy {
    width: 140px;
    margin-top: 20px;
  }

 .header{
    display: flex;
 }

 .voltar{
    background-color: transparent;
    color: white;
    border: none;
    font-size: 20px;
    position: absolute;
    left: 10vw;
    top: 5vh;
 }
  .letreiroLogo {
    font-size: 65px;
    color: red;
    font-family: "Dosis", sans-serif;
    font-weight: 600;
    color: #34ebab;
  }
  .inpCad {
    margin: 0 auto;
    width: 70vw;
    height: 32px;
    max-width: 350px;
    background-color: #ffffff;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
    margin-top: 25px;
  }

  .btnCad {
    display: flex;
    background-color: rgba(143, 35, 87, 0.4);
    border: 3px solid rgba(224, 58, 116);
    box-shadow: 0px 1px 12px rgba(224, 58, 116);
    border: none;
    border-radius: 115px;
    width: 60vw;
    max-width: 350px;
    height: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: "Prompt", sans-serif;
    font-size: 14px;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 10px;
  }
  .coloqueSeusDados {
    margin: 0 auto;
    margin-top: 15px;
    color: red;
    font-family: "Dosis", sans-serif;
  }

`
