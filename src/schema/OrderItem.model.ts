import mongoose, {Schema} from "mongoose";


const orderItemSchema = new Schema ({
itemQuantity:{
    type: Number,
    required: true,
},
itemPrice:{
    type: Number,
    required: true,
},
orderId:{
  type: Schema.Types.ObjectId,
  ref: "Order",

},
productId:{
    type: Schema.Types.ObjectId,
    ref: "Product"
}

},
{ timestamps: true, collection: "orderItems" }, // updatedAt, createdAt
)

export default mongoose.model("orderItems", orderItemSchema );