import styled from "styled-components";

export const Conteiner = styled.div`
  color: white;
  .return {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 3rem;
    background-color: transparent;
    border: 0px;
    color: white;
  }

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
    }
  }

  .anotherUser {
    align-items: flex-start;
    background-color: rgba(232, 232, 223);
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
    overflow: auto;
    border-radius: 25px 25px 0px 0px;
    padding-bottom: 20px;
  }

  .chat::-webkit-scrollbar {
    width: 8px;
  }

  .chat::-webkit-scrollbar-thumb {
    background-color: gray; 
    border-radius: 60px; 
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
    button:hover{
      transition: 0.5s;
      background-color: #5aad73;
    }
  }

  @media (min-width: 768px) {
    .chat {
    margin: 0 auto;
    margin-top: 30px;
    background-color: rgba(232, 232, 223);
    width: 50vw;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
    border-radius: 25px 25px 0px 0px;
    padding-bottom: 20px;
  } 
  form {
    display: flex;
    justify-content: center;
    width: 50vw;
    margin: 0 auto;
    border: none;
    height: 35px;
  }
}
`
