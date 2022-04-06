import express from "express";
import BodyParser from 'body-parser';
import * as orders from "./routes/orders";
import { AppDataSource } from "./data-source";
import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
    .then(() => console.log('Database Initialized'))
    .catch((error) => console.log(error))

const app = express();
const port = 8080; // default port to listen
app.use(BodyParser.json());

orders.register(app)

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );