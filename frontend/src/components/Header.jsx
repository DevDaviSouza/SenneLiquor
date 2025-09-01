import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones do lucide-react
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 border-gray-300 mt-3 relative">

      <img src="/assets/images/logo.svg" alt="Senne Liquor" className="h-10" />

      <nav className="hidden md:block text-lg w-3/6 py-3 border-y">
        <ul className="flex justify-around">
          <li className="cursor-pointer hover:text-[#EC6726] transition">
            Chamados
          </li>
          <li className="cursor-pointer hover:text-[#EC6726] transition">

            Mapa de distribuição dos chamados

          </li>
        </ul>
      </nav>

      <div className="hidden md:block">
        <h3 className="text-lg text-[#EC6726] font-extrabold">
          davi.souza.santos
        </h3>
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
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li
            className="cursor-pointer hover:text-[#EC6726] transition"
            onClick={() => setIsOpen(false)}
          >
            Chamados
          </li>
          <li
            className="cursor-pointer hover:text-[#EC6726] transition"
            onClick={() => setIsOpen(false)}
          >
            Mapa de distribuição dos chamados
          </li>
        </ul>

        <div className="p-6 border-t mt-auto">
          <h3 className="text-lg text-[#EC6726] font-extrabold">
            davi.souza.santos
          </h3>
        </div>
      </div>
    </header>
  );
};
