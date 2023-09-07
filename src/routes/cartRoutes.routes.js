import express from "express";
import CartController from "../controllers/cartControllers.js"

const cartRouter = express.Router();
const cart = new CartController();

cartRouter.post("/", cart.createCartNew);


cartRouter.put('/:cid/products/:pid', cart.addToCart)



export default cartRouter;