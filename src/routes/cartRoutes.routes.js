import express from "express";
import CartController from "../controllers/cartControllers.js"

const cartRouter = express.Router();
const cart = new CartController();

cartRouter.post("/", cart.createCartNew);


cartRouter.post('/api/cart/:id', async (req, res) => {
  const { productId, quantity } = req.body;
  const result = await cart.addToCart(productId, quantity);
  if (result.success) {
    res.json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
});

// Obtener el contenido del carrito
// cartRouter.get('/api/cart', async (req, res) => {
//   const result = await cart.getCartContents();
//   if (result.success) {
//     res.json(result.cartItems);
//   } else {
//     res.status(404).json({ message: result.message });
//   }
// });



export default cartRouter;

