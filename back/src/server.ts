import express from "express";
import router from "./routes/indexRoutes"
import bodyParser from 'body-parser'
import cors from 'cors' 

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use(router)

export default server;