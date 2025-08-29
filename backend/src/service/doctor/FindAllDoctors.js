import db from "../../models/db.js";

export default async function FindAllDoctors() {
  return await db.doctor.findAll();
}