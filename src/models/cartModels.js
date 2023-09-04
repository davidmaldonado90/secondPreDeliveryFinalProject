
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        type: [
          {
            product: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "products"
            },
            quantity: {
              type: Number,
              default: 1
            }
          }
        ],
        default: []
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const cartModel = mongoose.model('cart', cartSchema);
