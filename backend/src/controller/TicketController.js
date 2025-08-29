import { Router } from "express";
import FindAllTickets from "../service/ticket/FindAllTickets.js";


const endpoints = Router();

endpoints.get("/tickets", async (req, resp) => {
  try {
    let r = await FindAllTickets();
    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

export default endpoints;