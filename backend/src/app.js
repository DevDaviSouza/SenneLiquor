import express from "express";
import cors from "cors";
import sequelize from "./models/db.js";
import addRotas from "./rotas.js";

const servidor = express();

servidor.use(cors()); 
servidor.use(express.json());


addRotas(servidor);
const PORTA = 3000;

servidor.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`); 
});