import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const confirmLogin = () => {
    const token = login(email, password);

    if (token != "" && token != null && token != undefined) {  
      setTimeout(() => {
        navigate("/home");
      }, 1000);
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

        <button onClick={() => confirmLogin()} className="bg-[#ec6726] hover:bg-amber-800 cursor-pointer w-3/4 text-white py-1 rounded-md text-lg mt-5" type="button">Confirmar</button>
      </form>
    </main>
  )
}