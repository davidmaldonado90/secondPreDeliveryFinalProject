import * as cartServices from '../services/cartServices.js';

export const createCart = async (req,res) => {
    try {
        const {body} = req;
        const response = await cartServices.createCart(body)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}