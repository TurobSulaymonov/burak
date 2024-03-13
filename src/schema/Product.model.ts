import mongoose, {Schema} from "mongoose";
import { ProductColletion, ProductSize, ProductStatus, ProductVolume } from "../libs/enums/product.enum";
const productSchema = new Schema (
    {
    productStatus: {
        type: String,      
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
        
    },
     productColletion: {
        type: String,
        enum: ProductColletion,
        required: true,
     },
     productName: {
        type: String,
        required: true,
     },
     productPrice: {
      type: String,
      required: true,
     },
     productCount:{
        type: String,
        required: true,
     },
     productSize:{
        type: String,
        enum: ProductSize,
        default: ProductSize.NORMAL,
        
     },
     productVolume: {
        type: String,
        enum: ProductVolume,
        default: ProductVolume.ONE,
     },
     productDesc:{
        type: String,
        required: true,

     },
     productImage: { 
        type: [String],
        default: [],
     },
     productViews:{
     type:Number,
     default: 0,
     },
    
    },
    
    { timestamps: true}

);

productSchema.index(
    { productName: 1, ProductSize: 1, ProductVolume: 1},
    {unique: true}
);

export default mongoose.model("Product", productSchema)
