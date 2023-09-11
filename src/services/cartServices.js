import {cartModel} from "../models/cartModels.js";
import { productModel } from "../models/productsModels.js";


class CartService{
    constructor(){}      
    createCart = async () => {
        try {
            const create = await cartModel.create({});
            return create;
        } catch (error) {
            throw new Error(error)
        }
    }
    
    showCart = async () => {
        const allCarts = await cartModel.find();
        return allCarts;
    }
    addToCart = async (cid, pid) => {
        try {
          const productFind = await productModel.findById(pid);
          let cart = await cartModel.findOne({ _id: cid });
      
          if (!productFind) {
            return "Producto no encontrado";
          }
          if (!cart) {
            cart = await cartModel.create({ products: [{ product: pid, quantity: 1 }] });
            return cart;
          }
      
          const existingProduct = cart.products.find((item) =>item.product.toString() === pid);
      
          if (existingProduct) {
            existingProduct.quantity ++;
          } else {
            cart.products.push({ product: pid, quantity: 1 });
          }
      
          await cart.save();
          return cart;
        } catch (error) {
          console.log(error);
          return "No se pudo agregar al carrito";
        }
      }
      
      deleteProduct = async(cid, pid) => {

        try {
            let cart = await cartModel.findOne({_id: cid});

            if(!cart){
                throw new Error("carrito no encontrado");
            }

            cart.products = cart.products.filter(item => item.product.toString() !== pid);
            
            
            await cart.save();

            return cart
        } catch (error) {
            "producto no encontrado"
        }
      }

      clearCart = async (cid) => {
        try {
          const cart = await cartModel.findOne({ _id: cid });
    
          if (!cart) {
            throw new Error("Carrito no encontrado");
          }
    
          cart.products = [];
          await cart.save();
    
          return "Carrito vacio";
        } catch (error) {
          console.log(error);
          throw new Error("No se pudo limpiar el carrito");
        }
      }

      getCartWithProducts = async (cid) => {
        try {
          const cart = await cartModel
            .findOne({ _id: cid })
            .populate("products.product");
          
          if (!cart) {
            throw new Error("Carrito no encontrado");
          }
      
          return cart;
        } catch (error) {
          console.log(error);
          throw new Error("No se pudo obtener el carrito con productos");
        }
      }
}

export default CartService

