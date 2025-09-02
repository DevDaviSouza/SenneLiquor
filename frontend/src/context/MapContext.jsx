import { createContext, useContext, useEffect, useState } from "react";
import { findCoordinates } from "../api/services/HospitalService";
import { TicketContext } from "./TicketContext";
import { Hospital } from "lucide-react";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([])
  const [coordinates, setCoordinates] = useState([]) 
  const { tickets } = useContext(TicketContext);

    useEffect(() => {
      const hosp = tickets.map(ticket => ticket.cd_hospital);
      setHospitals(hosp);
      
    },[tickets])

useEffect(() => {
  const getCoordinates = async () => {
    const token = localStorage.getItem("token");
    const newCoordinates = [];

    for (const hospital of hospitals) {
      const response = await findCoordinates(hospital, token);
      newCoordinates.push(response.data);
    }
    setCoordinates(newCoordinates);
    
  }

  getCoordinates();
}, [hospitals]);

 
  return (
    <MapContext.Provider value={{coordinates}}>
      {children}
    </MapContext.Provider>
  )
}