import express from "express";
import CartController from "../controllers/cartControllers.js"

const cartRouter = express.Router();
const cart = new CartController();

cartRouter.get("/", cart.showCart)
cartRouter.get("/:cid/products", cart.getCartWithProducts);
cartRouter.post("/", cart.createCartNew);
cartRouter.delete("/:cid/products/:pid", cart.deleteProduct)
cartRouter.delete("/:cid", cart.clearCart)
cartRouter.put('/:cid/products/:pid', cart.addToCart)


export default cartRouter;