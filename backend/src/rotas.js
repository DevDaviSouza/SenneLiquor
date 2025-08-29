import DoctorController from "./controller/DoctorController.js";
import HospitalController from "./controller/HospitalController.js";
import TicketController from "./controller/TicketController.js";

export default function addRotas(servidor) {
  servidor.use(DoctorController);
  servidor.use(HospitalController);
  servidor.use(TicketController)
}