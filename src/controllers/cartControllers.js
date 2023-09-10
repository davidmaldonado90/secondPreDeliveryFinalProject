import CartService from "../services/cartServices.js"

const carts = new CartService();

class CartController {
  constructor() {}

  showCart = async (req,res) => {
    try {
      const result = await carts.showCart();
      res.status(200).json(result)
    } catch (error) {
      
    }
  }

  createCartNew = async (req,res) => {
    try {
        const response = await carts.createCart();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

  addToCart = async (req, res) => {
    const { cid, pid } = req.params;

    try {
      const result = await carts.addToCart(cid, pid);
      if (result) {
        res.status(200).json("producto agregado con exito")
      } else {
        res.status(500).json({ message: "no se pudo agregar" });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  deleteProduct = async (req, res) => {
    const {cid , pid} = req.params;

    try {
      const prodCart = await carts.deleteProduct(cid, pid)
      if (prodCart) {
        res.status(200).json( {message : "producto eliminado"})
      }
      else{
        res.status(500).json("no se pudo eliminar" )
      }
    } catch (error) {
      console.log(error);
    }
  }

  clearCart = async (req, res) => {
    const { cid } = req.params;

    try {
      const result = await carts.clearCart(cid);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json("No se pudo limpiar el carrito");
    }
  }

  getCartWithProducts = async (req, res) => {
    const { cid } = req.params;

    try {
      const cart = await carts.getCartWithProducts(cid);
      res.status(200).json(cart);
    } catch (error) {
      console.log(error);
      res.status(500).json("No se pudo obtener el carrito con productos");
    }
  }
}

export default CartController
