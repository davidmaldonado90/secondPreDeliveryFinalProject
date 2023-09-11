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
      allProducts = async (req, res) => {
        try {
          const page = parseInt(req.query.page) || 1;
          const limit = 10;
          const query = {}; // Puedes agregar filtros de consulta aquí si es necesario
          const sort = req.query.sort;
    
          const productsData = await service.getAllProducts(limit, query, sort, page);

    
          // Formatea los datos para tu requisito específico
          const result = {
            status: "success",
            payload: productsData.docs,
            totalPages: productsData.totalPages,
            prevPage: productsData.prevPage,
            nextPage: productsData.nextPage,
            page: page,
            hasPrevPage: productsData.hasPrevPage,
            hasNextPage: productsData.hasNextPage,
            prevLink: productsData.hasPrevPage
              ? `/products?page=${productsData.prevPage}`
              : '',
            nextLink: productsData.hasNextPage
              ? `/products?page=${productsData.nextPage}`
              : '',
          };
    
          // Devuelve los datos en lugar de renderizar la vista
          res.json(result);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      }
    
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

