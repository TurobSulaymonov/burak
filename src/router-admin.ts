import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

const routerAdmin = express.Router();
/* Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.procesLogin);
routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.procesSignup);
routerAdmin.get("/logout", restaurantController.logout);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/* Product */
routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProducts);
routerAdmin.post("/product/update", productController.updateChosenProducts);




/*  User */

export default routerAdmin;