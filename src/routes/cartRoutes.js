import express from "express";
//import * as cartController from '../controllers/cartControllers.js'
import {createCartNew} from "../controllers/cartControllers.js"
const cartRouter = express.Router();

cartRouter.post("/", createCartNew);

export default cartRouter;

