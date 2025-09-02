import { useContext } from "react"
import { TicketContext } from "../context/TicketContext"

export const TicketList = () => {
  const {tickets} = useContext(TicketContext)
  
  return (
    <div className="w-full max-w-8xl mx-auto p-4">
      <h2 className="text-center text-2xl font-bold text-[#EC6726] mb-4">
      </h2>

      <div className="overflow-x-auto border rounded-lg">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100 text-center font-medium">
              <tr>
                <th className="px-4 py-2 border">Chamado</th>
                <th className="px-4 py-2 border">Médico</th>
                <th className="px-4 py-2 border">Hospital</th>
                <th className="px-4 py-2 border">Paciente</th>
                <th className="px-4 py-2 border">Sexo</th>
                <th className="px-4 py-2 border">Tipo Chamado</th>
                <th className="px-4 py-2 border">Status Chamado</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {tickets.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-4 text-gray-500">
                    Nenhum chamado disponível
                  </td>
                </tr>
              ) : (
                tickets.map((ticket) => (
                  <tr key={ticket.nr_chamado}>
                    <td className="px-4 py-2 border">{ticket.nr_chamado}</td>
                    <td className="px-4 py-2 border">{ticket.cd_medico}</td>
                    <td className="px-4 py-2 border">{ticket.cd_hospital}</td>
                    <td className="px-4 py-2 border">{ticket.nm_paciente}</td>
                    <td className="px-4 py-2 border">{ticket.ie_sexo}</td>
                    <td className="px-4 py-2 border">{ticket.ie_tipo_chamado}</td>
                    <td className="px-4 py-2 border">{ticket.ie_status_chamado}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}