import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description:{
            type: String
        },
        code: {
            type: String
        },
        price: {
            type: Number
        },
        status: {
            type: String
        },
        stock: {
            type: Number
        },
        category: {
            type: String
        },
        thumbnails: {
            type: String
        }
    },
    {   
        timestamps: true,
        versionKey: false
    }
)

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model('productos', productSchema)