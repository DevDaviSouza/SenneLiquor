import db from "../../models/db.js";

export default async function FindAllTickets() {
  return await db.ticket.findAll();
}