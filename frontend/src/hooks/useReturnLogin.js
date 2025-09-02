import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useReturnLogin = () => {
  const navigate = useNavigate();

  navigate("/")
}

export default useReturnLogin;