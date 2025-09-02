import { useContext, useState } from "react";
import { Menu, X, LogOutIcon } from "lucide-react"; // ícones do lucide-react
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const navigate = new useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const {logOut} = useContext(AuthContext)

  const confirmLogOut = () => {
    logOut()
    navigate("/")
    
  }

  return (
    <header className="flex justify-between items-center p-4 border-gray-300 mt-3 relative">

      <img src="/assets/images/logo.svg" alt="Senne Liquor" className="h-10" />

      <nav className="hidden md:block text-lg w-3/6 py-3 border-y">
        <ul className="flex justify-around">
          <li className="cursor-pointer hover:text-[#EC6726] transition">
            <NavLink to="/tickets">Chamados</NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#EC6726] transition">
          </li>
          <li className="cursor-pointer hover:text-[#EC6726] transition">

            <NavLink to="/maps">Mapa de distribuição dos chamados</NavLink>

          </li>
        </ul>
      </nav>

      <div className="hidden md:block">
        <h3 onClick={confirmLogOut} className="text-xl font-bold text-[#EC6726] cursor-pointer"><LogOutIcon size={28}/></h3>
      </div>

      <button
        className="md:hidden text-[#EC6726] z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-[#EC6726]">Menu</h2>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li
            className="cursor-pointer hover:text-[#EC6726] transition"
            onClick={() => setIsOpen(false)}
          >
            <NavLink to="/tickets">Chamados</NavLink>
          </li>
          <li
            className="cursor-pointer hover:text-[#EC6726] transition"
            onClick={() => setIsOpen(false)}
          >
            <NavLink to="/maps">Mapa de distribuição dos chamados</NavLink>
          </li>
        </ul>

        <div className="p-6 border-t mt-auto">
        </div>
      </div>
    </header>
  );
};
