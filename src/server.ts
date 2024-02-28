/* 
console.log("EXUCUTED");

import moment from "moment";


const currentTime = moment().format("YYYY MM DD");
console.log(currentTime);

const person: string = "Martin";
const count: number = 100; */



// Architectual pattern: MVC, DI, MVP
// MVC = Model View Controller 

//Design pattern: Middleware, Decotar


import dotenv from "dotenv";
dotenv.config();
//console.log("PORT:", process.env.PORT);
//console.log("MONGO_URL:", process.env.MONGO_URL);

import mongoose from "mongoose";
import app from "./app";


mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
console.log("MongoDB connection succeed");
const PORT = process.env.PORT ?? 3003;
app.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
})
.catch((err) => 
console.log("ERROR on connection MongoDB", err));

// 'method :url :status :re[content-length]-responce ms'