import { reviews } from "./api";

export const getReviews = () => reviews.get("/reviews");
export const getReview = (id) => reviews.get(`/reviews/${id}/`);
export const createReview = (data) => reviews.post("/reviews", data);
export const updateReview = (id, data) => reviews.put(`/reviews/${id}`, data);
export const deleteReview = (id) => reviews.delete(`/reviews/${id}`);