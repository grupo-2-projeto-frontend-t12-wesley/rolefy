import axios from "axios";

export const api = axios.create({
  baseURL: "https://rolefy.herokuapp.com/",
  timeout: 2000,
});
