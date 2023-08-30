//import * as cartServices from '../services/cartServices.js';
import {createCart} from "../services/cartServices.js"

export const createCartNew = async (req,res) => {
    try {
        const response = await createCart()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}



