import HospitalController from "./controller/HospitalController.js";
import TicketController from "./controller/TicketController.js";
import LoginController from "./controller/LoginController.js";

export default function addRotas(servidor) {
  servidor.use(HospitalController);
  servidor.use(TicketController)
  servidor.use(LoginController);
}