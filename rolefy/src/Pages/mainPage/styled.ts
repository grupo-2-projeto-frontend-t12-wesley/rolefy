import styled from "styled-components";

export const Conteiner = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=B612+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200;300;400;500;600;700;800&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  svg {
    font-size: 3rem;

    color: #4545a0;
  }

  .message {
    border: 0px;
    background-color: transparent;
  }
  .DivConteiner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    .keen-slider {
      width: 92vw;
      max-width: 1000px;
      height: 60vh;
    }
  }

  .fotoDoRestaurante {
    height: 50vh;
    width: 100vw;
  }

  .keen-slider__slide {
    border-radius: 25px;
    background-color: #59485e;
    border: 5px solid #5ac49a;
  }

  .nomeDoRestaurante {
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    font-size: 24px;
    width: 220px;
    font-weight: 100;
    margin-top: 20px;
  }

  .dadosDoRestaurante {
    display: flex;
    margin-left: 10px;
  }

  .favorite {
    background-color: transparent;
    border: 0px;

    position: absolute;
    top: 1rem;
    right: 2.5rem;

    cursor: pointer;
  }

  .chatButton {
    background-color: transparent;
    border: 0px;

    position: absolute;

    right: 3rem;
  }
`;
