import db from "../../models/db.js";

export default async function FindCoordinatesById(id) {
  let coordenadas = await db.hospital.findByPk(
    id,
    { attributes: ['cd_hospital', 'nr_latitude', 'nr_longitude'] }
  );
  return coordenadas;
}