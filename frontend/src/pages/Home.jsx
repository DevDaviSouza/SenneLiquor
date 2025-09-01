export default function HomePage() {
  return (
    <div className="p-8 flex flex-col text-center gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold text-[#EC6726] my-8">Gerenciamento de chamados</h1>

    <div className="text-center max-w-7xl text-3xl flex flex-col gap-9 text-[#9B9B9B]">
        <p>Seja bem vindo ao meu teste técnico! Esse sistema tem como função realizar o gerenciamento e distribuição de chamados para médicos especializados no exame de liquor(líquido cefalorraqueano)!</p>
        <p>Para a entender melhor todas as funcionalidades, basta visitar uma das abas(chamados e Mapa de distribuição de chamados), onde encontrará uma lista dos chamados com todas suas informações e um mapa para visualização do local onde o exame do chamado será feito.</p>
        <p>Espero que goste do teste, qualquer dúvida fico à disposição!</p>
    </div>
    </div>
  )
}