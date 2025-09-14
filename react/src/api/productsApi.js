import { products } from "./api";

export const getProducts = () => products.get("/products");
export const getProduct = (id) => products.get(`/products/${id}`);
export const createProduct = (data) => products.post("/products", data);
export const updateProduct = (id, data) => products.put(`/products/${id}`, data);
export const deleteProduct = (id) => products.delete(`/products/${id}`);