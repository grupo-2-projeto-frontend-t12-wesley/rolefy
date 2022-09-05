import styled from 'styled-components';

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    
    
    .containerBtn{
            width:95%;
            gap: 0.078rem;
    }

    .BtnImg, .BtnRate, .BtnInfo{
        background-color: #D9D9D9;
        padding : 0.625rem;
        font-size: 1rem;
        border: #D9D9D9;
    }

    .BtnImg:focus, .BtnRate:focus, .BtnInfo:focus{
        background-color: #2B272D;
        border: #2B272D;
        color: #FFFF;
    }
    
    .BtnImg:hover, .BtnRate:hover, .BtnInfo:hover{
        background-color: #2B272D;
        border: #2B272D;
        color: #FFFF;
    }

    .BtnImg{
        border-radius: 15.682rem 0rem 0rem 15.682rem;
        
    }
    .BtnRate{
        
    }
    .BtnInfo{
        border-radius: 0rem 15.682rem 15.682rem 0rem;
        
    }


    .containerBtn{
        display: flex;

    }
    .imagensOn{
        width: 20px;
        height: 20px;
        background-color: red;
    }
    .imagensOff{
        display: none;
    }

    .rateOn{
        width: 20px;
        height: 20px;
        background-color: green;
    }
    .rateOff{
        display: none;
    }

    .infoOn{
        width: 20px;
        height: 20px;
        background-color: blue;
    }
    .infoOff{
        display: none;
    }
`;

