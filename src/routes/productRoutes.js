import express from 'express';
//import * as productController from '../controllers/productsControllers.js'
import { AllProducts } from '../controllers/productsControllers.js';

const router = express.Router()

//router.post("/", productController.createProduct);
router.get("/", AllProducts);
//router.get("/:id", productController.getProductById)
//router.put("/:id", productController.updateProduct);
//router.delete("/:id", productController.deleteProduct)

export default router
