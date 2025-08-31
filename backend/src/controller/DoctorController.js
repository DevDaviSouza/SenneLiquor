import { Router } from "express";
import FindAllDoctors from "../service/doctor/FindAllDoctors.js";
import { authenticate } from "../utils/jwt.js";


const endpoints = Router();

endpoints.get("/doctors", authenticate, async (req, resp) => {
  try {
    let r = await FindAllDoctors();
    
    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

export default endpoints;