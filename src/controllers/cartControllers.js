import CartService from "../services/cartServices.js"

const carts = new CartService();

class CartController {
  constructor() {}

  createCartNew = async (req,res) => {
    try {
        const response = await carts.createCart();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}

  addToCart = async (req, res) => {
    const { pid , cid } = req.params;

    try {
      const result = await CartService.addToCart(pid, cid);
      console.log(result);
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(500).json({ message: "no se pudo agregar" });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

export default CartController
