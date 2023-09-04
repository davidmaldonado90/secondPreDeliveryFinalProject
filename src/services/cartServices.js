import {cartModel} from "../models/cartModels.js";
import { productModel } from "../models/productsModels.js";

class CartService{
    constructor(){}    

    createCart = async () => {
        try {
            const create = await cartModel.create({});
            return create;
        } catch (error) {

        }
    }

    addToCart = async (req, res) => {
        const { id, quantity } = req.body

        try {
            const productId = await productModel.findById(id);

            let cart = await cartModel.findOne();
            if(!cart){
                cart = new cartModel
            }

            const existItem = cartModel.items.find(item => item.productModel.equals(productId))

            if (existItem){
                existItem.quantity += quantity;
            } else {
                cart.items.push ({product: id, quantity})
            }
            await cart.save()

            res.status(500).json({message: "error interno"})
        } catch (error) {
            
        }
    }

}

export default CartService

