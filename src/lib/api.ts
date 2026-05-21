import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,  // Ye ab kaam nahi karega for /quote
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;