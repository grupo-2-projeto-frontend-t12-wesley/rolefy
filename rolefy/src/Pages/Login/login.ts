import styled from "styled-components";

export const LoginStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=B612+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200;300;400;500;600;700;800&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100vh;
background-image: linear-gradient(180deg, #0A0202 0%, rgba(90, 31, 91, 0.697917) 50%, #000000 100%);

button{
    cursor: pointer;
}

.logotipo{
    width: 150px;
    display: flex;
    justify-content: center;
}
.fy{
    width: 140px;
}

.letreiroLogo{
    font-size: 65px;
    color: red;
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    color: #34ebab;

}
.coloqueSeusDados{
    color: red;
    font-family: 'Dosis', sans-serif;
}
.formularioLogin{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
}

.emailInput{
    width: 70vw;
    height: 32px;
    max-width: 350px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
    margin-top: 50px;
}

.senhaInput{
    width: 70vw;
    max-width: 350px;
    height: 32px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
}

.botaoLogin{
    display: flex;
    background-color: rgba(143, 35, 87, 0.4); 
    border: 3px solid  rgba(224, 58, 116);
    box-shadow: 0px 1px 12px  rgba(224, 58, 116);
    border: none;
    border-radius: 115px;
    width: 60vw;
    max-width: 350px;
    height: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
}

.menssagem{
    font-family: 'B612 Mono', monospace;
    color: #FFA6A6;
    font-size: 12px;
    margin-bottom: 50px;
    margin-top: 10px;
}

.tipoDeFormulario{
    font-family: 'B612 Mono', monospace;
    color: #FFA6A6;
    font-weight: 300;
}

.menssagemDeCadastresse{
    color: #FFA6A6;
    font-size: 14px;
    font-family: 'Prompt', sans-serif;
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 20px;
}

.bordaInputs{
    border:none;
    border-bottom: 1px solid #FFFFFF;
    display: flex;
}

.registrese{
    display: flex;
    background-color: rgba(143, 35, 87, 0.4); 
    border: 3px solid  rgba(224, 58, 116);
    box-shadow: 0px 1px 12px  rgba(224, 58, 116);
    border: none;
    border-radius: 115px;
    width: 60vw;
    max-width: 350px;
    height: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
}

@media (min-width: 768px){
    .emailInput{
    width: 70vw;
    height: 32px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
    margin-top: 50px;
}

.senhaInput{
    width: 70vw;
    height: 32px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
}

.menssagemDeCadastresse{
    color: #FFA6A6;
    font-size: 16px;
    font-family: 'Prompt', sans-serif;
    font-weight: 200;
    margin-top: 30px;
    margin-bottom: 20px;
}

.menssagem{
    font-family: 'B612 Mono', monospace;
    color: #FFA6A6;
    font-size: 18px;
    margin-bottom: 50px;
    margin-top: 10px;
}

}
`