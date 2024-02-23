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
console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);
