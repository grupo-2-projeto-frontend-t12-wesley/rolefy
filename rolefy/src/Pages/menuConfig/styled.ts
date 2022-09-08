import styled from "styled-components";

export const Conteiner = styled.div`
  font-size: 1.7rem;
  color: white;
  margin: 0px;

  .return {
    font-size: 2rem;
    color: white;
    position: absolute;
    top: 15px;
    left: 15px;
    border: 0px;
    padding: 0px;
    background-color: transparent;
  }

  .conteinerInfo {
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 1px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    margin: 0 auto;
    position: absolute;
    top: 20vh;
  }

  .buttonNav{
    border: none;
    background-color: transparent;;
  }

  .nomeDoBtn{
    color: white;
    width: 40vw;
    height: 10vh;
    border: none;
    font-size: 24px;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nomeDoBtn:hover{
    transition: 0.5s;
    width: 50vw;
    color: white;
    border: none;
    border-bottom: 2px solid white;
  }

  @media (min-width: 768px) {

      .nomeDoBtn{
    color: black;
    width: 10vw;
    height: 10vh;
    border: none;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nomeDoBtn:hover{
    transition: 0.5s;
    width: 15vw;
    color: white;
    border: none;
    border-bottom: 2px solid white;
  }
  }
`;
