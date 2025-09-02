import apiClient from "../ApiClient";

export const findCoordinates = (id, token) => apiClient.get(`/hospitals/coordinates/${id}?x-access-token=${token}`);