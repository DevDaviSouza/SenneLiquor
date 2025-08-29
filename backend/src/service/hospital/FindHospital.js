import db from "../../models/db.js";

export default async function FindHospital(cd_hospital) {
  let hospital = await db.hospital.findOne({
    where: { cd_hospital: cd_hospital }
  });
  return hospital;
}