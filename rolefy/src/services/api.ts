 import axios from "axios";

const token: string = localStorage.getItem("token") || "";

const api = axios.create({
  baseURL: "https://rolefy.herokuapp.com",
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});

export default api; 