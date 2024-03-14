import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";


const routerAdmin = express.Router();
/* Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.procesLogin);
routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup",
makeUploader("members").single("memberImage"), 
restaurantController.procesSignup);
routerAdmin.get("/logout", restaurantController.logout);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/* Product */
routerAdmin.get("/product/all",
restaurantController.verifyRestaurant,
productController.getAllProducts);
routerAdmin
.post(
"/product/create",
restaurantController.verifyRestaurant,
// uploadProductsImage.single("productImage"),
//makeUploader("products").single("productImage"),
makeUploader("products").array("productImages", 5),
productController.createNewProduct);
routerAdmin
.post("/product/:id", 
restaurantController.verifyRestaurant,
productController.updateChosenProducts);




/*  User */

routerAdmin.get("/user/all", restaurantController.verifyRestaurant, restaurantController.getUsers)

export default routerAdmin;