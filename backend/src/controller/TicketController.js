import { Router } from "express";
import FindAllTickets from "../service/ticket/FindAllTickets.js";
import { authenticate } from "../utils/jwt.js";


const endpoints = Router();

endpoints.get("/tickets", authenticate, async (req, resp) => {
  try {
    let r = await FindAllTickets();
    
    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

export default endpoints;