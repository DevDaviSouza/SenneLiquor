import db from "../../models/db.js";

export default async function CreateUser(userInfo) {
  return await db.login.create({
    nm_login: userInfo.nm_login,
    ds_senha: userInfo.ds_senha
  });
}