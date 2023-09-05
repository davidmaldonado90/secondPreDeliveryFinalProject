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
            //const { limit = 10 , page = 1 , sort, query } = req.query;
            const skip = ( page - 1 ) * limit;
            const filter = query ? { type: query } : {};
            let sortOptions = {} 
              if(sort){
                sortOptions = { price : sort === 'asc' ? 1 : -1}
            };
            const totalCount = await productModel.countDocuments(filter);
            const totalPages = Math.ceil(totalCount / limit);
            const products = await productModel
              .find(filter)
              .sort(sortOptions)
              .skip(skip)
              .limit(parseInt(limit))
              .lean();
            const nextPage = page < totalPages ? parseInt(page) + 1 : null;
            const prevPage = page > 1 ? parseInt(page) -1 : null;
      
            const result = {
                status: "success",
                payload: products,
                totalPages: totalPages,
                prevPage: prevPage,
                nextPage: nextPage,
                page: parseInt(page),
                hasPrevPage: prevPage !== null,
                hasNextPage: nextPage !== null,
                prevLink: prevPage !== null ? `/products?page=${prevPage}&limit=${limit}` : null,
                nextLink: nextPage !== null ? `/products?page=${nextPage}&limit=${limit}` : null
              }
            return result;
      
          } catch (error) {
              throw new Error(error)
          }
        };
        
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