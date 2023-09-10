import { productModel } from "../models/productsModels.js";

class ProductService{
  constructor(){}
      createProduct = async (data) => {
          try {
              const response = await productModel.create(data);
              return response
          } catch (error) {
              throw new Error(error)
          }
      }
          
      getAllProducts = async (limit, query, sort, page) => {
        try {
          const options = {
            page,
            limit,
            sort: sort ? { price: sort === 'asc' ? 1 : -1 } : {},
            lean: true,
          };
    
          const products = await productModel.paginate(query || {}, options);
    
          return products;
        } catch (error) {
          throw new Error(error);
        }
      }
        
      getProductById = async (id) => {
          try {
              const prodById = await productModel.findById(id);
              if (!prodById) {
                  console.log(`No product found with ID: ${id}`);
                }
              return prodById;
          } catch (error) {
            throw new Error(error);
              
          }
        }
      
      updateProduct = async (id, data) => {
          try {
              const update = await productModel.updateOne({ _id: id }, data)
              return update
          } catch (error) {
              throw new Error(error);
          }
        }
      
      deleteProduct = async (id) => {
          try {
              const deleteProd = await productModel.deleteOne({_id :id});
              return deleteProd
          } catch (error) {
              throw new Error(error);
          }
        }


  }


export default ProductService