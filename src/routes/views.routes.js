import express from "express";
import ProductController from "../controllers/productsControllers.js";
import { productModel } from "../models/productsModels.js";

const views = express.Router();
const products = new ProductController();


views.get('/', async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      let result = await productModel.paginate({}, { page, lean: true });
      let prevLink = result.hasPrevPage
        ? `/?page=${result.prevPage}`
        : '';
      let nextLink = result.hasNextPage
        ? `/?page=${result.nextPage}`
        : '';
      let isValid = !(result.page <= 0 || result.page > result.totalPages);
  
      res.render('index', { result, prevLink, nextLink, isValid });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  });


export default views