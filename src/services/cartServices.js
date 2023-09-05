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

    addToCart = async (cid , pid) => {

        try {

            const productFind = await productModel.findById({_id: pid});
            console.log(productFind);
            let cart = await cartModel.findOne({_id: cid});
            console.log(cart);

            
            if(!productFind){
                return "producto no encontrado";
            }

            if(!cart){
                return "carrito no encontrado"
            }

            const newProduct = {product: pid, quantity}

            // if(cart){
            //     cart.products.push(newProduct)
            // }

            const existItem = cart.products.find(item => item._id == pid)

            if (existItem){
                existItem.quantity += quantity;
            } else {
                cart.products.push (newProduct)
            }
            await cart.save()

            return cart
        } catch (error) {
            console.log(error);
            return "no se pudo agregar al carrito"
        }
    }

}

export default CartService

