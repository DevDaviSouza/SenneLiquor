

export default function Login() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <img src="/assets/images/logo.svg" alt="Senne Liquor" />

      <form className="flex flex-col gap-4 justify-center items-center">
       <label className="flex flex-col text-lg">Email:
          <input className="bg-[#e4e4e4] py-1 rounded-md w-80 px-1 outline-none" type="email" placeholder="Email" />
       </label>


        <label className="flex flex-col text-lg">Senha:
          <input className="bg-[#e4e4e4] py-1 rounded-md w-80 px-1 outline-none" type="password" placeholder="Senha" />
       </label>

        <button className="bg-[#ec6726] w-3/4 text-white py-1 rounded-md text-lg mt-5" type="submit">Confirmar</button>
      </form>
    </main>
  )
}