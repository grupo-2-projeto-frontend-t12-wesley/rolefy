import axios from "axios";

const api = axios.create({
  baseURL: "https://rolefy.herokuapp.com",
  timeout: 5000,
});

export default api;
