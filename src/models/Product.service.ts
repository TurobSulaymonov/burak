import { Product,
        ProductInput, 
        ProductInquiry, 
        ProductUpdateInput }
 from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";
import { ObjectId } from "mongoose";
import ViewService from "./View.service";
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";

class ProductService{
    private readonly productModel;
    public viewService;
 
    constructor(){
        this.productModel = ProductModel;
        this.viewService = new ViewService();
    }
    /** SPA **/  
   public async getProducts (inquiry: ProductInquiry): Promise<Product[]> {

    const match: T = {productStatus: ProductStatus.PROCESS} ;
    if(inquiry.productCollection)
      match.productCollection = inquiry.productCollection;
      console.log("match", match);
    if(inquiry.search) {
      match.productName = {$regex: new RegExp (inquiry.search, "i") };
    };
    console.log("match", match);
    const sort : T = 
    inquiry.order === "productPrice"
     ? {[inquiry.order]: 1}
     : {[inquiry.order]: -1};
     const result = await this.productModel.aggregate([{$match: match},
      {$sort: sort},
      {$skip: (inquiry.page * 1 - 1) * inquiry.limit },
      {$limit: inquiry.limit * 1},
     ]) 
     .exec();
     if(!result) new Errors (HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
   }

   public async getProduct( 
    memberId: ObjectId  | null , 
    id: string):
     Promise <Product> {
         const productId = shapeIntoMongooseObjectId(id);
         let result = await this.productModel
         .findOne({
          _id: productId, 
          productStatus: ProductStatus.PROCESS,
          })
          .exec();

          if(!result) throw  new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
         
           if(memberId) {
            //check Existence
            const input:  ViewInput= {
              memberId: memberId,
              viewRefId: productId,
              viewGroup: ViewGroup.PRODUCT,
            };
              const existView = await this.viewService.checkViewExistence(input);
            //  Insert New View log 
               console.log("Existview:", !!existView)
            if(!existView) {
               //  Insert View
              console.log("PLANNING TO INSERT NEW VIEW");
              await this.viewService.insertMemberView(input);
            }
              //Increase count
              result = await this.productModel
              .findByIdAndUpdate(productId,
                {$inc: {productViews: +1} },
                {new: true}
              )
              .exec();

          
           }
          // TODO Of authticated users  => first => view log creation
         
          return result;
   }

    /** SSR  **/
    public async getAllProducts():
    Promise<Product[]>{
     
      const result = await this.productModel
      .find()
      .exec();
      if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    
      return result;

  }

    public async createNewProduct(
        input: ProductInput): 
        Promise<Product> {
        try{
         return await this.productModel.create(input);
        }
        catch (err){
          console.error("ERROR, model:createNewProduct", err);
          throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
          
        }
    }
    public async updateChosenProducts(
        id: string,
        input:ProductUpdateInput):
      Promise<Product>{
        id = shapeIntoMongooseObjectId(id);
        const result = await this.productModel
        .findOneAndUpdate({_id: id}, input, {new: true})
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

      
        return result;

    }
  
}

export default ProductService