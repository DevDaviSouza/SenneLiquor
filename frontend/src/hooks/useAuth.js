import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redireciona para a página inicial se não houver token
      navigate("/");
    }
  }, [navigate]); // Adicionamos navigate ao array de dependências
};

export default useAuth;