import { HeaderComponent } from "../components/Header"
import { TicketList } from "../components/TicketList"


export default function TicketPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="flex flex-col p-8 items-center justify-center">
      <div className="text-4xl font-bold text-[#EC6726] my-8">
        <h1>Chamados</h1>
      </div>

      <TicketList />
    </div>
    </div>
    
  )
}