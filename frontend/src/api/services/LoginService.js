import apiClient from "../ApiClient";

export const logIn = (user) => apiClient.post("/login", user);