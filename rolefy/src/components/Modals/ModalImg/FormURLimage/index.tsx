import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../../services/api";
import { iPlaces, LoginContext } from "../../../../context/Login";
import { useContext } from "react";
interface Idata {
    data: string
}
const idBusiness = localStorage.get("@idBusiness")

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
    
    // function newImage(data: iPlaces){
    //     if(!data) return;

    //     setImagePlace([...imagePlace, data])
    //  }
    
    function PatchRequest(data : iPlaces){
        const imgUrl = 
        api.patch(`/places/${idBusiness}`)

}
    return (
        <form>
            <input 
            type="text" 
            placeholder="Informe a URL da imagem..." 
            {...register("image")}
            />
            <button type="submit"></button>
        </form>
    )

}

export default SendUrlImage;