import { useContext } from "react"
import { TicketContext } from "../context/TicketContext"

export const TicketList = () => {
  const {tickets} = useContext(TicketContext)
  
  return (
    <div className="w-7xl  mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse p-4 overflow-y-scroll ">
            <thead >
              <tr className="flex flex-row items-center justify-between mb-4 text-lg font-light">
                <th className="w-38">Chamado</th>
                <th className="w-38">Médico</th>
                <th className="w-38">Hospital</th>
                <th className="w-38">Paciente</th>
                <th className="w-38">Sexo</th>
                <th className="w-38">Tipo_chamado</th>
                <th className="w-38">Status_chamado</th>
              </tr>
            </thead>

            <div className="flex flex-row items-center justify-center my-4">
              <div className="w-4xl border border-[#9B9B9B]"></div>
            </div>

            <tbody className="scroll-auto overflow-scroll  max-h-2/5 ">
              {
                tickets.length === 0 ?
                  <td colSpan="7" className="text-center text-gray-500">Nenhum chamado disponível</td>
                :
                tickets.map((ticket) => (
                  <tr className="flex flex-row items-center justify-between my-4 text-md font-light w-full border">
                    <td className="w-38 text-center">{ticket.nr_chamado}</td>
                    <td className="w-38 text-center">{ticket.cd_medico}</td>
                    <td className="w-38 text-center">{ticket.cd_hospital}</td>
                    <td className="w-38 text-center">{ticket.nm_paciente}</td>
                    <td className="w-38 text-center">{ticket.ie_sexo}</td>
                    <td className="w-38 text-center">{ticket.ie_tipo_chamado}</td>
                    <td className="w-38 text-center">{ticket.ie_status_chamado}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}