import { AuthProvider } from "./AuthContext"
import { MapProvider } from "./MapContext"
import { TicketProvider } from "./TicketContext"

const Provider = ({children}) => {
  return(
    <AuthProvider>
      <TicketProvider>
        <MapProvider>
          {children}
        </MapProvider>
      </TicketProvider>
    </AuthProvider>
  )
}

export default Provider