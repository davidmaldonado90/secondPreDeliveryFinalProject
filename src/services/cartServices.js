import {cartModel} from "../models/cartModels.js";

export const createCart = async () => {
    try {
        const create = await cartModel.create({});
        return create;
    } catch (error) {
        
    }
}

