import express from "express";
import * as cartController from '../controllers/cartControllers.js'

const cartRouter = express.Router();

cartRouter.post("/cart", cartController.createCart);

export default cartRouter;

