import {cartModel} from "../models/cartModels.js";

export const createCart = async (data) => {
    try {
        const create = await cartModel.create(data);
        return create;
    } catch (error) {
        
    }
}
