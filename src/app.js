import express from 'express';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js'
import views from './routes/views.js'
import './db.js'
import path from 'path';
import handlebars from 'express-handlebars';
import __dirname from '../src/utils.js' 

//environment variable
import dotenv from 'dotenv'
dotenv.config()

const app = express();

//midleware
app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes)
app.use("/", views)

const port = process.env.PORT

app.listen(port, () => {
    console.log("server run");
})

