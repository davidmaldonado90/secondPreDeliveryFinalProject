import CartService from "../services/cartServices.js"

const CartS = new CartService();

class CartController {
  constructor() {}

  createCartNew = async (req,res) => {
    try {
        const response = await CartS.createCart();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}

  addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
      const result = await cartService.addToCart(productId, quantity);
      if (result.success) {
        res.status(200).json({ message: result.message });
      } else {
        res.status(400).json({ message: result.message });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }


}

export default CartController
