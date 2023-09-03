import express from "express";
import ProductController from "../controllers/productsControllers.js";

const views = express.Router();
const products = new ProductController();


views.get("/", async (req , res)=>{
    try {
        
        const { limit, page, sort, query } = req.query || {};
        const product = await products.allProducts(limit, page, sort, query);
        res.render("index", {product: product })
        
    } catch (error) {
        console.log(error);
    }
})

export default views