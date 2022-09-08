import styled from "styled-components";

export const Conteiner = styled.div`
  color: white;

  font-size: 1.3rem;

  form {
    display: flex;
    flex-direction: column;

    width: 80%;
    margin: 2rem auto;
  }

  .return {
    position: absolute;
    top: 1rem;
    left: 1rem;

    font-size: 3rem;

    background-color: transparent;
    border: 0px;
    color: white;
  }
  label{
    margin: 0 auto;
    margin-top: 20px;
  }
  input{
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

  .saveChanges{
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
    margin-top: 40px;
  }
`;
