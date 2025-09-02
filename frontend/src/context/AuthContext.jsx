import { createContext, useState } from "react";
import { logIn } from "../api/services/LoginService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const userInfo = { nm_login: email, ds_senha: password };
      const response = await logIn(userInfo);

      if (response.data.token !== undefined && response.data.token !== null && response.data.token !== "" && response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.nm_login)
        setUser(localStorage.getItem("user"));
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={{login, user}}>
      {children}
    </AuthContext.Provider>
  )
}