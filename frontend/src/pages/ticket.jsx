import { useNavigate } from "react-router-dom"
import { HeaderComponent } from "../components/Header"
import { TicketList } from "../components/TicketList"
import { useEffect } from "react"


export default function TicketPage() {
  const navigate = new useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      navigate("/")
    }
  }, [])
  
  return (
    <div>
      <HeaderComponent />
      <div className="flex flex-col p-8 items-center justify-center">
      <div className="md:text-4xl text-2xl font-bold text-[#EC6726] my-8">
        <h1>Chamados</h1>
      </div>

      <TicketList />
    </div>
    </div>
    
  )
}