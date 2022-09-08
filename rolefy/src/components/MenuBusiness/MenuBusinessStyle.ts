import styled from "styled-components";



export const Header = styled.header`
   display: flex;
   align-items: center;
    justify-content: space-between;

    margin: 3.563rem 0rem 2.463rem 0rem;
    width: 100%;
    height: 10%;
    background-color: rgba(71, 67, 67, 0.5);;

    figure{
        margin-left: 1rem;
        display: flex;
        background-color: gray;
        border-radius: 3.563rem;
        width: 3.563rem;
        height: 3.563rem;
    }
    img{
        border-radius: 3.563rem;
        width: 100%;
    }
    h2{
        margin-right: 1rem;
        color: rgba(123, 66, 94, 0.85);
    }

    @media (min-width: 573px){
        figure{
            margin-left: 3rem;
    }
    h2{
        margin-right: 3rem;
        color: #FFFF;
    } 
    }

`;