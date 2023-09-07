import express from "express";
import ProductController from "../controllers/productsControllers.js";

const views = express.Router();
const products = new ProductController();


views.get("/", async (req , res)=>{
    try { 
        const product = await products.allProducts(req);
        res.render("index", { product: product.payload })
        
    } catch (error) {
        throw new Error(error)
    }
})

export default views