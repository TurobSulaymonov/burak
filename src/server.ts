import dotenv from "dotenv";
dotenv.config( {
    path: process.env.NODE_ENV  === "production" ? ".env.production" : ".env"
} );
//console.log("PORT:", process.env.PORT);
//console.log("MONGO_URL:", process.env.MONGO_URL);

import mongoose from "mongoose";
import server from "./app";

const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);

mongoose
.connect(process.env.MONGO_URL as string, {})

.then((data) => {
console.log("MongoDB connection succeed");
 const PORT = process.env.PORT ?? 3003; 

server.listen(PORT, function () {
    console.info(`The server is running successfully on port: ${PORT}`);
    console.info(`Admin project on http://localhost:${PORT}/admin \n`);
});
})
.catch((err) => 
console.log("ERROR on connection MongoDB", err));

// 'method :url :status :re[content-length]-responce ms'


