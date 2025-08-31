import { Router } from "express";
import FindAllHospitals from "../service/hospital/FindAllHospitals.js";
import FindAllCoordinates from "../service/hospital/FindAllCoordinates.js";
import FindHospital from "../service/hospital/FindHospital.js";
import { authenticate, authentication } from "../utils/jwt.js";


const endpoints = Router();

endpoints.get("/hospitals", authenticate, async (req, resp) => {
  try {
    let r = await FindAllHospitals();
    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

endpoints.get("/hospitals/coordinates", authenticate, async (req, resp) => {
  try {
    let r = await FindAllCoordinates();
    
    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

endpoints.get("/hospitals/:cd_hospital", authenticate, async (req, resp) => {
  try {
    let cd_hospital = req.params.cd_hospital;
    let r = await FindHospital(cd_hospital)

    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})



export default endpoints;