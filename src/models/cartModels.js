import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        },
        description:{
            type: String,
        }
    },
    {   
        timestamps: true,
        versionKey: false
    }
)

export const cartModel = mongoose.model('cart', cartSchema)