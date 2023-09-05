import ProductService from "../services/productsServices.js";

const service = new ProductService()

class ProductController {
  constructor(){}

      createProduct = async (req,res) => {
          try {
              const {body} = req;
              const response = await service.createProduct(body)
              res.status(200).json(response)
          } catch (error) {
              res.status(400).json(error.message)
          }
      }
      allProducts = async (req) => {
        try {
          const {limit , page, sort , query} = req.query  || {};
          const products = await service.getAllProducts(limit , page, sort , query);
          return products
          
        } catch (error) {
          console.log(error);
          throw new Error(error)
        }
      };
    
      getProductById = async (req, res) => {
        try {
          const pid = req.params.id;  
          const prodById = await service.getProductById(pid);
      
          if (!prodById) {
            res.status(404).json({ message: 'Product not found' });
          } else {
            res.status(200).json(prodById);
          }
        } catch (error) {
          res.status(400).json(error.message);
        }
      };
    
      updateProduct = async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const update = await service.updateProduct(id, data);
            res.status(200).json({ message: 'product updated successfully' });
        } catch (error) {
            res.status(400).json(error.message);
        }
    
      }
      
      deleteProduct = async (req, res) => {
        try {
            const id = req.params.id;
            const deleteProd = await service.deleteProduct(id);
            res.status(200).json({ message: 'product deleted successfully' });
        } catch (error) {
            res.status(400).json(error.message);
        }
    
      }


  }

export default ProductController

