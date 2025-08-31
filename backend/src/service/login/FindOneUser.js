import db from "../../models/db.js";

export default async function FindOneUser(userInfo) {
  return await db.login.findOne({
    where: {
      nm_login: userInfo.nm_login,
      ds_senha: userInfo.ds_senha
    }
  });
}