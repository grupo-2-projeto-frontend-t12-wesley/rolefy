import styled from "styled-components";

export const Form =  styled.form`
    
    border: 1px solid rgba(96, 66, 94, 0.85);
    display: flex;
    border-radius: 3rem;
    justify-content: space-between;


    input{
        margin-left: 1rem;
        background-color: transparent;
        border: none;
    }
    button{

        color: rgba(96, 66, 94, 0.85);
        margin-right: 1rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button:hover{
        border-radius: 50rem;
        background-color: rgba(123, 66, 94, 0.85);
        font-weight: 900;
    }

        
`;