import { createContext } from "react";
import { logIn } from "../api/services/LoginService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const login = async (email, password) => {
    try {
      const userInfo = { nm_login: email, ds_senha: password };
      const response = await logIn(userInfo);

      if (response.data.token !== undefined && response.data.token !== null && response.data.token !== "" && response.status === 200) {
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const logOut = () => {
    try {
      localStorage.removeItem("token")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{login, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}