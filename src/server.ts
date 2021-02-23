import 'reflect-metadata'
import express, { response } from 'express';
import "./database"

const app  = express();

app.get("/users", (request , response)=>{
    return response.json({message : "Hello World" });
} )
app.listen(3333, () => console.log("Server is Running!"));