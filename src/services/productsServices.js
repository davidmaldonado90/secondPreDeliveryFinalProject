import { productModel } from "../models/productsModels.js";

export const createProduct = async (data) => {
    try {
        const response = await productModel.create(data);
        return response
    } catch (error) {
        throw new Error(error)
    }
}
    
export const getAllProducts = async () => {
    try {     
        const products = await productModel.find();
        return products;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getProductById = async (id) => {
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

  export const updateProduct = async (id, data) => {
    try {
        const update = await productModel.updateOne({ _id: id }, data)
        return update
    } catch (error) {
        throw new Error(error);
    }
  }

  export const deleteProduct = async (id) => {
    try {
        const deleteProd = await productModel.deleteOne({_id :id});
        return deleteProd
    } catch (error) {
        throw new Error(error);
    }
  }