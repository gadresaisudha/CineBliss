import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" 
    },
    orderItems: [{
        moviename: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        movie:{
            type: mongoose.Schema.Types.ObjectId, required: true, ref: "Movie" 
        }

    }],
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },

    
    
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema);
export default Order;