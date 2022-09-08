import styled from "styled-components";


export const ContainerCardPlace = styled.div`

@font-face{
    font-family: Neon;
    src: url(../../../assets/NEONCLUBMUSIC/NEONCLUBMUSIC_italic.otf);
    
}
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: center;
    width: 100%;
    max-width: 414px;



`;

export const CardPlaces = styled.li`
    list-style-type: none;
    display: flex;
    width: 80%;
    height: 4.813em;
    background-color: #FFFBFB;
    border-radius: 0.421rem;
    align-items: center;
    justify-content: space-evenly;
    color: black;
    position: relative;
    
    figure{
        position: absolute;
        left: 10%;
        width: 20%;
        border-radius: 7px;
    }
        
        
    
    
    img{
        width: 100%;
        border-radius: 7px;
    }


`;

export const SuportInsideCard = styled.div`
        position: absolute;
        right: 10%;
    display: flex;
    flex-direction: column;


`;

export const BusinessName = styled.h2`
    font-size: 1rem;
    font-family: 'Neonderthaw', cursive;
    color: rgba(96, 66, 94, 0.85);
    text-shadow: 0px 0px 23px rgba(163, 87, 216, 0.85);
    font-family: Neon;
`;

export const FakeStars = styled.h2`
    font-size: 0.750rem;

`;

