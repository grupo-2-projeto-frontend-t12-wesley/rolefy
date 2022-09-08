import axios from "axios"
import { createContext, ReactNode } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

interface RegisterProviderProps{
    children: ReactNode
  }
  
  export interface OnSubmitRegisterProps{
    name:string
    email:string
    password: string
    cep:string
    image:string
    }
  
    interface IRegisterContextProps{
      onSubmitFunction: (data: OnSubmitRegisterProps) => void
    }
  
  export const RegisterContext = createContext<IRegisterContextProps>({} as IRegisterContextProps);
  
  export const RegisterProvider = ({ children }:RegisterProviderProps) => {
      
    const navigate = useNavigate()
    
    const onSubmitFunction = (dados:OnSubmitRegisterProps) => { const info = {...dados, favourites:[], company: false}
       axios
        .post("https://rolefy.herokuapp.com/users", info)
        .then((res) => {
           toast.success(`Cadastro realizado com sucesso!!!`);
            navigate("/");
        })
         .catch((err) => toast.error("This didn't work."));
        }
  
      return(
          <RegisterContext.Provider value={{onSubmitFunction}}>{children}</RegisterContext.Provider>
      )
  }