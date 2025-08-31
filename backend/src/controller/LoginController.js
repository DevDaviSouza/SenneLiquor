import { Router } from "express";
import FindAllUsers from "../service/login/FindAllUsers.js";
import CreateUser from "../service/login/CreateUser.js";
import Login from "../service/login/Login.js";

const endpoints = Router();

endpoints.post("/user", async (req, resp) => {
  try {
    let userInfo = req.body;
    CreateUser(userInfo)

    resp.send(userInfo)
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

endpoints.post("/login", async (req, resp) => {
  try {
    let userInfo  = req.body;
    let token = await Login(userInfo)

    resp.send({user: userInfo, token: token})
  } catch (e) {
    resp.send({error: e.toString()})
  }
})

endpoints.get("/user", async (req, resp) => {
  try {
    let r = await FindAllUsers();
    
    resp.send(r);
  } catch (e) {
    resp.send({error: e.toString()})
  }
})




export default endpoints;