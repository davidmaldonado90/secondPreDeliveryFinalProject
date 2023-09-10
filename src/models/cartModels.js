import mongoose from "mongoose";

const collectionName = 'carts';

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
            product: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "productos"
            },
            quantity: {
              type: Number,
              default: 1
            }
          
          }
    ],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const cartModel = mongoose.model(collectionName, cartSchema);
