import styled from "styled-components";



export const Header = styled.header`
   display: flex;
   align-items: center;
    justify-content: space-around;

    margin: 0rem 0rem 2.463rem 0rem;
    width: 100%;
    height: 10%;
    background-color: rgba(71, 67, 67, 0.5);;

    figure{
        
        background-color: gray;
        border-radius: 3.563rem;
        width: 3.563rem;
        height: 3.563rem;
    }
    h2{
        
        color: #FFFF;
    }

.return{
    position: absolute;
    left: 0vw;
    top: 0.1vh;
}
@media (min-width: 768px) {
    .return{
    position: absolute;
    left: 5vw;
    top: 0.5vh;
}
}
`;