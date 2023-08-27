import * as productServices from '../services/productsServices.js';

export const createProduct = async (req,res) => {
    try {
        const {body} = req;
        const response = await productServices.createProduct(body)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}

export const getAllProducts = async (req, res) => {
    try {
      const products = await productServices.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  export const getProductById = async (req, res) => {
    try {
      const pid = req.params.id;  
      const prodById = await productServices.getProductById(pid);
  
      if (!prodById) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json(prodById);
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const update = await productServices.updateProduct(id, data);
        res.status(200).json({ message: 'product updated successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }

  }
  
  export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteProd = await productServices.deleteProduct(id);
        res.status(200).json({ message: 'product deleted successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }

  }