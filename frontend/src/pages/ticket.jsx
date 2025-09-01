import { BadgePlus } from "lucide-react"


export const TicketPage = () => {
  return (
    <div className="flex flex-col p-8 items-center justify-center">
      <div className="text-4xl font-bold text-[#EC6726] my-8">
        <h1>Chamados</h1>
      </div>

      <div className="w-7xl  mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse p-4">
            <thead >
              <tr className="flex flex-row items-center justify-between mb-4 text-lg font-light">
                <th>Chamado</th>
                <th>Médico</th>
                <th>Hospital</th>
                <th>Paciente</th>
                <th>Sexo</th>
                <th>Tipo_chamado</th>
                <th>Status_chamado</th>
              </tr>
            </thead>

            <div className="flex flex-row items-center justify-between mt-4">
              <div></div>
              <div className="w-4xl border border-[#9B9B9B]"></div>
              <div><BadgePlus className="text-[#EC6726] size-10 cursor-pointer" /></div>
            </div>

            <tbody>
              <tr className="flex flex-row items-center justify-between my-4 text-lg font-light">
                <td>001</td>
                <td>Dr. João Silva</td>
                <td>Hospital Central</td>
                <td>Maria Souza</td>
                <td>Feminino</td>
                <td>Emergência</td>
                <td>Aberto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}