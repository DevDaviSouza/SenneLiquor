
import { logIn } from "../api/services/LoginService";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {

  const login = async (email, password) => {
    try {
      const userInfo = { nm_login: email, ds_senha: password };
      const response = await logIn(userInfo);

      if (response.data.token !== undefined && response.data.token !== null && response.data.token !== "") {
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={{login}}>
      {children}
    </AuthContext.Provider>
  )
}