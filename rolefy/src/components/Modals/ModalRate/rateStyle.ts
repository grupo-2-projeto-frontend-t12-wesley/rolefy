import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const MdlRate = styled.div`
  width: 80%;
  height: 50%;
  background-color: red;
`;

export const CardRate = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #FFFBFB;
  border-radius: 5px;
  width: 60%;
  height: 150px;
  color: black;
  background-color: #FFFBFB;
  padding: 10px;
`;

export const StarRate = styled.h3`
    font-size: 10px;
`;

export const Commentary = styled.p`
    font-size: 10px;
`;

export const Img = styled.img`
  width: 50px;
`;
