import axios from "axios";

const API = axios.create({
  baseURL: "https://movie-ticket-backend-5t6p.onrender.com/api",
});

export default API;