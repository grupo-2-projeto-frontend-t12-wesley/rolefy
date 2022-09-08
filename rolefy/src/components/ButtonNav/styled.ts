import styled from "styled-components";

export const Conteiner = styled.div`
  position: absolute;
  top: 85vh;

  nav {

    width: 100vw;
    gap: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* justify-content: space-evenly; */
  }

  svg {
    font-size: 3rem;

    color: #4545a0;
  }

  svg:hover {
    font-size: 3rem;
    transition: 0.5s;
    color: #8773f0;
  }
  .message {
    border: 0px;
    background-color: transparent;
    cursor: pointer;
  }

  
`;
