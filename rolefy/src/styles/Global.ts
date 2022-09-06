import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

 
/*  interface ICreateGlobalStyle {
children: any;

} */

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
} 
    :root{
        /* --BackgroundDegrade: linear-gradient(180deg, #0A0202 0%, rgba(90, 31, 91, 0.697917) 50%, #000000 100%); */
        --black-letter: #000000;

    }

    body {
    background-image: linear-gradient(180deg, #0A0202 0%, rgba(90, 31, 91, 0.697917) 50%, #000000 100%);
    color: var(--black-letter);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  #root{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;