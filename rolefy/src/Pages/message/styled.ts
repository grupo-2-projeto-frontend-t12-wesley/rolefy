import styled from "styled-components";

export const Conteiner = styled.div`
  color: black;

  svg {
    font-size: 3rem;

    color: #4545a0;
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

    .messageConteiner {
      background-color: white;
      padding: 0.5rem;

      display: flex;

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

      .comment {
        margin-top: 0.3rem;

        background-color: rebeccapurple;
      }
    }
  }
`;
