import styled from "styled-components";

export const Conteiner = styled.div`
  color: white;

  .Message {
    display: flex;

    background-color: aqua;

    border: 1px solid black;

    p {
      max-width: 50vw;

      padding: 0.8rem;
      background-color: white;
      border: 1px solid black;
      color: black;

      margin: 0.5rem;

      word-wrap: break-word;
    }
  }

  .ownMessage {
    flex-direction: column;

    align-items: flex-end;

    p {
      border-radius: 1rem 1rem 0rem 1rem;

      direction: rtl;
    }
  }

  .anotherUser {
    align-items: flex-start;

    p {
      border-radius: 1rem 1rem 1rem 0rem;
    }
  }

  .chat {
    background-color: rebeccapurple;

    width: 100vw;
    max-height: 80vh;

    overflow: scroll;
  }

  form {
    display: flex;
    justify-content: center;

    input {
      width: 70%;
      height: 2rem;
    }
    button {
      width: 20%;
      background-color: green;

      border: 0px;
      color: white;
    }
  }
`;
