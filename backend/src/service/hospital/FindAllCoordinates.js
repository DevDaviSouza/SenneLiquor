import db from "../../models/db.js";

export default async function FindAllCoordinates() {
let coordenadas = await db.hospital.findAll({
    attributes: ['cd_hospital','nr_latitude', 'nr_longitude']
  });
  return coordenadas;
}