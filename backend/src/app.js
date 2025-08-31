import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import addRotas from "./rotas.js";

dotenv.config();

const servidor = express();

servidor.use(cors()); 
servidor.use(express.json());


addRotas(servidor);

servidor.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`); 
});