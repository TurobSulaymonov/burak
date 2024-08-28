import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";
import {Server as SocketIOServer } from "socket.io";
import  http from "http";
import session from "express-session";
import ConnectMongodb from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongodb(session);

const  store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',
  });


/** 1-ENTRANCE **/
const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS**/  

app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
  cookie: {
    //maxAge: 1000 * 3600 * 3, // 3hours  
    maxAge: 1000 * 3600 * 6, //hr
  },
  store: store,
  resave: true,
  saveUninitialized: true
    })
);
app.use(function (req, res, next) {
  const sessionInctance = req.session as T;
  res.locals.member = sessionInctance.member;
  next();
})

/** 3-VIEWS **/  
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4=ROUTERS **/  
//`
app.use("/admin", routerAdmin);   
app.use("/", router); 

const server = http.createServer(app)
const io = new SocketIOServer(server, {
  cors: {
    origin: true,
    credentials: true,
  }});
   
  let summaryclient = 0;
  io.on("connection", (socket) => {
   summaryclient++;
   console.log(`Connection & total [${summaryclient}]`);

   socket.on("Disconeect", () => {
    summaryclient--;
    console.log(`Disconnection& total [${summaryclient}]`);
   })
  } ); 
export default server;