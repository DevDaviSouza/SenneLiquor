import db from "../../models/db.js";

export default async function FindAllHospitals() {
  return await db.hospital.findAll();
}