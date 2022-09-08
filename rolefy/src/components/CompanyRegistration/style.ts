import styled from "styled-components";

export const Conteiner = styled.div`
  .conteinerInput {
    position: relative;

    width: 80%;

    margin: auto;
  }

  input {
    width: 100%;
    padding: 0.7rem;
    border: 0px;

    border-radius: 2rem;
  }

  button {
    width: 100%;
    padding: 0.7rem;

    border-radius: 2rem;
    border: 0px;

    background-color: rgba(143, 35, 87, 0.4);

    color: white;
  }

  select {
    width: 100%;
    padding: 0.7rem;

    border-radius: 2rem;
  }

  .textArea {
    width: 100%;

    height: 8rem;
    padding: 0.7rem;

    border-radius: 2rem;
  }

  form {
    margin-top: 7rem;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .erroMessage {
    position: absolute;
    top: 2.4rem;
    left: 5rem;

    color: red;
  }

  .erroMessage.textarea {
    top: 8.3rem;

    border: 0px;
  }

  p {
    color: #000;
  }
`;
