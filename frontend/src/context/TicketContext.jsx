import { createContext, use, useEffect, useState } from "react";
import { fetchTickets } from "../api/services/TicketService"

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([])
  
  useEffect(() => {
    const getTickets = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetchTickets(token);

        setTickets(response.data)
      } catch (error) {
        console.error("Erro ao buscar os chamados:", error)
      }
    }

    getTickets()
  }, [])

  return (
    <TicketContext.Provider value={{tickets}}>
      {children}
    </TicketContext.Provider>
  )
}