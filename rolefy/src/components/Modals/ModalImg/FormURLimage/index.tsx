import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../../services/api";
import { iPlaces, LoginContext } from "../../../../context/Login";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Form } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Idata {
    event: string
}
const idBusiness = localStorage.getItem("@idBusiness")

function SendUrlImage(){
    const {  imagePlace, setImagePlace } = useContext(LoginContext);

    const formSchema = yup.object({
        image:yup.string().required("Informe a URL da imagem.")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    
   
    
   async function PatchRequest(data : iPlaces){
    event?.preventDefault()    
    const Url = [...imagePlace, data] 
        
    await api
    .patch(`/places/${idBusiness}`, Url)
    .then((response) =>  {
        setImagePlace(response.data.image)
        localStorage.setItem("@ImagePlaces", JSON.stringify(response.data.image));
        toast.success("Imagem Adicionada a galeria.")
    })
    .catch((error) => {
        console.log(error)
    })

}
    return (
        <Form onSubmit={(event : any) => PatchRequest(event)}>
            <input 
            type="text" 
            placeholder="Informe a URL da imagem..." 
            {...register("image")}
            />
            <button type="submit">{<AiOutlineArrowRight/>}</button>
        </Form>
    )

}

export default SendUrlImage;