import express from 'express';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js'
import './db.js'

//environment variable
import dotenv from 'dotenv'
dotenv.config()

const app = express();

//midleware
app.use(express.json())

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes)


const port = process.env.PORT

app.listen(port, () => {
    console.log("server run");
})

