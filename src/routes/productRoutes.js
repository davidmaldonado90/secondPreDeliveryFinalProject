import express from 'express';
import ProductController from '../controllers/productsControllers.js';

const products = new ProductController();
const router = express.Router();

router.post("/", products.createProduct);
router.get("/", products.allProducts);
router.get("/:id", products.getProductById);
router.put("/:id", products.updateProduct);
router.delete("/:id", products.deleteProduct);

export default router
