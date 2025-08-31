import db from "../../models/db.js";

export default async function FindAllUsers() {
  let users = await db.login.findAll();
  return users;
}