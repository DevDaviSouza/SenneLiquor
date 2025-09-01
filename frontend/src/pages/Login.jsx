import { useState } from "react";
import { logIn } from "../api/services/LoginService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const userInfo = { nm_login: email, ds_senha: password };
      const response = await logIn(userInfo);

      console.log(response.data.token);
      
      if (response.data.token !== undefined && response.data.token !== null && response.data.token !== "") {
        localStorage.setItem("token", response.data.token);
      }
    }catch(e) {
      console.log(e);
    }
  }
  
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <img src="/assets/images/logo.svg" alt="Senne Liquor" />

      <form className="flex flex-col gap-4 justify-center items-center">
       <label className="flex flex-col text-lg">Email:
          <input onChange={(e) => setEmail(e.target.value)} className="bg-[#e4e4e4] py-1 rounded-md w-80 px-1 outline-none" type="text" placeholder="Email" />
       </label>


        <label className="flex flex-col text-lg">Senha:
          <input onChange={(e) => setPassword(e.target.value)} className="bg-[#e4e4e4] py-1 rounded-md w-80 px-1 outline-none" type="password" placeholder="Senha" />
       </label>

        <button onClick={() => login()} className="bg-[#ec6726] w-3/4 text-white py-1 rounded-md text-lg mt-5" type="button">Confirmar</button>
      </form>
    </main>
  )
}