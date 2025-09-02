import apiClient from "../ApiClient";

export const fetchTickets = (token) => apiClient.get(`/tickets?x-access-token=${token}`);