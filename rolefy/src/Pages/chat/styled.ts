import styled from "styled-components";

export const Conteiner = styled.div`
  color: white;

  .Message {
    display: flex;
    background-color: aqua;
   
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
    background-color: rgba(232, 232, 223);
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
    margin: 0 auto;
    margin-top: 30px;
    background-color: rgba(232, 232, 223);
    width: 95vw;
    min-height: 75vh;
    max-height: 75vh;
    overflow: scroll;
    border-radius: 25px 25px 0px 0px;
    padding-bottom: 20px;
  }

  form {
    display: flex;
    justify-content: center;
    width: 95vw;
    margin: 0 auto;
    border: none;
    height: 35px;

    input {
      width: 80%;
      height: 2rem;
      border: none;
      border-radius: 0px 0px 0px 25px;
      padding-left: 15px;
    }
    button {
      width: 20%;
      border-radius: 0px 0px 25px 0px;
      background-color: green;
      border: 0px;
      height: 32.45px;
      color: white;
    }
  }
`;
