import express from 'express';
import productRoutes from './routes/productRoutes.routes.js';
import cartRoutes from './routes/cartRoutes.routes.js'
import views from './routes/views.routes.js';
import userRoute from './routes/users.routes.js';
import sessionRouter from './routes/session.routes.js';
import './db.js';
import path from 'path';
import handlebars from 'express-handlebars';
import __dirname from '../src/utils.js' 
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

//environment variable
import dotenv from 'dotenv';
dotenv.config()

const app = express(); 

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());

app.use(session({

        store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 10
    }),
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))

app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/session", sessionRouter);
app.use("/users", userRoute);
app.use("/", views);



const port = process.env.PORT

app.listen(port, () => {
    console.log("server run");
});




