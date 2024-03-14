import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";


const productService = new ProductService ();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
       console.log("getAllProducts");
       const data = await productService.getAllProducts();
       // console.log("data", data);
       res.render("products", {products: data});
     
 
    } catch (err) {
      console.log("Error, getAllProducts", err);
      if(err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
      // res.json({ });  
    }
  };
  productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
       console.log("createNewProducts");
 
 if(!req.files?.length) 
       throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
      const data:ProductInput = req.body;
      data.productImages = req.files?.map(ele => {
        return ele.path.replace(/\\/g, "/");

      });
     
     
     
     
      await productService.createNewProduct(data);




       res.send(`<script> alert("Successfu creation");window.local.replace("admin/product/all) </script>`);
    } catch (err) {
      console.log("Error, createNewProducts", err);
      const message = 
       err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(`<script> alert("${message}");window.local.replace("admin/product/all) </script>`);
 }
  };
  productController.updateChosenProducts = async (req: Request, res: Response) => {
    try {
       console.log("updateChosenProducts");
       const id = req.params.id;
       console.log("id", id);

       const result = await productService.updateChosenProducts(id, req.body)

    res.status(HttpCode.OK).json({data: result});
 
    } catch (err) {
      console.log("ERROR, updateChosenProducts", err);
      if(err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };
export default productController;