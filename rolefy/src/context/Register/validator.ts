import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatoria"),
  image: yup.string().required("Foto obrigatoria"),
  cep: yup.string().required("Cep obrigatorio"),
});
