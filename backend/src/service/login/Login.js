import { generateToken } from "../../utils/jwt.js";
import FindOneUser from "./FindOneUser.js";

export default async function Login(userInfo) {
  if(userInfo == null ) return {error: 'Dados inválidos'};

  let user = await FindOneUser(userInfo)

  if(user == null ) return {error: 'Usuário ou senha inválidos'};

  let token = generateToken(userInfo)

  if(token == null ) return {error: 'Erro ao gerar token'};
  
  return token;
}