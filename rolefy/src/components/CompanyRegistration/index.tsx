import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { Conteiner } from "./style";

import toast from "react-hot-toast";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRegisterCompany {
  name: string;
  description: string;
  cep: string;
  image: string;
  city: string;
}

interface ICompanyId {
  companyId: string;
}

const idUser = localStorage.getItem("@idUser");

function CompanyRegistration() {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatorio"),
    description: yup.string().required("Campo obrigatorio"),
    cep: yup.string().required("Campo obrigatorio"),
    image: yup.string().required("Campo obrigatorio"),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterCompany>({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  function apiRegistration(data: IRegisterCompany) {
    const companyData = {
      ...data,
      image: [data.image],
      userId: idUser,
    };

    api
      .post("https://rolefy.herokuapp.com/places", companyData)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("@idBusiness", resp.data.id);
        const updateUser = { companyId: resp.data.id };

        api
          .patch(`users/${idUser}`, updateUser)
          .then((response) => {
            console.log(response);
            toast.success("Sucesso!!!");
            navigate("/empresa");
          })
          .catch((err) => toast.error("Erro!!!"));
      })
      .catch((erro) => {
        toast.error("Erro!!!");
      });
  }

  console.log(errors);

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(apiRegistration)}>
        <div className="conteinerInput">
          <input type="text" placeholder="Nome" {...register("name")} />

          <p className="erroMessage">{errors.name?.message}</p>
        </div>

        <div className="conteinerInput">
          <input
            type="text"
            placeholder="Descrição da sua empresa"
            {...register("description")}
          />

          <p className="erroMessage">{errors.description?.message}</p>
        </div>

        <div className="conteinerInput">
          <textarea
            placeholder="Descrição da sua empresa"
            {...register("description")}
            className="textArea"
          ></textarea>
          <p className="erroMessage textarea">{errors.description?.message}</p>
        </div>

        <div className="conteinerInput">
          <input type="text" placeholder="cep" {...register("cep")} />

          <p className="erroMessage">{errors.cep?.message}</p>
        </div>

        <div className="conteinerInput">
          <input
            type="text"
            placeholder="Url da imagen"
            {...register("image")}
          />

          <p className="erroMessage">{errors.image?.message}</p>
        </div>

        <div className="conteinerInput">
          <select id="estado" {...register("city")}>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>

          <p className="erroMessage">{errors.city?.message}</p>
        </div>

        <div className="conteinerInput">
          <button>Enviar</button>
        </div>
      </form>
    </Conteiner>
  );
}

export default CompanyRegistration;
