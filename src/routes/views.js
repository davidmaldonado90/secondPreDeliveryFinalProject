import { Router } from "express";
import ProductController from "../controllers/productsControllers.js";

const views = Router();
const products = new ProductController();


views.get("/", async (req , res)=>{
    try {
        
        const { limit, page, sort, query } = req.query;
        const product = await products.allProducts(req, res);
        res.render("index", {product})
    } catch (error) {
        console.log(error);
    }
})

export default views