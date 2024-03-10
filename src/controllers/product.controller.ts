import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Error";
import ProductService from "../models/Product.service";

const productService = new ProductService;

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
       console.log("getAllProducts");
       res.render("products")
     
 
    } catch (err) {
      console.log("Error, getAllProducts", err);
      if(err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
      // res.json({ });  
    }
  };
  productController.createNewProducts = async (req: Request, res: Response) => {
    try {
       console.log("createNewProducts");
      
      //TODO TOKENS
 
    } catch (err) {
      console.log("Error, createNewProducts", err);
      if(err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
      // res.json({ });  
    }
  };
  productController.updateChosenProducts = async (req: Request, res: Response) => {
    try {
       console.log("updateChosenProducts");
      
      //TODO TOKENS
 
    } catch (err) {
      console.log("Error, updateChosenProducts", err);
      if(err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
      // res.json({ });  
    }
  };
export default productController;