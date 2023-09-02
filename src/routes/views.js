import { Router } from "express";
import ProductController from "../controllers/productsControllers.js";

const views = Router();
const products = new ProductController();


views.get("/", async (req,res)=>{
    try {
        
        const product = await products.allProducts(req, res);
        res.render("index", {products: product} )
    } catch (error) {
        console.log(error);
    }
})

export default views