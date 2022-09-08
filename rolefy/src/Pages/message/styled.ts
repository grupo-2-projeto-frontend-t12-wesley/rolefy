import styled from "styled-components";

export const Conteiner = styled.div`
  color: black;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 3rem;

    color: #4545a0;
  }
  h1 {
    color: #fff;
    margin: 1em;
  }
  .backButton {
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
    background-color: transparent;
    margin: 2em;
    border: 0px;
    color: white;
    cursor: pointer;
  }
  .backButton:hover {
    transform: scale(1.2);
  }
  .message {
    border: 0px;
    background-color: transparent;
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;

    width: 100%;

    color: black;

    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .messageConteiner {
      background-color: white;
      padding: 0.5rem;
      border-radius: 12px;
      display: flex;
      width: 90%;

      figure {
        width: 30%;
      }

      img {
        width: 100%;
      }

      .infoMessage {
        padding-left: 0.8rem;

        width: 60vw;

        word-wrap: break-word;
      }
      .infoMessage:first-of-type {
        font-weight: bold;
      }
      .comment {
        margin-top: 0.3rem;
      }
    }
  }
`;
