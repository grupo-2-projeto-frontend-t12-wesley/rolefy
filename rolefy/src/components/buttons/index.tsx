import React from "react"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement>{
    classname:string
}

export const ButonLogin = ({classname}: ButtonProps) => ( 
    <>
       <button className={classname}>Entrar</button>
    </>
)