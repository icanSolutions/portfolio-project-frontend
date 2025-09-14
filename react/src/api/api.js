import axios from "axios";

export const reviews = axios.create({
baseURL: "http://127.0.0.1:5002",
  withCredentials: true, 
});

export const products = axios.create({
    baseURL: "http://localhost:5001",
    withCredentials: true,
});