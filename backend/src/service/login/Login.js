import { generateToken } from "../../utils/jwt.js";
import FindOneUser from "./FindOneUser.js";

export default async function Login(userInfo) {
  if(userInfo == null ) return ;

  let user = await FindOneUser(userInfo)

  if(user == null ) return ;

  let token = generateToken(userInfo)

  if(token == null ) return ;
  
  return token;
}